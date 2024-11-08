//Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.

function getProperty<T, K extends keyof T>(object: T, keys: K): T[K] | string {
    
    if (object == null) {
        return "The object does not exist."
    }
    else {
        return object[keys];
    }
}

// console.log(getProperty());