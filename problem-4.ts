//Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

type Circle = {
    shape: "circle"
    radius: number
}

type Rectangle = {
    shape: "rectangle"
    height: number
    width: number
}

type Shape = Circle | Rectangle

function calculateShapeArea(providedShape: Shape) : number | string {

    if(!providedShape) {
        return `Provide the info like { shape: "circle", radius: x } or { shape: "rectangle", height: x, width: y,}`
    }
    else if (providedShape.shape === "circle"){
        const circleResult = Math.PI * providedShape.radius * providedShape.radius;
        return circleResult;
    }
    else if(providedShape.shape === "rectangle") {
        const rectangleResult = providedShape.width * providedShape.height;
        return rectangleResult;
    }
    else{
        return "Provide a circle or rectangle"
    }
}

// console.log(calculateShapeArea());