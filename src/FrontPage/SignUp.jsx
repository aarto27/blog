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
        navigate("/blog");
        
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
    <div className="Signup">
      <h1>Sign Up</h1>
      <form onSubmit={handleClick}>
        <label>Username</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your Username"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br />
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <br />
        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm your Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Sign-Up</button>
      </form>
      Already have an account?{" "}
      <NavLink to="/login">Login</NavLink>
    </div>
  );
};

export default SignUp;
