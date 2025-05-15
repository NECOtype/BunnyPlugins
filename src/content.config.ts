import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const fontmark = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "../src/content/fonts" })
});
const fontjson = defineCollection({
	loader: glob({ pattern: "**/*.json", base: "../src/content/fonts" })
});

export const collections = { fontmark, fontjson };