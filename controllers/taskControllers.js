const asyncHandler = require("express-async-handler");
const Task = require("../models/taskModel");
//@desc get all tasks
//@route GET/api/tasks
//@access private
const getTasks = asyncHandler(async(req, res)=>{
    const tasks = await Task.find({user_id: req.user.id});
    res.status(200).json(tasks);
});

//@desc Create new task list
//@route/POST/api/tasks
//@access private
const createTask = asyncHandler(async(req, res)=>{
    console.log("The request body is:", req.body);
    const {description, category} = req.body;
    if(!description || !category){
        res.status(400);
        throw new Error("All fields are mandatory !")
    }
    const tasks = await Task.create({
        description,category,user_id: req.user.id
    });
    res.status(201).json({tasks});
});

//@desc get task
//@route/GET/api/tasks/:id
//@access private
const getTask =asyncHandler( async(req, res) => {
    const tasks = await Task.findById(req.params.id);
    if(!tasks){
        res.status(404);
        throw new Error("task not found");
    }
    res.status(200).json(tasks);
});

//@desc Update task list
//@route/PUT/api/tasks/:id
//@access private
const updateTask = asyncHandler(async(req, res) => {
    const tasks = await Task.findById(req.params.id);
    if(!tasks){
        res.status(404);
        throw new Error("task not found");
    }
    if(tasks.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("User don't have permission to other user tasks");
    }

 const updateTask = await Task.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new:true}
 );
    res.status(200).json(updateTask);
});

//@desc Delete task list
//@route/Delete/api/tasks/:id
//@access private
const deleteTask = asyncHandler(async(req, res) => {
    const tasks = await Task.findById(req.params.id);
    if(!tasks){
        res.status(404);
        throw new Error("task not found");
    }
    if(tasks.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("User don't have permission to other user tasks");
    }
    await Task.remove();
    res.status(200).json(Task);
});

module .exports= {
    getTasks,
    createTask, 
    getTask,
    updateTask,
    deleteTask
};