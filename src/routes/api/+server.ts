import { json } from '@sveltejs/kit';
import { queryOriginalTranslations, type Word } from '$lib/dataAccess';

export function GET({ url }) {
	const query: string = url.searchParams.get('query') ?? '';
  const matches: Word[] = queryOriginalTranslations(query);


	const response = {
		'query': query,
		'matches': matches
	}
	return json(response);
}