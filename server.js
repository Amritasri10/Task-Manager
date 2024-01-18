const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();
const path = require("path"); 

connectDb();
const app = express();

const port = process.env.PORT|| 5000;

app.use(express.json());
app.use('/api/tasks',require('./routes/taskRoutes'));
app.use('/api/users',require('./routes/userRoutes'));
app.use(errorHandler);


app.listen(port,()=>{
    console.log(` Server running on port ${port}`);
});

