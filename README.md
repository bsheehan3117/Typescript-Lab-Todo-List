# TypeScript Lab

## Setup and Initialization

1. Download and Install [Node.js](https://nodejs.org/en/download/package-manager). This should also install the npm package manager.

2. Once installed you can verify with the following commands:

    `$ node -v`
    `$ npm -v`
    `$ npx -v`

    If these commands fail to run check if your classpath or path variable is set to the path where these programs are installed in your system.

3. Install all necessary packages including typescript with the command:

    `npm install`

4. Verify by running _src/index.ts_:

    `npm start`

## Implementation Details:

Create an type `Todo` that defines the structure of a todo item. It should include:

- `id` (a unique identifier, e.g., a number or string)
- `title` (a string)
- `description` (a string)
- `completed` (a boolean indicating if the todo is done)

Create a `TodoManager` class that manages the list of todos. The class should include methods for:

- Adding a new todo
- Removing a todo by its `id`
- Listing all todos
- Marking a todo as completed

Implement the methods and ensure that each method adhers to the expected types and interfaces. Feel free to add other classes, functions, and types in addition to the ones defined in this README. 

## Testing

The entry point of the app is `src/index.ts` that will use the `TodoManager` class. This script should:

- Add a few todos
- List all todos
- Remove a todo
- Mark a todo as completed
- List all todos again to show updates

## Deliverables

We should be able to run the app with the command `npm start`. The script should allow users to do the following with command line arguments:

- Add a todo item
- View all todos
- Remove a todo
- Mark todo as completed

Add a README file called `instructions.md` and accurately describe all the necessary instructions to run the app.

**Submit your GitHub username associated with this repository and the link to the repository on Canvas as a text entry.**

