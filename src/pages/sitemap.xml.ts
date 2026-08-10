import type { APIRoute } from 'astro';

export const prerender = false;

const routes = ['/', '/projects', '/resume'];

export const GET: APIRoute = ({ request }) => {
	const origin = new URL(request.url).origin;
	const urls = routes
		.map((route) => `<url><loc>${new URL(route, origin).href}</loc></url>`)
		.join('');

	return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			'Cache-Control': 'public, max-age=3600'
		}
	});
};
