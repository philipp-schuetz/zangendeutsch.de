import { json } from '@sveltejs/kit';
import { getAll, queryOriginalTranslations, type Word } from '$lib/dataAccess';

export function GET({ url }) {
	const query: string = url.searchParams.get('query') ?? '';
	let matches: Word[];
	if (query === '') {
		matches = getAll();
		return json(matches)
	} else {
		matches = queryOriginalTranslations(query);
	}


	const response = {
		'query': query,
		'matches': matches
	};
	return json(response);
}