import { Todo } from "./types";

/**
 * Manages a collection of todos, allowing addition, removal, and state updates.
 */
export class TodoManager {
    private todos: Todo[] = []; // Storage for todo items

    /**
     * Adds a new todo to the collection.
     * @param {Todo} todo The todo item to add.
     */
    addTodo(todo: Todo): void {
        this.todos.push(todo);
    }

    /**
     * Removes a todo from the collection by its ID.
     * @param {string | number} id The ID of the todo to remove.
     */
    removeTodoById(id: string | number): void {
        this.todos = this.todos.filter(todo => todo.id !== id);
    }

    /**
     * Returns a list of all todos.
     * @returns {Todo[]} An array of all todo items.
     */
    listTodos(): Todo[] {
        return this.todos;
    }

    /**
     * Marks a specified todo as completed by its ID.
     * @param {string | number} id The ID of the todo to mark as completed.
     */
    markTodoAsCompleted(id: string | number): void {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            todo.completed = true;
        }
    }
}
