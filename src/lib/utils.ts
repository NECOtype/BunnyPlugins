export function sluggit(text: string) {
	return text
		.toString()
		.toLowerCase()
		.replace(/\s+/g, '_')
		.replace(/[^\w-]+/g, '')
		.replace(/--+/g, '-')
		.replace(/^-+/, '')
		.replace(/-+$/, '')
}

export function asksForJson(request: Request): boolean {
	const userAgent = request.headers.get("user-agent") ?? "";
	const accept = request.headers.get("accept") ?? "";

	// If it's a bot, or asking explicitly for JSON
	return (
		accept.includes("application/json") ||
		/Discord|Revenge|Bunny/i.test(userAgent)
	);
}