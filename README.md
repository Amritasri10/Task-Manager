  # Task Manager

Task Manager is a full-stack web application that enables users to securely manage their daily tasks. Built with a **React.js frontend**, a **Node.js + Express backend**, and **MongoDB Atlas** as the **cloud database**, this app supports user registration, login with JWT authentication, and full CRUD operations on tasks.

---

## Features

- **User Registration & Login:** Secure authentication with JWT.
- **Task Management:** Create, read, update, and delete personal tasks.
- **User-Specific Data:** Each user accesses only their own tasks.
- **Password Security:** Passwords are hashed with bcrypt.
- **Cloud Database:** Data stored in MongoDB Atlas.
- **Responsive UI:** Built with React.js for smooth user experience.

---

## Technology Stack

- **Backend**: Node.js, Express.js
- **Frontend**: React.js
- **Database**: MongoDB Atlas
- **Authentication**: JWT, bcrypt

---

## Installation & Setup

### -Prerequisites:

     -[Node.js installed](https://nodejs.org/)
     -[MongoDB Atlas account](https://www.mongodb.com/cloud/atlas)


### -Backend Setup

    1. Clone the repository and navigate to the backend folder:
    
            `git clone https://github.com/Amritasri10/registration-form.git
             cd registration-form`

    2. Install dependencies:
   
        `npm install`

    3. Create a .env file in the backend folder with the following environment variables:

      `PORT=5001
       MONGO_URI=your_mongodb_atlas_connection_string
       JWT_SECRET=your_jwt_secret_key`

    4. Start the backend server:

      `npm start`

    5. The API will be running at `http://localhost:5001`.

### -Fronted Setup

       1. Navigate to the frontend directory:
    
            `cd ../frontend`

      2. Install fronted dependencies:

          `npm install `

      3. Start the React development server:

          `npm start`

      4. The frontend will be available  at

          `http://localhost:3000`

---

## API Endpoints

  ### -User Authentication

      -`POST /api/users/register` : Register a new user

      -`POSt /api/users/login` : Login and receive JWT token

  ### -Task Management (Authentication required)
  
      -`POST /api/tasks` : Create a new tas

      -`GET /api/tasks` : Get all tasks of the logged-in user

      -`GET /api/tasks/:id` : Get a task by its ID

      -`PUT /api/tasks/:id` : Update a task by its ID

      -`DELETE /api/tasks/:id` : Delete a task by its ID

---

## Authentication Details

- On successful login, a JWT token is issued.
  
- Include the JWT token in the Authorization header for task-related requests:
   `Authorization: Bearer <token>`

---

## 📄 License

This project is licensed under the MIT License - feel free to use it for personal or academic projects.

---

## Author 

Connect with me on:
[LinkedIn ](https://www.linkedin.com/in/amrita-srivastava10/) | [GitHub](https://github.com/Amritasri10)

    







