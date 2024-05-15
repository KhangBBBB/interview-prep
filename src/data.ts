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
                question: `What is a leaf node in Tree?`,
                answer: `A node that does not have any children.`,
            },
            {
                question: `What are variants of Tree?`,
                answer: `Binary Tree, Binary Search Tree, AVL Tree, Red-Black Tree.`,
            },
            {
                question: `What is Binary Tree?`,
                answer: `A tree data structure in which each node has at most two children.`,
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
        title: "Web Foundation",
        subtitle: "",
        flashcards: [
            {
                question: `What does HTTP stand for?`,
                answer: `Hypertext Transfer Protocol`,
            },
            {
                question: `What is HTTP`,
                answer: `A request-response protocol used for transmitting hypermedia documents.`,
            },
            {
                question: `What are common HTTP methods?`,
                answer: `GET, POST, PUT, DELETE, PATCH`,
            },
            {
                question: `What is HTTP GET method?`,
                answer: `Requests data from a specified resource.`,
            },
            {
                question: `What is HTTP POST method?`,
                answer: `ubmits data to be processed to a specified resource.`,
            },
            {
                question: `What is HTTP PUT method?`,
                answer: `pdates a specified resource with new data`,
            },
            {
                question: `What is HTTP DELETE method?`,
                answer: `Deletes a specified resource.`,
            },
            {
                question: `What is HTTP method PATCH?`,
                answer: `Applies partial modifications to a resource.`,
            },
            {
                question: `What is HTTP status code?`,
                answer: `Numeric code to indicate the outcome of a client's request.`,
            },
            {
                question: `What does HTTP status code 2xx indicate?`,
                answer: `Success`,
            },
            {
                question: `What does HTTP status code 3xx indicate?`,
                answer: `Redirection`,
            },
            {
                question: `What does HTTP status code 4xx indicate?`,
                answer: `Client error.`,
            },
            {
                question: `What does HTTP status code 5xx indicate?`,
                answer: `Server error.`,
            },
            {
                question: `What does URL stand for?`,
                answer: `Uniform Resource Locator.`,
            },
            {
                question: `What is URL?`,
                answer: `A address used to access resources on the internet, specifying the location and protocol.`,
            },
            {
                question: `What does DNS stand for?`,
                answer: `Domain Name System.`,
            },
            {
                question: `What is DNS?`,
                answer: `It translates domain names (like google.com) into IP addresses (like 172.217.7.238).`,
            },
        ]
    },
    {
        title: "JavaScript/TypeScript",
        subtitle: "",
        flashcards: [
            {
                question: `What is the relationship between JS and TS?`,
                answer: `TypeScript is a statically typed superset of JavaScript that compiles to plain JavaScript.`,
            },
            {
                question: `What are arrow functions in JS?`,
                answer: `Arrow functions are a concise way to write functions in JS.`,
            },
            {
                question: `What is Promise in JS?`,
                answer: `Promises are objects representing the eventual completion or failure of an asynchronous operation. They allow asynchronous code to be written in a more synchronous-like fashion, making it easier to manage.`,
            },
            {
                question: `What is asynchronous programming in JS?`,
                answer: `Asynchronous programming in JavaScript allows code to execute independently from the main program flow.`,
            },
            {
                question: `What is a callback function in JS?`,
                answer: `A callback function is a function that is passed as an argument to another function.`,
            },
            {
                question: `What is the use case of callback function in asynchronous programming in JS?`,
                answer: `Used to handle the results of asynchronous operations once they are completed.`,
            },
            {
                question: `What is the purpose of the keyword 'async'?`,
                answer: `Used to define asynchronous functions, which return promises.`,
            },
            {
                question: `What is the purpose of the keyword 'wait'?`,
                answer: `Used inside async functions to wait for and retrieve the result of asynchronous operations, making asynchronous code appear synchronous.`,
            },
            {
                question: `What is the event loop in JS?`,
                answer: `It manages asynchronous operations by continuously checking the call stack and event queue, ensuring that tasks are executed in a non-blocking manner.`,
            },
            {
                question: "What is scope in JS?",
                answer: `Scope refers to the visibility and accessibility of variables.`,
            },
            {
                question: `How does JS handle errors?`,
                answer: `Using try-catch blocks for synchronous code and catch() methods for asynchronous code`,
            },
            {
                question: `What is reduce in JS?`,
                answer: `A higher-order array method used to iterate over an array and accumulate a single result based on a callback function provided by the user.`,
            },
            {
                question: `What is the output of this code?

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(sum);`,
                answer: `15`,
            },
            {
                question: `What are the different primitive data types in JS?`,
                answer: `string, number, boolean, bigint, null, undefined, symbol`,
            },
            {
                question: `What are the different complex data types in JS?`,
                answer: `object, array, function, map, set`,
            },
            {
                question: `What is the difference between == and === operators in JavaScript?`,
                answer: `== is the equality operator that performs type coercion, while === is the strict equality operator that compares both value and type without coercion.`,
            },
            {
                question: `What is finally in try-catch in JS?`,
                answer: `finally is a block of code used in a try...catch statement. It runs regardless of whether an exception is thrown or caught.`,
            },
        ],
    },
];
