import type { models } from "./lib/models";

export const topics: models.Topic[] = [
    {
        title: "Java/JS",
        subtitle: "",
        flashcards: [
            {
                question: "Encapsulation",
                answer: "Encapsulation is like putting your data and the methods that manipulate that data into a single container, called a class. This container protects the data from direct access and manipulation from outside the class. Instead, it provides controlled access through specific methods, which ensures data integrity and prevents unintended changes.",
            },
            {
                question: "Inheritance",
                answer: `Inheritance: Inheritance in programming is like passing down characteristics from one thing to another. Imagine you have a class that defines a generic "Vehicle" with attributes like "color" and "speed", and methods like "accelerate" and "brake". Now, you want to create more specific types of vehicles, like "Car" and "Motorcycle", that share these attributes and methods but may have some unique ones of their own. Instead of rewriting all the common stuff for each type of vehicle, you can use inheritance to create child classes (Car and Motorcycle) that inherit everything from the parent class (Vehicle) and then add their own unique features.`,
            },
            {
                question: `Polymorphism`,
                answer: `Polymorphism is an action that can be performed in many different ways. This is a property that can be said to contain most of the power of object-oriented programming.

To put it more simply: Polymorphism is the concept that two or more classes have the same methods but can be implemented in different ways.

An example of polymorphism in action. We have 2 animals: dog and cat. Both are animals. But when we tell both animals to act, the dog will goof, the cat will meow.

So in the example, dogs and cats are considered objects. Two animals can understand the same sound but in different ways.`,
            },
            {
                question: ``,
                answer: ``,
            },
            {
                question: ``,
                answer: ``,
            },
            {
                question: ``,
                answer: ``,
            },
            {
                question: ``,
                answer: ``,
            },
            {
                question: ``,
                answer: ``,
            },
            {
                question: ``,
                answer: ``,
            },
            {
                question: ``,
                answer: ``,
            },
            {
                question: ``,
                answer: ``,
            },
            {
                question: ``,
                answer: ``,
            },
            {
                question: ``,
                answer: ``,
            },
            {
                question: ``,
                answer: ``,
            },
            {
                question: ``,
                answer: ``,
            },
            {
                question: ``,
                answer: ``,
            },
        ]
    },
];
