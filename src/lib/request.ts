export function shouldServeJson(request: Request): boolean {
	const userAgent = request.headers.get("user-agent") || "";
	const accept = request.headers.get("accept") || "";

	// If it's a bot, or asking explicitly for JSON
	return (
		userAgent.toLowerCase().includes("discord") ||
		accept.includes("application/json")
	);
}