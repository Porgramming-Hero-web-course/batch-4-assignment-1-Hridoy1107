// Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

function countWordOccurrences(providedSentence: string, providedWord: string): number | string {

    if (!providedSentence || !providedWord) {
        return "Provide a sentence and a word!"
    }
    else if (typeof providedSentence !== 'string' || typeof providedWord !== 'string') {
        return "Provide a string value!"
    }
    else {
        const words: string[] = providedSentence.trim().split(/\s+/);
        const wordCount: number = words.filter(word => word.toLowerCase() === providedWord.toLowerCase()).length;
        return wordCount;
    }
}

// console.log(countWordOccurrences());