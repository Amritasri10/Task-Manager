import React, { useState } from 'react';
import axios from 'axios';
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const API = process.env.REACT_APP_API_BASE_URL;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Form Data:", formData);
     // API call
     axios.post(`${API}/api/users/login`, formData)  
      .then(response => {
        console.log("Login success:", response.data);
        alert("Login successfully!");
        navigate("/tasks"); // Navigate to tasks login
      })
      .catch(error => {
        console.error("Login error:", error.response.data);
        alert("Login failed. Try again.");
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow" style={{ width: "400px" }}>
        <h3 className="text-center mb-3" style={{color:'#5a9bd8', fontWeight: '700'}}>Login</h3>
        <form onSubmit={handleSubmit}>

          <div className="input-group mb-3">
            <span className="input-group-text"><FaUser /></span>
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text"><FaLock /></span>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>

        <p className="mt-3 text-center">
          Don’t have an account? <a href="/">Register</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
