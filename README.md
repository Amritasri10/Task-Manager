# TODO_APP API with Node.js, Express, and MongoDB

  This repository contains a TODO App API built using Node.js, Express, and MongoDB. The API provides  involves creating a RESTful API endpoints to perform CRUD (Create,       Read, Update, Delete) operations on tasks and managing tasks and includes user authentication to secure the user-specific data.

## Features

   - User Registration: Allow users to register with the system.
   - User Login: Authenticate users with secure login functionality.
   - Create Task: Add new tasks to the TODO list.
   - Read Task: Retrieve the list of tasks.
   - Update Task: Modify existing tasks.
   - Delete Task: Remove tasks from the list.
   - User Authentication: Secure user-specific data and actions.

## Prerequisites

   - [Node.js](https://nodejs.org/en)
   - [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
   - [nodemon](https://www.npmjs.com/package//nodemon)
   - [express](https://www.npmjs.com/package/express)
   - [mongoose](https://www.npmjs.com/package/mongoose)
   - [jwt](https://www.npmjs.com/package/jwt)
   - [bcrypt](https://www.npmjs.com/package/bcrypt)
   - [MongoDB](https://www.mongodb.com/docs/manual/installation) installed and running

## Installation

      Clone the repository:
      git clone https://github.com/amysri77/TODO_APP.git
      
## Usage

    Start the server:(npm start)
    Access the API at (http://localhost:5001)

## API Endpoints
  ### User
   - **Register User:**
   - **Endpoint**: POST /api/register
   - **Login User:**
   - **Endpoint:** POST /api/login
   
 ### User
-  **Create Task:**
-  **Endpoint:** POST /api/tasks
-  **Get All Tasks:**
-  **Endpoint**: GET /api/tasks
-   **Get Task by ID:**
-   **Endpoint**: GET /api/tasks/:taskId
-   **Update Task:**
-   **Endpoint**: PUT /api/tasks/:taskId
-   **Delete Task:**
-   **Endpoint**: DELETE /api/tasks/:taskId

## Authentication
The API uses JSON Web Tokens (JWT) for user authentication. Upon successful login, the server issues a token that should be included in the headers of subsequent requests:
** Headers: { "Authorization": "Bearer YOUR_TOKEN" }**
This token is required for accessing user-specific endpoints like creating, updating, or deleting tasks.

## License
  This project is licensed under the MIT License.This README provides detailed instructions on how to install, configure, and use the TODO App API, with a focus on user        authentication using JSON Web Tokens (JWT). 


