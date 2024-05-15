import type { models } from "./lib/models";

export const topics: models.Topic[] = [
    {
        title: "Java/JS",
        subtitle: "",
        flashcards: [
            {
                question: "What is Encapsulation?",
                answer: "Encapsulation is the practice of bundling data and methods within a class and restricting access to the inner workings of that class using access modifiers. This protects the integrity of the data by only allowing controlled interactions through public methods.",
            }, 
            {
                question: "What is Inheritance?",
                answer: `Inheritance is an OOP concept where one class (the subclass or derived class) inherits the fields and methods of another class (the superclass or base class). This allows for code reuse, enabling the subclass to extend or modify the behavior of the superclass, and promotes hierarchical classification.`,
            },
            {
                question: `Polymorphism`,
                answer: `Polymorphism is an action that can be performed in many different ways. This is a property that can be said to contain most of the power of object-oriented programming.

To put it more simply: Polymorphism is the concept that two or more classes have the same methods but can be implemented in different ways.

An example of polymorphism in action. We have 2 animals: dog and cat. Both are animals. But when we tell both animals to act, the dog will goof, the cat will meow.

So in the example, dogs and cats are considered objects. Two animals can understand the same sound but in different ways.`,
            },
            {
                question: `Abstraction`,
                answer: `Hiding complex details and showing only the essential parts of an object, making it easier to use without needing to know how it works internally, like managing students, we just need the name and student ID, we don't need to know about weight or heights`,
            },
            {
                question: `What is the difference between public, private, and protected?`,
                answer: `* Public: Public members are accessible from outside the class. They can be accessed and modified by any code that has access to an instance of the class.

* Private: Private members are only accessible from within the class itself. They cannot be accessed or modified directly from outside the class. Private members are typically used to hide implementation details and ensure data integrity.

* Protected: Protected members are accessible within the class itself and by its subclasses (child classes). They cannot be accessed from outside the class hierarchy. Protected members are useful when you want to provide access to subclasses but restrict access to other classes.`,
            },
            {
                question: `Overriding`,
                answer: `Occurs when a subclass provides a specific implementation of a method already defined in its superclass.`,
            },
            {
                question: `Overloading`,
                answer: `Occurs when a class has multiple methods with the same name but different parameters. `,
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
