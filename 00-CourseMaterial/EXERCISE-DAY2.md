#  React Exercises

## Exercise 7: ToDo App - Routing

Recommended: Start with the project `40-ToDoApp/02-todo-components-solution`.  
The above solution saves the todo items into local storage.

Add `react-router` to the project:

	npm install react-router-dom
	
Study the documentation at: https://reacttraining.com/react-router/

Introduce a second screen which shows the completed items:

- From the `App` component items should not be deleted but marked as completed.
- Create a new component for the second screen. This screen should list all completed items.
- Introduce a new url route `./done` which shows the second screen.
- Reuse components: `todo-list` and `todo-item`
- On the new screen completed items can be deleted.
- Introduce navigation links to navigate between the screens.




## Exercise 8: ToDo App - Backend Access

Recommended: Start with the project `40-ToDoApp/03-todo-router-solution`.  

Add `axios` to the poject:

	npm install axios
	
Study the documentation at: https://github.com/axios/axios

The directory `40-ToDoApp/_server` contains a simple API-Server implementing basic CRUD functionality for our ToDo application.
Start the server with the following commands:

	npm install 
	npm start
	
You should now get an array with one todo item at the url: `http://localhost:3456/todos`.

Your task is now to access this backend API from the ToDo application:
- When the application is loaded, all the todo items should be loaded from the server
- When a todo item is added, it should be saved to the server
- When a todo item is completed it should be updated on the server
- When a todo item is deleted, it should be deleted from the server.

Start from `40-ToDoApp/02-dToDo-backend-skeleton`.
This project already loads the ratings from the server when the application is loaded.


The API implemented by the REST-Endpoint is described in the table below:


HTTP-Method   | URL (example) 		      	| Request-Body
------------- | ------------- 			      	|-------------
GET	    	  | http://localhost:3456/todos   	| (optional query-parameter: completed can be set to 0 or 1)
GET	    	  | http://localhost:3456/todos/1 	|
POST		  | http://localhost:3456/todos		| { "title": "Test", "completed": false}
PUT		 	  | http://localhost:3456/todos/1	| { "title": "Test 2", "completed": true}
DELETE		  | http://localhost:3456/todos/1	| 

Note that all responses are wrapped in a response object with a `data` property.
This is a typical security measure of JSON endpoints. See: http://stackoverflow.com/questions/3503102/what-are-top-level-json-arrays-and-why-are-they-a-security-risk



## Exercise 9: Redux Basics

Inspect the project `50-redux-basics/12-global-state-redux/`.  
The project implements a redux store without a UI.

You can execute a test which triggers the store functionality like this:

	npm install
	npm test
	
Extend the store, so todo items can be marked as completed.


## Exercise 10: ToDo App with Redux

In the project `40-ToDoApp/23-todo-redux-starter`: Implement the functionality to delete a ToDo item from the store.  



## Exercise 11: Study the MobX Example

Inspect the project `40-ToDoApp/40-mobx-react-todomvc-starter`. Compare the MobX store to Redux.  
Implement the functionality to delete a ToDo item from the store.



## Exercise 12: React with TypeScript

Inspect the project `40-ToDoApp/40-mobx-react-todomvc`.  

Run the project with:

	npm install
	npm start

Convert the `NewToDoForm.js` component to TypeScript (`NewToDoForm.tsx`).
