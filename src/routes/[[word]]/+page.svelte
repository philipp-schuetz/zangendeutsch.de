<script lang="ts">
	import { BookIcon } from 'svelte-feather-icons';
	import { page } from '$app/stores';
	import { getPossibleWords, getTranslations, getOriginals } from '$lib/dataAccess';
	let search: string = '';
	let previousParam = '';
	if ($page.params.word === undefined) {
		search = '';
	} else {
		search = $page.params.word;
	}

	$: {
		if ($page.params.word !== undefined && previousParam !== $page.params.word) {
			previousParam = $page.params.word;
			search = $page.params.word;
		}
	}

	let suggestions: string[];
	$: suggestions = getPossibleWords(search);
</script>

<svelte:head>
	<title>Zuhause</title>
	<meta name="description" content="Zangendeutsch Wörterbuch" />
</svelte:head>
<div />
<BookIcon />
<input type="search" id="search" name="search" placeholder="Search" bind:value={search} />
Word: {search}
<br />
<h4>Search Suggestions</h4>
{#each suggestions as suggestion}
	<a href="/{suggestion}">{suggestion}</a><br />
{/each}

Test:
{$page.params.word}
