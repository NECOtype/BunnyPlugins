import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
	theme: {
		extend: {
			fontFamily: {
				sans: ['IBM Plex Sans Condensed', ...defaultTheme.fontFamily.sans],
				mono: ['IBM Plex Mono', ...defaultTheme.fontFamily.mono]
			},
			colors: {
				background: 'oklch(var(--background))',
				foreground: 'oklch(var(--foreground))',
				primary: 'oklch(var(--primary))',
				muted: 'oklch(var(--muted))',
				links: 'oklch(var(--links))',
				border: 'oklch(var(--border))',
				error: 'oklch(var(--error))',
				warning: 'oklch(var(--warning))',
				green: 'oklch(var(--green))',
			}
		}
	},
	plugins: [
		require('@tailwindcss/typography')
	]
}

export default config