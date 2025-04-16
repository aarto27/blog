import "./App.css";
import Blog from "./Input/Blog";
import SignUp from "./FrontPage/SignUp";
import Login from "./FrontPage/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import HomePage from "./Content/HomePage";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  // console.log("app", currentUser);
  const router = createBrowserRouter([
    { path: "/", element: <SignUp /> },
    { path: "/login", element: <Login setCurrentUser={setCurrentUser} /> },
    { path: "/blog", element: <Blog currentUser={currentUser} /> },
    {path: "blog/home",element: <HomePage />,},
  ]);

  return (
  <RouterProvider router={router} />
  );
}

export default App;
