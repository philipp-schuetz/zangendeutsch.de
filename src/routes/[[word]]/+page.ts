import { dictionary } from '$lib/data.js';

export function load({ params }) {
    return {
        word: {
            original: params.word,
        }
    };
}