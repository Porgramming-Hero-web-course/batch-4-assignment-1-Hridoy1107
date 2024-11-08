// Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

function removeDuplicates(providedArray: number[]): number[] | string {

    if (!Array.isArray(providedArray)) {
        return "Please enter an array!"
    }
    else if (!providedArray.every(element => typeof element === "number")) {
        return "All elements must be a number!"
    }
    else {
        const uniqueArray: number[] = [...new Set(providedArray)];
        return uniqueArray;
    }
}

// console.log(removeDuplicates());