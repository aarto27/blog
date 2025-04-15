import React, { useState } from "react";
import "./Login.css";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/blog");
    setFormData({
      email: '',
      password: ''
    });
  };

  return (
    <div className="Login">
      <h1>Login</h1>
      <form onSubmit={handleClick}>
        <label>Username:</label>
        <input
          type="text"
          name="email"
          id="email"
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
          }}
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={(e) => {
            setFormData({ ...formData, password: e.target.value });
          }}
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
