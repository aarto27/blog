import { useState, useEffect } from "react";
import "./App.css";
import Blog from "./Input/Blog";
import SignUp from "./FrontPage/SignUp";
import Login from "./FrontPage/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";

function App() {
  const [blogData, setBlogData] = useState([]);
  const [userData, setUserData] = useState([]);
  
  const blog = async () => {
    try {
      const response = await axios.get("http://localhost:3000/blogs");
      setBlogData(response.data);
    } catch (error) {
      console.error("Error fetching blog data:", error);
    }
  };
  // console.log(blogData);
  const user = async () => {
    try {
      const response = await axios.get("http://localhost:3000/user");
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  useEffect(() => {
    blog();
    user();
  }, []);
  // console.log(userData);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignUp />,
    },
    {
      path: "/login",
      element: <Login 
      userData={userData} setUserData={setUserData} />,
    },
    {
      path: "/blog",
      element: (
        <Blog
          blogData={blogData}
          setBlogData={setBlogData}
          userData={userData}
          setUserData={setUserData}
        />
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
