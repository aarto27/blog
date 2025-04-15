import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
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

  const handleClick = (e) => {
    e.preventDefault();

    if (formData.password === formData.confirmPassword) {
      console.log("Signed up with:", formData.email, formData.password);
      // Redirect to blog page
      navigate("/blog");
    } else {
      alert("Passwords do not match!");
    }

    // Clear form
    setFormData({
      email: "",
      password: "",
      confirmPassword: ""
    });
  };

  return (
    <div className="Signup">
      <h1>Sign Up</h1>
      <form onSubmit={handleClick}>
        <label>Username</label>
        <input
          type="text"
          name="email"
          placeholder="Enter your Email"
          value={formData.email}
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
      <NavLink to="/login">Login</NavLink>
    </div>
  );
};

export default SignUp;
