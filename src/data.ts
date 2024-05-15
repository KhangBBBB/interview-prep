import type { models } from "./lib/models";

export const topics: models.Topic[] = [
    {
        title: "Java/JS",
        subtitle: "",
        flashcards: [
            {
                question: "Encapsulation",
                answer: "Encapsulation is like putting your data and the methods that manipulate that data into a single container, called a class. This container protects the data from direct access and manipulation from outside the class. Instead, it provides controlled access through specific methods, which ensures data integrity and prevents unintended changes.",
            }
        ]
    },
];
