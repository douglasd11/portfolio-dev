import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 12;
const localLimits = new Map<string, { count: number; resetAt: number }>();

const redisUrl = import.meta.env.UPSTASH_REDIS_REST_URL;
const redisToken = import.meta.env.UPSTASH_REDIS_REST_TOKEN;
const redis = redisUrl && redisToken ? new Redis({ url: redisUrl, token: redisToken }) : null;

const distributedLimiter = redis
	? new Ratelimit({
		redis,
		limiter: Ratelimit.slidingWindow(MAX_REQUESTS, '10 m'),
		prefix: 'portfolio:chat:burst-limit',
		timeout: 1200,
		ephemeralCache: new Map()
	})
	: null;

export const checkChatRateLimit = async (identifier: string) => {
	if (distributedLimiter) {
		const result = await distributedLimiter.limit(identifier);
		return { allowed: result.success, resetAt: result.reset };
	}

	const now = Date.now();
	const current = localLimits.get(identifier);
	if (!current || current.resetAt <= now) {
		const resetAt = now + WINDOW_MS;
		localLimits.set(identifier, { count: 1, resetAt });
		return { allowed: true, resetAt };
	}

	current.count += 1;
	return { allowed: current.count <= MAX_REQUESTS, resetAt: current.resetAt };
};
