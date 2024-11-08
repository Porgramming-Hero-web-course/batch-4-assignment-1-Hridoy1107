//Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

function sumArray(providedArray: number[]): number | string {

    if (!Array.isArray(providedArray)) {
        return "Please enter an array!"
    }
    else if (!providedArray.every(element => typeof element === "number")) {
        return "All elements must be a number!"
    }
    else {
        let sum: number = 0;
        
        for (let i = 0; i < providedArray.length; i++) {
            sum += providedArray[i];
        }
        return sum;
    }
}

// console.log(sumArray());