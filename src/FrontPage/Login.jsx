import React, { useState, useEffect } from "react";
import "./Login.css";
import { useNavigate, NavLink } from "react-router-dom";
import axios from "axios";

const Login = ({ setCurrentUser }) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);
  const [formData, setFormData] = useState({ name: "", password: "" });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("http://localhost:3000/user");
        setUserData(res.data);
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    };
    fetchUsers();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const userExists = userData.find(
      (user) =>
        user.name.toLowerCase().trim() === formData.name.toLowerCase().trim() &&
        user.password === formData.password
    );

    if (userExists) {
      alert("Login successful!");
      setCurrentUser(userExists);
      navigate("/blog");
    } else {
      alert("Invalid username or password.");
    }

    setFormData({ name: "", password: "" });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Welcome Back 👋</h1>
        <p>Please enter your credentials to log in</p>
        <form onSubmit={handleClick}>
          <div className="input-group">
            <label htmlFor="name">Username</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your username"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
          </div>
          <button type="submit" className="login-btn">🚀 Login</button>
          <p className="signup-text">
            Don't have an account? <NavLink to="/">Sign Up</NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
