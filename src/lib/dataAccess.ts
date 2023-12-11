import { dictionary } from '$lib/data'

export interface Word {
    original: string;
    translations: string[];
    comment: string;
}

function like(word: string, wordToCheck: string): boolean {
    if (word.startsWith(wordToCheck)) {
        return true;
    } else {
        return false;
    }
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
    return entries;
}

export function getAll() : Word[] {
    return dictionary;
};
