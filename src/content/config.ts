import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const fontCollection = defineCollection({
	loader: glob({ pattern: "**/README.{md,mdx}", base: "src/content/fonts" }),
	schema: z.object({
		title: z.string(),
		source: z.string(),
		date: z.string().or(z.date()).transform((val) => new Date(val).toLocaleDateString()),
		slug: z.string().optional(),
	})
});

export const collections = {
	font: fontCollection
}