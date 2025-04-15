import { useState } from 'react'
import './App.css'
import Blog from './Input/Blog'
import SignUp from './FrontPage/SignUp'
import Login from './FrontPage/Login'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <SignUp />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/blog',
      element: <Blog />,
    }
  ])

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App