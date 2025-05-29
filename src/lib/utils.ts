import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

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

export function itsJson(request: Request): boolean {
	const userAgent = request.headers.get("user-agent") ?? "";
	const accept = request.headers.get("accept") ?? "";

	return (
		accept.includes("application/json") ||
		/Discord|Revenge|Bunny/i.test(userAgent)
	);
}