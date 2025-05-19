// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import rehypePrettyCode from 'rehype-pretty-code';
import {
	transformerMetaHighlight,
	transformerNotationDiff,
	transformerRenderWhitespace,
} from '@shikijs/transformers';

export default defineConfig({
	markdown: {
		syntaxHighlight: false, // disabling defautl highligher
		rehypePlugins: [
			[
				rehypePrettyCode,
				{
					theme: {
						light: 'everforest-dark',
						dark: 'everforest-dark',
					},
					transformers: [
						transformerNotationDiff(),
						transformerMetaHighlight(),
						transformerRenderWhitespace(),
					],
				},
			],
		],
	},

	devToolbar: {
		enabled: false,
	},

	adapter: vercel(),
	vite: {
		plugins: [tailwindcss()],
	},
})