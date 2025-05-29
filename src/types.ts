import type { CollectionEntry } from "astro:content";

export type FontEntry = CollectionEntry<'font'> & { slug: string };
export type FontData = FontEntry['data'];