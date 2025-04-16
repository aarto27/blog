import React from "react";
import { useNavigate, NavLink } from "react-router-dom";

const Header = ({ currentUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };
  

  return (  
    <>
    <div className="Header">
      <h1>Hello {currentUser?.name || "Guest"}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
    <NavLink to="home">Home</NavLink>
    </>
  );
};

export default Header;
