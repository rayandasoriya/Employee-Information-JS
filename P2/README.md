# Employee Information Application

This application helps in managing the employee information. It is based on MERN Stack (MongoDB, Express, React, NodeJS). 

## Prerequisites
1. NodeJS
2. MongoDB

## Setup Instructions
1. Clone this repo.
2. Run `mongod` from terminal
3. Go to `/boilerplate/employee_backend` and do `npm install`. After that, run `node server.js` to start the server. It has all the required database connection configurations.
4. Go to `/boilerplate/employee_client` and do `npm start`. It will start the server and you will be redirected to `http://localhost:3000`. There, you will be displayed two options.
    i. List all the employees
    ii. Add an employee

## Working
The server.js file creates a database of name `ContactList` and then a collection `contactlist`. Then, when you start the client side, it runs React and redirects to /api/employees. This will help you to view all the employees in the database. Now, you can simultaneously edit and delete the employees from the database.
The hire date is displayed in YYYY-MM-DD format and is in past. It also adds two random quotes per user.

## Screenshots
!(Resources/main.png)
!(Resources/add.png)
!(Resources/edit.png)