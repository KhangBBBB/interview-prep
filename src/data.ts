import type { models } from "./lib/models";

export const topics: models.Topic[] = [
    {
        title: "Java/OOP",
        subtitle: "Object-Oriented Programming in Java",
        flashcards: [
            {
                question: "What is Encapsulation in Java?",
                answer: "Encapsulation restricts access to the inner workings of that class using access modifiers.",
            },
            {
                question: "What is Inheritance in Java?",
                answer: `Inheritance is a concept where one class (the subclass or derived class) inherits the fields and methods of another class (the superclass or base class).`,
            },
            {
                question: `What is Polymorphism in Java?`,
                answer: `Polymorphism allows methods to perform differently based on the object they are called on.`,
            },
            {
                question: `What is Abstraction in Java?`,
                answer: `Abstraction hides implementation details and shows only essential features of an object to the outside world.`,
            },
            {
                question: `How do we achieve abstraction in Java?`,
                answer: `Abstract classes and interfaces`,
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
            {
                question: `What is the difference between Abstract Class and Interface?`,
                answer: `Abstract classes allow for a mix of abstract and concrete methods, while interfaces only have abstract methods that classes must implement.`,
            },
            {
                question: `What is garbage collection?`,
                answer: `An automated process to clean up unused memory.`,
            },
        ],
    },
    {
        title: "Data Structure",
        subtitle: "",
        flashcards: [
            {
                question: `What is Array?`,
                answer: `Collection of elements stored in contiguous memory locations.`,
            },
            {
                question: `What is Linked List?`,
                answer: `Collection of elements where each element points to the next one.`,
            },
            {
                question: `What is Stack?`,
                answer: `A data structure that follows the Last In, First Out (LIFO) principle.`,
            },
            {
                question: `What are Stack operations?`,
                answer: `- Push (adds an element to the top of the stack)
- Pop (removes the top element from the stack)`,
            },
            {
                question: `What is Queue?`,
                answer: `Data structure that follows the First In, First Out (FIFO) principle`,
            },
            {
                question: `What are Queue operations?`,
                answer: `- Enqueue (adding an element to the rear)
- Dequeue (removes the element from the front)`,
            },
            {
                question: `What is Tree?`,
                answer: `Data structure consisting of nodes connected by edges. It has a root node, parent nodes, and child node.`,
            },
            {
                question: `What is Graph?`,
                answer: `A non-linear data structure consisting of nodes connected by edges.`,
            },
            {
                question: `What is the relationship between Tree and Graph?`,
                answer: `A tree is a specific type of graph characterized by its hierarchical structure without cycles, where each node has a unique parent except for the root node.`,
            },
            {
                question: `What is Hash Table?`,
                answer: `Data structure that stores key-value pairs, allowing for efficient insertion, deletion, and lookup operations based on a unique hash function.`, 
            },
            {
                question: `What is Collision in Hash Table?`,
                answer: `Where two or more keys generate the same hash value.`,
            },
            {
                question: `What is Collision Resolution in Hash Table?`,
                answer: `Strategies to manage collisions.`,
            },
            {
                question: `What are strategies to resolve collision in Hash Table?`,
                answer: `Chaining or open addressing.`,
            },
            {
                question: `What is Map?`,
                answer: `Data structure that stores unique key-value pairs.`,
            },
            {
                question: `What is the relationship between Map and Hash Table?`,
                answer: `Hash Table is commonly used to implement Map.`,
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
