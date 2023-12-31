import { dictionary } from '$lib/data';

export interface Word {
    original: string;
    translations: string[];
    comment: string;
}
function like(word: string, wordToCheck: string): boolean {
    const words = word.split(' ');

    for (const singleWord of words) {
        if (singleWord.startsWith(wordToCheck)) {
            return true;
        }
    }
    return false;
}

export function queryOriginalTranslations(query: string): Word[] {
    if (query === '') {
        return [];
    }
    query = query.toLowerCase();
    const entries = dictionary.filter(entry =>
        like(entry.original.toLowerCase(), query) ||
        entry.translations.some(translation => like(translation.toLowerCase(), query))
    );
    return entries.sort((a, b) => a.original.localeCompare(b.original));
}

export function getAll(): Word[] {
    return dictionary.sort((a, b) => a.original.localeCompare(b.original));
}
