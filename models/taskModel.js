const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        rquired:true,
        ref: "User",
    },
    description:{
        type:String,
        rquired: [true,"Please add the Contact name"],
    },
    category:{
        type:String,
        rquired: [true,"Please add the Contact name"],
    },
    dueDate: {
        type:Date,
        rquired: [true,"Please add the Contact name"],
    },},
    {
        timestamps: true,
    }
);
module.exports = mongoose.model("Task",taskSchema);