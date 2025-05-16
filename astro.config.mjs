// @ts-check
import { defineConfig } from 'astro/config'

import vercel from '@astrojs/vercel';

import expressiveCode from 'astro-expressive-code';

// https://astro.build/config
export default defineConfig({
	adapter: vercel(),
	integrations: [
		expressiveCode({
			themes: ['vitesse-dark'],
			styleOverrides: {
				borderRadius: "0",
			},
		})
	]
})