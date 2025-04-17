import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./SignUp.css";
import axios from "axios";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    confirmPassword: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    if (formData.password === formData.confirmPassword) {
      try {
        await axios.post("http://localhost:3000/user", {
          name: formData.name,
          password: formData.password
        });

        alert("Signup successful!");
        navigate("/login");

        setFormData({
          name: "",
          password: "",
          confirmPassword: ""
        });
      } catch (error) {
        console.error("Error posting user data:", error);
        alert("Something went wrong while signing up.");
      }
    } else {
      alert("Passwords do not match!");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1>Join Us 🚀</h1>
        <p>Create your account below</p>
        <form onSubmit={handleClick}>
          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your Username"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="signup-btn">Create Account</button>
          <p className="login-text">
            Already have an account? <NavLink to="/login">Login</NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;