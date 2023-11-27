<script lang="ts">
	import { BookIcon } from 'svelte-feather-icons';
	import { page } from '$app/stores';
	import { getPossibleWords, getTranslations, getOriginals, isWord, isTranslation, isOriginal} from '$lib/dataAccess';
	let search: string = '';
	let previousParam = '';
	let word: string = '';
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
	$: {
		suggestions = getPossibleWords(search);
		if (suggestions.length === 0) {
			suggestions[0] = 'Nothing found for '+search;
		}
	}
	$: {setWord(search)}
	function setWord(toSet: string) {
		if (isWord(toSet)) {
			word = toSet;
		}
	}
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
	{#if isWord(suggestion)}
		<a href="/{suggestion}">{suggestion}</a><br />
	{/if}
{/each}

{#if word == ''}
	<h2>Search for a word</h2><br>
{:else}
	<h2>Word: {word}</h2>
	{#if isOriginal(word)}
		{getTranslations(word)}
	{:else if isTranslation(word)}
		{getOriginals(word)}
		{/if}
	{/if}