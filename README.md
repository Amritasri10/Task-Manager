# TASK-MANAGER API with Node.js, Express, and MongoDB

This repository contains a TASK-MAANGER API built using Node.js, Express, and MongoDB. The API provides  involves creating a RESTful API endpoints to perform CRUD (Create,       Read, Update, Delete) operations on tasks and managing tasks and includes user authentication to secure the user-specific data.

## Features

   - **User Registration:** Allow users to register with the system.
   - **User Login:** Authenticate users with secure login functionality.
   - **Create Task:** Add new tasks to the TODO list.
   - **Read Task:** Retrieve the list of tasks.
   - **Update Task:** Modify existing tasks.
   - **Delete Task:** Remove tasks from the list.
   - **User Authentication:** Secure user-specific data and actions.

## Installation

   - [Node.js](https://nodejs.org/en)
   - [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
   - [nodemon](https://www.npmjs.com/package//nodemon)
   - [express](https://www.npmjs.com/package/express)
   - [mongoose](https://www.npmjs.com/package/mongoose)
   - [jwt](https://www.npmjs.com/package/jwt)
   - [bcrypt](https://www.npmjs.com/package/bcrypt)
   - [MongoDB](https://www.mongodb.com/docs/manual/installation) installed and running
      
## Usage

    Start the server:(npm start)
    Access the API at (http://localhost:5001)

## API Endpoints
  ### User
   - **Register User:**
       **Endpoint**: POST /api/users/register
     
   - **Login User:**
        **Endpoint:** POST /api/users/login
   
 ### User
  -  **Create Task:**
       **Endpoint:** POST /api/tasks
    
  -  **Get All Tasks:**
        **Endpoint**: GET /api/tasks
    
  -   **Get Task by ID:**
       **Endpoint**: GET /api/tasks/:id
    
  -   **Update Task:**
         **Endpoint**: PUT /api/tasks/:id
    
  -   **Delete Task:**
        **Endpoint**: DELETE /api/tasks/:id

## Authentication
The API uses JSON Web Tokens (JWT) for user authentication. Upon successful login, the server issues a token that should be included in the headers of subsequent requests:
**Headers: { "Authorization": "Bearer YOUR_TOKEN" }**
This token is required for accessing user-specific endpoints like creating, updating, or deleting tasks.

## Contribution
Contributions are welcome! If you would like to make changes to this project, please follow the steps below:
- Create a new branch from main
- Make desired changes on this new branch
- Submit a pull request with a clear title and description

## License
This project is licensed under the MIT License. This is provides detailed instructions on how to install, configure, and use the TODO App API, with a focus on user        authentication using JSON Web Tokens (JWT). 
