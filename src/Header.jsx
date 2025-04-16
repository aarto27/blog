import axios from "axios";
import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
 
  useEffect(() => {
    const fetchData = async (id) => {
      try {
        const response = await axios.get(`http://localhost:3000/user/${id}`);
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();
  }, []);
  
  console.log(user);
  const handleLogout = () => {
    navigate("/login");
  };
  return (
    <>
      <div className="Header">
        <h1>Hello {user.name}</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </>
  );
};

export default Header;
