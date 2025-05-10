<script lang="ts">
	import "../app.css";
	import "@fontsource/space-mono";
	let { children } = $props();
</script>

<main id="container">
	{@render children()}
</main>

<style>
	:global(:root) {
		--cbg: #141415;
		--ctxt: #cdcdcd;
		--ccmt: #465362;
		--clnk: #7894ab;
		--cacc: #8ca0dc;
		--cbor: #252530;
		--cred: #e6788c;
		--cyel: #d2a374;
		--cgre: #a3cd81;

		--font-family: "Space Mono", monospace;

		color-scheme: dark;
	}
	:global(*) {
		background-color: var(--cbg);
		color: var(--ctxt);
		font-family: var(--font-family);
		font-size: 14px;
	}

	:global(body) {
		height: 100svh;
		padding: 1rem;
	}

	:global(h1) {
		font-size: 1.5rem;
		font-size: clamp(1.8rem, 0.7rem + 5.5vw, 3rem);
	}

	:global(li) {
		padding-left: 1rem;
	}

	:global(header) {
		font-weight: bold;
	}

	#container {
		height: 100%;
		padding: 1rem;
		border: 1px dashed var(--cbor);
	}
</style>
