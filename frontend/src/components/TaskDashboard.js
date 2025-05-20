import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { FaEdit, FaTrash, FaSave, FaTimes } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const TaskDashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [taskData, setTaskData] = useState({
    title: '',
    note: '',
    dueDate: '',
    priority: '',
    project: ''
  });
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState({});

  // Load tasks from backend on component mount
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('/api/tasks');
        setTasks(response.data);
      } catch (error) {
        console.error('Failed to fetch tasks:', error);
      }
    };
    fetchTasks();
  }, []);

  const handleChange = (e) => {
    setTaskData({ ...taskData, [e.target.name]: e.target.value });
  };

  const handleAddTask = async (e) => {
    e.preventDefault();
    if (taskData.title.trim() === '') return;

    try {
      const response = await axios.post('/api/tasks', taskData);
      console.log('Task added on server:', response.data);
      setTasks(prevTasks => [...prevTasks, response.data]); // add the new task returned from backend
      setTaskData({ title: '', note: '', dueDate: '', priority: '', project: '' });
    } catch (error) {
      console.error('Failed to add task:', error);
    }
  };

  const handleDelete = async (index) => {
    if (!window.confirm('Are you sure you want to delete this task?')) return;

    const taskToDelete = tasks[index];
    try {
      await axios.delete(`/api/tasks/${taskToDelete._id}`); // assuming your tasks have an _id field
      setTasks(prevTasks => {
        const newTasks = prevTasks.filter((_, i) => i !== index);
        console.log('Task Deleted at index:', index);
        return newTasks;
      });
      if (editIndex === index) {
        setEditIndex(null);
        setEditData({});
      }
    } catch (error) {
      console.error('Failed to delete task:', error);
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditData(tasks[index]);
  };

  const handleEditChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleSave = async (index) => {
    if (editData.title.trim() === '') return alert('Title is required!');

    try {
      const updatedTask = editData;
      const response = await axios.put(`/api/tasks/${updatedTask._id}`, updatedTask);
      setTasks(prevTasks => {
        const newTasks = [...prevTasks];
        newTasks[index] = response.data; // update with backend response
        console.log('Task Edited at index:', index);
        return newTasks;
      });
      setEditIndex(null);
      setEditData({});
    } catch (error) {
      console.error('Failed to update task:', error);
    }
  };

  const handleCancel = () => {
    setEditIndex(null);
    setEditData({});
  };

  return (
    <div className="container py-4">
      <style>{`
        /* Form container */
        form {
          background-color: #f9fafb;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          max-width: 600px;
          margin: 0 auto 2rem;
        }
        /* Inputs and selects */
        form input[type="text"],
        form input[type="date"],
        form textarea,
        form select {
          border: none;
          background-color: #fff;
          padding: 12px 16px;
          border-radius: 10px;
          box-shadow: inset 0 0 6px rgba(0,0,0,0.1);
          font-size: 1rem;
          transition: box-shadow 0.3s ease;
          width: 100%;
          margin-bottom: 1rem;
          resize: vertical;
        }
        form input[type="text"]:focus,
        form input[type="date"]:focus,
        form textarea:focus,
        form select:focus {
          outline: none;
          box-shadow: 0 0 8px #5a9bd8;
          background-color: #f0f8ff;
        }
        form button {
          border-radius: 10px;
          font-weight: 600;
          padding: 12px;
          font-size: 1.1rem;
          transition: background-color 0.3s ease;
        }
        form button:hover {
          background-color: #2c7be5;
          border-color: #2c7be5;
        }

        /* Task cards */
        .card {
          background-color: #fff;
          border-radius: 12px;
          box-shadow: 0 6px 15px rgba(0,0,0,0.1);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 25px rgba(0,0,0,0.15);
        }
        .card-body {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          padding: 20px;
        }

        /* Card text */
        .card-title {
          font-weight: 700;
          color: #333;
          margin-bottom: 12px;
          font-size: 1.3rem;
          user-select: none;
        }
        .card-text {
          flex-grow: 1;
          color: #555;
          margin-bottom: 16px;
          white-space: pre-wrap;
          user-select: text;
        }
        small.text-muted {
          color: #888;
          font-size: 0.85rem;
          line-height: 1.3;
          margin-bottom: 12px;
          user-select: none;
        }

        /* Buttons inside card */
        .card-body button {
          border-radius: 8px;
          font-size: 1rem;
          width: 40px;
          height: 40px;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.3s ease;
        }
        .btn-warning {
          background-color: #ffba00;
          border-color: #ffba00;
          color: #212529;
        }
        .btn-warning:hover {
          background-color: #e0a800;
          border-color: #d39e00;
        }
        .btn-danger {
          background-color: #ff4d4f;
          border-color: #ff4d4f;
          color: white;
        }
        .btn-danger:hover {
          background-color: #d9363e;
          border-color: #c82333;
        }
        .btn-success {
          background-color: #28a745;
          border-color: #28a745;
          color: white;
        }
        .btn-success:hover {
          background-color: #218838;
          border-color: #1e7e34;
        }
        .btn-secondary {
          background-color: #6c757d;
          border-color: #6c757d;
          color: white;
        }
        .btn-secondary:hover {
          background-color: #5a6268;
          border-color: #545b62;
        }
      `}</style>

      <h2 className="mb-4 text-center" style={{ color: '#5a9bd8', fontWeight: '700' }}>
        My To-Do List
      </h2>

      {/* Task Form */}
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={taskData.title}
          onChange={handleChange}
          required
          autoComplete="off"
        />
        <textarea
          name="note"
          placeholder="Note"
          value={taskData.note}
          onChange={handleChange}
          rows={2}
        />
        <input type="date" name="dueDate" value={taskData.dueDate} onChange={handleChange} />
        <select name="priority" value={taskData.priority} onChange={handleChange}>
          <option value="">No Priority</option>
          <option value="High">High</option>
          <option value="Normal">Normal</option>
          <option value="Low">Low</option>
        </select>
        <select name="project" value={taskData.project} onChange={handleChange}>
          <option value="">Select Project</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Other">Other</option>
        </select>
        <button type="submit" className="btn btn-primary w-100">
          Add Task
        </button>
      </form>

      {/* Task List in Row with Cards */}
      <div className="row mx-auto" style={{ maxWidth: '1000px' }}>
        {tasks.map((task, index) => (
          <div key={task._id || index} className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                {editIndex === index ? (
                  <>
                    <input
                      type="text"
                      name="title"
                      value={editData.title}
                      onChange={handleEditChange}
                      required
                    />
                    <textarea
                      name="note"
                      value={editData.note}
                      onChange={handleEditChange}
                      rows={2}
                    />
                    <input
                      type="date"
                      name="dueDate"
                      value={editData.dueDate}
                      onChange={handleEditChange}
                    />
                    <select
                      name="priority"
                      value={editData.priority}
                      onChange={handleEditChange}
                    >
                      <option value="">No Priority</option>
                      <option value="High">High</option>
                      <option value="Normal">Normal</option>
                      <option value="Low">Low</option>
                    </select>
                    <select name="project" value={editData.project} onChange={handleEditChange}>
                      <option value="">Select Project</option>
                      <option value="Work">Work</option>
                      <option value="Personal">Personal</option>
                      <option value="Other">Other</option>
                    </select>
                    <div className="d-flex justify-content-between mt-auto">
                      <button
                        className="btn btn-success"
                        onClick={() => handleSave(index)}
                        title="Save"
                        type="button"
                      >
                        <FaSave />
                      </button>
                      <button
                        className="btn btn-secondary"
                        onClick={handleCancel}
                        title="Cancel"
                        type="button"
                      >
                        <FaTimes />
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <h5 className="card-title">{task.title}</h5>
                    <p className="card-text">{task.note}</p>
                    <small className="text-muted">
                      Due: {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : 'N/A'}<br />
                      Priority: {task.priority || 'None'}<br />
                      Project: {task.project || 'None'}
                    </small>
                    <div className="d-flex justify-content-between mt-auto">
                      <button
                        className="btn btn-warning"
                        onClick={() => handleEdit(index)}
                        title="Edit"
                        type="button"
                      >
                        <FaEdit />
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(index)}
                        title="Delete"
                        type="button"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskDashboard;
