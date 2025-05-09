<script>
	import { get } from "svelte/store";
	import { link } from "$lib/links";

	/**
	 * Label displayed on the CopyButton.
	 * Dynamically updates when copying.
	 * @type {string}
	 */
	let label = $state("Copy");

	/**
	 * Current value of the link.
	 * Dynamically updates when copying.
	 * @type {import('svelte/store').Readable<string>}
	 */
	let linkToCopy = $derived(link);

	/**
	 * Label displayed on the CopyButton.
	 * Dynamically updates when copying.
	 * @returns {Promise<void>}
	 */
	async function copyTheLink() {
		try {
			await navigator.clipboard.writeText(get(linkToCopy));
			label = "Copied!";
			setTimeout(() => (label = "Copy"), 1000);
		} catch {
			alert("Failed to copy!");
		}
	}
</script>

<button onclick={copyTheLink}>{label}</button>

<style>
	button {
		background-color: var(--cbg);
		color: var(--cacc);
		border: 1px dashed var(--cacc);
		padding: 0.5rem 1rem;
		cursor: pointer;

		&:hover {
			background-color: var(--cacc);
			color: var(--ctxt);
		}
	}
</style>
