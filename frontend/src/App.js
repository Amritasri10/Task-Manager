import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import TaskDashboard from './components/TaskDashboard';

const App = () => {
  return ( 
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tasks" element={<TaskDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
