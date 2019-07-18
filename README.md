# Employee Information using JavaScript

## TASK

- Create a node app that implements a set of REST APIs allowing CRUD functionality for an employee resource.
- Add a front end component of your choosing. The front end component should:
  - Show a list of the existing employees
  - Include a way to create a new employee using the POST API

## Expected Endpoints

POST http://localhost:3000/api/employees

- Create a new record using a randomly generated value as the unique identifier (i.e. _id field).  Validate that the following fields are included in the POST body and have the right type/format as posted below:
    - firstName (String)
    - lastName (String)
    - hireDate (YYYY-MM-DD format must be in the past)
    - role (String) - must be one of the following (case-insensitive):
        - CEO (can only be one of these)
        - VP
        - MANAGER
        - LACKEY

    - In addition to the fields included in the POST body, include two fields in each new record that are populated by different external APIs.  For example, a favorite joke and a favorite quote, or a favorite joke and a second favorite joke.  As long as the two external APIs are different.
        - Possible API endpoints:

            https://ron-swanson-quotes.herokuapp.com/v2/quotes

            https://icanhazdadjoke.com

            https://quotes.rest/qod

PUT http://localhost:3000/api/employees/:id

- Replace the record corresponding to :id with the contents of the PUT body


GET http://localhost:3000/api/employees/:id

- Return the record corresponding to the id parameter


GET http://localhost:3000/api/employees

- Return all current records


DELETE http://localhost:3000/api/employees/:id

- delete the record corresponding to the id parameter

## About the Project
1. **P1**: In this, I have exposed the API endpoints but UI is not there. We can do curl queries as given in the README or we can see the response using Postman. It does not use any persistent storage or front-end capabilities. It is a pure NodeJS application.
2. **P2**: This project contains a MERN stack application which demonstartes the knowledhe of NoSQL database like MongoDB and React JavaScript.

The instructions to run these projects are available within the READMEs of each project. For any queries, contact dasoriyarayan@gmail.com or rayandasoriya@ibm.com.
