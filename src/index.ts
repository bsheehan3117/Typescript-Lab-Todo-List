import { TodoManager } from "./TodoManager";
import { Todo } from "./types";
import readline from 'readline';

const todoManager = new TodoManager();

/**
 * Function to run predefined tests to demonstrate the functionality of the Todo app.
 * This function adds sample todos, lists them, marks one as complete, and then sequentially removes them, 
 * logging the state of the todo list at each step.
 */
function runTests() {
    console.log("Running todo tests");

    todoManager.addTodo({
        id: 1,
        title: "The dishes",
        description: "Wash dishes before wife gets home",
        completed: false
    });

    todoManager.addTodo({
        id: 2,
        title: "The laundry",
        description: "Fold laundry before wife gets home",
        completed: false
    });

    todoManager.addTodo({
        id: 3,
        title: "Grocery shopping",
        description: "Buy groceries for the week",
        completed: false
    });

    console.log("Todos after adding:", todoManager.listTodos());

    todoManager.markTodoAsCompleted(1);
    console.log("Todos after marking complete:", todoManager.listTodos());

    todoManager.removeTodoById(1);
    console.log("Todos after removing:", todoManager.listTodos());

    todoManager.removeTodoById(2);
    console.log("Todos after removing:", todoManager.listTodos());

    todoManager.removeTodoById(3);
    console.log("Todos after removing:", todoManager.listTodos());
}

// readline interface for user interaction via command line
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 * Asks the user if they would like to interact with the todo list application.
 * Prompts the user to respond with 'yes' or 'no' and handles the response appropriately.
 * Accounts for invalid input and prompts the user again if necessary.
 * If the user responds with 'yes', the application will proceed to handle command line arguments.
 * If the user responds with 'no', the application will exit.
 */
function askUseApp() {
    rl.question('Would you like to use the todo list app? Please respond yes or no: ', (answer) => {
        if (answer.toLowerCase() === 'yes') {
            handleCommandLineArguments();
        } else if (answer.toLowerCase() === 'no') {
            console.log("Goodbye!");
            rl.close();
        } else {
            console.log("Invalid input. Please respond with 'yes' or 'no'.");
            askUseApp();
        }
    });
}

/**
 * Handles user commands for managing todos via command line arguments.
 * Allows the user to add, list, remove, complete, or exit from the todo list application.
 * Prompts the user to provide necessary details for each action and logs the result.
 * Continues to prompt the user for actions until the user chooses to exit the application.
 */
function handleCommandLineArguments() {

    // Prompt the user to choose an action
    console.log("Welcome to the Todo List App!");
    rl.question("Choose an action - add, list, remove, complete, exit: ", (action) => {
        switch (action) {
            case 'add':
                
                // Prompt the user to provide details for the new todo
                console.log("Adding a new todo. Please provide details:");
                rl.question("Enter id: ", (id) => {
                    rl.question("Enter title: ", (title) => {
                        rl.question("Enter description: ", (description) => {
                            todoManager.addTodo({
                                id,
                                title,
                                description,
                                completed: false,
                            });

                            // Log the result 
                            console.log("Todo added.");
                            handleCommandLineArguments();
                        });
                    });
                });
                break;
            case 'list':

                // Log the list of all todos
                console.log("Listing all todos:", todoManager.listTodos());
                handleCommandLineArguments();
                break;
            case 'remove':

                // Prompt the user to provide the id of the todo to remove
                rl.question("Enter the id of the todo to remove: ", (id) => {
                    todoManager.removeTodoById(id);
                    console.log("Todo removed.");
                    handleCommandLineArguments();
                });
                break;
            case 'complete':

                // Prompt the user to provide the id of the todo to mark as completed
                rl.question("Enter the id of the todo to mark as completed: ", (id) => {
                    todoManager.markTodoAsCompleted(id);
                    console.log("Todo marked as completed.");
                    handleCommandLineArguments();
                });
                break;
            case 'exit':

                // Exit the application and remove all todos
                console.log("Exiting the application. All todos will be deleted.");
                rl.close();
                break;
            default:

                // Handle invalid input
                console.log("Invalid action. Please choose add, list, remove, complete, or exit.");
                handleCommandLineArguments();
                break;
        }
    });
}

// Execute predefined tests to demonstrate application functionality
runTests();

// Indicate test completion and initialize the user interaction phase
console.log("Tests complete. Tests removed from database to start fresh.");
askUseApp();
