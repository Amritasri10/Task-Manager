import React, { useState , useEffect} from 'react';
import axios from 'axios';
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/api/test') // This will call http://localhost:5000/api/test
      .then(res =>console.log('Backend Response:', res.data))
      .catch(err => console.error('Axios Error connecting to backend:', err));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const API = process.env.REACT_APP_API_BASE_URL;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // API call
     axios.post(`${API}/api/users/register`, formData)  
      .then(response => {
        console.log("Registration success:", response.data);
        alert("Registered successfully!");
        navigate("/login");
      })
      .catch(error => {
        console.error("Registration error:", error.response?.data || error.message);
        alert("Registration failed. Try again.");
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow" style={{ width: "400px" }}>
        <h3 className="text-center mb-3" style={{color:'#5a9bd8', fontWeight: '700'}}>Register</h3>
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
            <span className="input-group-text"><FaEnvelope /></span>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="E-mail"
              value={formData.email}
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
            Register
          </button>
        </form>
        <p className="mt-3 text-center">
          Alreadyhave an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Register;
