<script>
	import { page } from "$app/state";

	$: fontName = page.params.fontName;

	/**
	 * Correctly format fontname to display
	 * @param {string} font
	 * @return {string}
	 */
	function renderedFontName(font) {
		if (!font) return "";
		const words = font.replace(/_/g, " ").split(" ");
		return words
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(" ");
	}
</script>

<svelte:head>
	<title>{renderedFontName(fontName)}</title>
</svelte:head>

<h1>{renderedFontName(fontName)}</h1>

<style>
</style>
