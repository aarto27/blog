import React, { useContext } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { GlobalContext } from "./context/GlobalContext.jsx";

const Header = () => {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(GlobalContext); 

  const handleLogout = () => {
    setCurrentUser(null); 
    navigate("/login");
  };

  return (
    <>
      <div className="Header">
        <h1>Hello {currentUser?.name || "Guest"}</h1> 
        <button id="logout" onClick={handleLogout}>Logout</button>
      </div>
      <NavLink id="home" to="/home">Home</NavLink>
    </>
  );
};

export default Header;
