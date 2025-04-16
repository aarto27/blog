import React, { useState, useEffect } from "react";
import "./Login.css";
import { useNavigate,NavLink} from "react-router-dom";

const Login = (props) => {
  const {userData , setUserData } = props;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

 
console.log("userData====>",userData);

  const handleClick = (e) => {
    e.preventDefault();

    const userExists = userData.find(
      (user) =>
        user.name.toLowerCase().trim() === formData.name.toLowerCase().trim() &&
        user.password === formData.password
    );

    if (userExists) {
      alert("Login successful!");
      navigate("/blog");
      setFormData({ name: "", password: "" });
    } else {
      alert("Invalid username or password.");
    }
  };

  return (
    <div className="Login">
      <h1>Login</h1>
      <form onSubmit={handleClick}>
        <label>Username:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          required
        />
        <br />
        <button type="submit">Login</button>
        <p>Don't have an account<NavLink to="/">Sign Up</NavLink></p>
      </form>
    </div>
  );
};

export default Login;
