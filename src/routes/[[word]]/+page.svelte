<script lang="ts">
	import { BookIcon } from 'svelte-feather-icons';
	export let data;
</script>

<svelte:head>
	<title>Zuhause</title>
	<meta name="description" content="Zangendeutsch Wörterbuch" />
</svelte:head>
<div />
<BookIcon />
<span>{data.word.original}</span>
<input type="search" id="search" name="search" placeholder="Search" />
