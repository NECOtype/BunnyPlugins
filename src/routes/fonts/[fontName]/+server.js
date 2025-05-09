import { fontData } from '$lib/font-manifests.js'

/**
 * @param {{ params: { fontName: string }, request: Request }}
 * */
export async function GET({ params, request }) {
	const { fontName } = params;
	const userAgent = request.headers.get('user-agent') || '';
	const accept = request.headers.get('accept') || '';

	const isBrowser = accept.includes('text/html') && !userAgent.includes('Discord');

	if (isBrowser) {
		return new Response(null, { status: 204 });
	}

	const fontLoader = fontData[fontName];
	if (!fontLoader) {
		return new Response(JSON.stringify({ error: `Font "${fontName}" not found.`}), {
			status: 404,
			headers: { 'Content-Type': 'application/json' }
		});
	}

	try {
		const module = await fontLoader();
		const jsonData = module.default;
		
		return new Response(JSON.stringify(jsonData), {
			headers: {
				'Content-Type': 'application/json',
				'Cache-Control': 'public, max-age=3600'
			}
		});
	} catch (err) {
		console.error(`Failed to load font manifest for "${fontName}":`, err);
		return new Response(JSON.stringify({ error: 'Server error loading font.' }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' }
		});
	}
}
