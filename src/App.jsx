import "./App.css";
import Blog from "./Input/Blog";
import SignUp from "./FrontPage/SignUp";
import Login from "./FrontPage/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState(null); 

  const router = createBrowserRouter([
    { path: "/", element: <SignUp /> },
    { path: "/login", element: <Login setCurrentUser={setCurrentUser} /> },
    { path: "/blog", element: <Blog currentUser={currentUser} /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
