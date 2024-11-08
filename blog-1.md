# The significance of union and intersection types in Typescript.


# Union Types in Typescript

Union types are used to hold one from multiple specified types. This is particularly useful for situations where a value can take on different forms. It works with | (or operator). Let's see an example.
{
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
}
Here we declared an union type of Shape with Circle & Rectangle where the input can be either a circle or a rectangle. We can add more shape if we need. It will not only reduce the complexity but also ensure the readability and error prevention.

# Significance of Union Types in Typescript

* Allows flexible type handling for inputs with multiple potential types.
* Improves code readability.
* Enhances error prevention by ensuring that values are one of the defined types.

.

# Intersection Types in Typescript

Intersection types are used to combine multiple specified types to one. This is particularly useful for situations when an object meets multiple structural requirements. It works with & (and operator). Let's see an example.
{
type FrontendDeveloper = {
    skills: string[]
    designation1: "Frontend Developer
}

type BackendDeveloper = {
    skills: string[]
    designation2: "Backend Developer"
}

type FullstackDeveloper = FrontendDeveloper & BackendDeveloper
}
Here we declared an intersection type of FullstackDeveloper with FrontendDeveloper & BackendDeveloper where the output will combine FrontendDeveloper & BackendDeveloper to FullstackDeveloper. We can add more types if we need. It will not only reduce the complexity but also ensure the readability and error prevention.

# Significance of Intersection Types in Typescript

* Useful for creating more specific types by combining existing ones.
* Enables safe access to properties with multiple types in a single variable.
* Ensures a higher level of type safety where objects must meet multiple criteria.