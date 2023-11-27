import { dictionary } from '$lib/data'

function like(word: string, wordToCheck: string): boolean {
    if (word.startsWith(wordToCheck)) {
        return true;
    } else {
        return false;
    }
}

export function getPossibleWords(word: string): string[] {
    if (word === '') {
        return [];
    }
    const possibleWords = dictionary.reduce((acc, entry) => {
        if (like(entry.original.toLowerCase(), word.toLowerCase())) {
            acc.push(entry.original);
        }
        if (Array.isArray(entry.translations)) {
            entry.translations.forEach(translation => {
                if (like(translation.toLowerCase(), word.toLowerCase())) {
                    acc.push(translation);
                }
            });
        }
        return acc;
    }, [] as string[]);
    return possibleWords;
}

export function getTranslations(original: string): string[][] {
    if (original === '') {
        return [];
    }
    const entries = dictionary.filter(entry => like(entry.original.toLowerCase(), original.toLowerCase()))
    if (entries.length > 0) {
        console.log(entries.map(entry => entry.translations))
        return entries.map(entry => entry.translations)
    }
    return []
}

export function getOriginals(translation: string): string[] {
    translation = translation.toLowerCase()
    if (translation === '') {
        return [];
    }
    const entries = dictionary.filter(entry => entry.translations.includes(translation))
    console.log(entries.map(entry => entry.original))
    return entries.map(entry => entry.original)
}

export function isOriginal(word: string): boolean {
    if (word === '') {
        return false;
    }
    const entries = dictionary.filter(entry => entry.original.toLowerCase() === word.toLowerCase())
    return entries.length > 0
}

export function isTranslation(word: string): boolean {
    if (word === '') {
        return false;
    }
    const entries = dictionary.filter(entry => entry.translations.includes(word.toLowerCase()))
    return entries.length > 0
}

export function isWord(word: string): boolean {
    return isOriginal(word) || isTranslation(word)
}