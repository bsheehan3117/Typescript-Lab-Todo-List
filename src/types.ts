/**
 * Defines the structure for todo items.
 */
export type Todo = {
    id: string | number;  // Unique identifier for each todo
    title: string;        // Title of the todo
    description: string;  // Detailed description of the todo
    completed: boolean;   // Status of the todo, true if completed, fales otherwise
};
