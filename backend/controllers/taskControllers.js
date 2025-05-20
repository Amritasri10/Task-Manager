const Task = require('../models/Task');

// Get all tasks for a user
exports.getTasksByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const tasks = await Task.find({ createdBy: userId });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add new task
exports.createTask = async (req, res) => {
  try {
    const { title, note, dueDate, priority, project, createdBy } = req.body;
    const task = await Task.create({ title, note, dueDate, priority, project, createdBy });
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update task by id
exports.updateTask = async (req, res) => {
  try {
    const { taskId } = req.params;
    const updated = await Task.findByIdAndUpdate(taskId, req.body, { new: true });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete task by id
exports.deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.taskId);
    res.json({ message: 'Task deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
