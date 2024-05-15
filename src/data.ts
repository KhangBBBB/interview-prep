import type { models } from "./lib/models";

export const topics: models.Topic[] = [
    {
        title: "Java/OOP",
        subtitle: "Object-Oriented Programming in Java",
        flashcards: [
            {
                question: "What is Encapsulation in Java?",
                answer: "Encapsulation is the practice of bundling data and methods within a class and restricting access to the inner workings of that class using access modifiers. This protects the integrity of the data by only allowing controlled interactions through public methods.",
            },
            {
                question: "What is Inheritance in Java?",
                answer: `Inheritance is a concept where one class (the subclass or derived class) inherits the fields and methods of another class (the superclass or base class). This allows for code reuse, enabling the subclass to extend or modify the behavior of the superclass, and promotes hierarchical classification.`,
            },
            {
                question: `What is Polymorphism in Java?`,
                answer: `Polymorphism allows methods to perform differently based on the object they are called on. It supports method overloading (compile-time) and method overriding (runtime), enabling a single interface to handle multiple data types or classes.`,
            },
            {
                question: `What is Abstraction in Java?`,
                answer: `Abstraction hides the implementation details of a class and exposes only the essential features. It is achieved using abstract classes and interfaces, allowing users to interact with objects through a simplified interface. This reduces complexity and enhances code maintainability.`,
            },
            {
                question: `What is the difference between public, private, and protected?`,
                answer: `- Public: Accessible from anywhere.
- Private: Accessible only within the same class.
- Protected: Accessible within the same package and by subclasses.`,
            },
            {
                question: `What is Overriding in Java?`,
                answer: `Overriding is when a subclass provides a specific implementation for a method already defined in its superclass.`,
            },
            {
                question: `What is Overloading in Java?`,
                answer: `Overloading is when multiple methods in the same class have the same name but different parameter lists.`,
            },
        ],
    },
    {
        title: "CSS/HTML",
        subtitle: "",
        flashcards: [
            {
                question: `List common HTTP methods.`,
                answer: `GET, POST, PUT, DELETE, PATCH`,
            },
            {
                question: `Describe GET`,
                answer: `Retrieves data from the server. Use for read-only operations.`,
            },
            {
                question: `Describe POST`,
                answer: `Sends data to the server to create a new resource.`,
            },
            {
                question: `Describe PUT`,
                answer: `Updates an existing resource with the provided data. It should be idempotent.`,
            },
            {
                question: `DELETE`,
                answer: `Deletes a resource from the server.`,
            },
            {
                question: `PATCH`,
                answer: `Updates a resource partially. It should be idempotent.`,
            },
            {
                question: `What do HTTP status codes provide?`,
                answer: `Provide information about the result of a request.`,
            },
            {
                question: `What does HTTP status code 2xx represent?`,
                answer: `Success (e.g., 200 OK, 201 Created)`,
            },
            {
                question: `What does HTTP status code 3xx represent?`,
                answer: `Redirection (e.g., 301 Moved Permanently, 304 Not Modified)`,
            },
            {
                question: `What does HTTP status code 4xx represent?`,
                answer: `Client Error (e.g., 400 Bad Request, 404 Not Found)`,
            },
            {
                question: `What does HTTP status code 5xx represent?`,
                answer: `Server Error (e.g., 500 Internal Server Error, 503 Service Unavailable)`,
            },
        ]
    },
];
