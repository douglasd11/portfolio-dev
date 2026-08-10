import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = ({ request }) => {
	const sitemapUrl = new URL('/sitemap.xml', request.url).href;
	return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemapUrl}\n`, {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
			'Cache-Control': 'public, max-age=3600'
		}
	});
};
