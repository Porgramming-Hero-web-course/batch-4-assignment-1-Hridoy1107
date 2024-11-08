//Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.

function validateKeys<T>(obj: T, keys: (keyof T)[]): boolean | string {

    if (obj == null) {
        return "The object does not exist."
    }
    else {
        return keys.every(key => obj[key] !== undefined);
    }
}

// console.log(validateKeys());