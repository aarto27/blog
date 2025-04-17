import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [blogData, setBlogData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get("http://localhost:3000/blogs");
      setBlogData(res.data.reverse());
    } catch (error) {
      console.error("Error fetching blog data:", error);
    }
  };

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:3000/user");
      setUserData(res.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
    fetchUsers();
  }, []);

  return (
    <GlobalContext.Provider value={{
      blogData,
      setBlogData,
      userData,
      setUserData,
      currentUser,
      setCurrentUser,
      fetchBlogs,
      fetchUsers
    }}>
      {children}
    </GlobalContext.Provider>
  );
};
