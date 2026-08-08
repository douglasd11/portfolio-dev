import { Redis } from '@upstash/redis';

export const DAILY_CREDIT_LIMIT = 40;

export type ChatModel = 'openai/gpt-oss-20b' | 'openai/gpt-oss-120b';
export type ChatReasoningEffort = 'low' | 'medium' | 'high';

export type CreditBalance = {
	limit: number;
	remaining: number;
	resetAt: number;
};

export type CreditReservation = CreditBalance & {
	allowed: boolean;
	cost: number;
};

export class CreditStoreUnavailableError extends Error {
	constructor() {
		super('Daily credit storage is not configured.');
		this.name = 'CreditStoreUnavailableError';
	}
}

const BOGOTA_UTC_OFFSET_MS = 5 * 60 * 60 * 1000;
const KEY_PREFIX = 'portfolio:chat:daily-credits';
const localUsage = new Map<string, number>();

const redisUrl = import.meta.env.UPSTASH_REDIS_REST_URL;
const redisToken = import.meta.env.UPSTASH_REDIS_REST_TOKEN;
const redis = redisUrl && redisToken ? new Redis({ url: redisUrl, token: redisToken }) : null;

const getDayWindow = (now = Date.now()) => {
	const bogotaTime = new Date(now - BOGOTA_UTC_OFFSET_MS);
	const dayKey = bogotaTime.toISOString().slice(0, 10);
	const resetAt = Date.UTC(
		bogotaTime.getUTCFullYear(),
		bogotaTime.getUTCMonth(),
		bogotaTime.getUTCDate() + 1,
		5
	);
	return {
		dayKey,
		resetAt,
		ttlSeconds: Math.max(1, Math.ceil((resetAt - now) / 1000))
	};
};

const getStorageKey = (visitorId: string, dayKey: string) => `${KEY_PREFIX}:${dayKey}:${visitorId}`;

const requireProductionStore = () => {
	if (!redis && import.meta.env.PROD) throw new CreditStoreUnavailableError();
};

export const getCreditCost = (model: ChatModel, effort: ChatReasoningEffort) => {
	if (model === 'openai/gpt-oss-20b') return effort === 'high' ? 2 : 1;
	return effort === 'high' ? 5 : 3;
};

export const getCreditBalance = async (visitorId: string): Promise<CreditBalance> => {
	const { dayKey, resetAt } = getDayWindow();
	const key = getStorageKey(visitorId, dayKey);
	requireProductionStore();

	const used = redis
		? Number((await redis.get<number>(key)) || 0)
		: localUsage.get(key) || 0;

	return {
		limit: DAILY_CREDIT_LIMIT,
		remaining: Math.max(0, DAILY_CREDIT_LIMIT - used),
		resetAt
	};
};

export const reserveCredits = async (
	visitorId: string,
	cost: number
): Promise<CreditReservation> => {
	const { dayKey, resetAt, ttlSeconds } = getDayWindow();
	const key = getStorageKey(visitorId, dayKey);
	requireProductionStore();

	if (!redis) {
		const used = localUsage.get(key) || 0;
		const allowed = used + cost <= DAILY_CREDIT_LIMIT;
		if (allowed) localUsage.set(key, used + cost);
		return {
			allowed,
			cost,
			limit: DAILY_CREDIT_LIMIT,
			remaining: Math.max(0, DAILY_CREDIT_LIMIT - (allowed ? used + cost : used)),
			resetAt
		};
	}

	const script = `
		local used = tonumber(redis.call('GET', KEYS[1]) or '0')
		local cost = tonumber(ARGV[1])
		local creditLimit = tonumber(ARGV[2])
		local ttl = tonumber(ARGV[3])
		if used + cost > creditLimit then
			return {0, math.max(0, creditLimit - used)}
		end
		local newUsed = redis.call('INCRBY', KEYS[1], cost)
		if newUsed == cost then redis.call('EXPIRE', KEYS[1], ttl) end
		return {1, math.max(0, creditLimit - newUsed)}
	`;
	const result = await redis.eval(
		script,
		[key],
		[cost, DAILY_CREDIT_LIMIT, ttlSeconds]
	) as [number, number];

	return {
		allowed: Number(result[0]) === 1,
		cost,
		limit: DAILY_CREDIT_LIMIT,
		remaining: Number(result[1]),
		resetAt
	};
};

export const refundCredits = async (visitorId: string, cost: number) => {
	const { dayKey } = getDayWindow();
	const key = getStorageKey(visitorId, dayKey);
	requireProductionStore();

	if (!redis) {
		const used = localUsage.get(key) || 0;
		localUsage.set(key, Math.max(0, used - cost));
		return;
	}

	await redis.eval(
		`local used = tonumber(redis.call('GET', KEYS[1]) or '0')
		 if used <= tonumber(ARGV[1]) then redis.call('DEL', KEYS[1]); return 0 end
		 return redis.call('DECRBY', KEYS[1], ARGV[1])`,
		[key],
		[cost]
	);
};
