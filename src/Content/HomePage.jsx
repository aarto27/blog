import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import axios from "axios";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();
  const { blogData, setBlogData, currentUser } = useContext(GlobalContext);
  const [userBlogs, setUserBlogs] = useState([]);

  const goToBlogs = () => navigate("/blog");

  useEffect(() => {
    if (currentUser?.name) {
      const filtered = blogData.filter(
        (blog) => blog.author === currentUser.name
      );
      setUserBlogs(filtered);
    }
  }, [blogData, currentUser]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/blogs/${id}`);
      const updatedBlogs = blogData.filter((blog) => blog.id !== id);
      setBlogData(updatedBlogs); 
    } catch (error) {
      console.error("Error deleting blog post:", error);
    }
  };

  return (
    <div className="home-wrapper">
      <section className="hero">
        <h1>
          Welcome back, <span>{currentUser?.name || "Guest"}</span> 👋
        </h1>
        <p>
          Here's a quick look at your creative space. Express yourself through
          blogs, and explore the thoughts you've shared.
        </p>
        <button className="go-blog-btn" onClick={goToBlogs}>
          ✍️ Create New Blog
        </button>
      </section>

      <section className="your-blogs">
        <h2>Your Blog Posts</h2>
        {userBlogs.length === 0 ? (
          <p className="empty-msg">
            You haven’t shared anything yet. Start blogging now!
          </p>
        ) : (
          <div className="blog-list">
            {userBlogs.map((blog) => (
              <div className="blog-card" key={blog.id}>
                <i
                  onClick={() => handleDelete(blog.id)}
                  className="fa-solid fa-trash delete"
                ></i>
                <h3>{blog.title}</h3>
                <p>{blog.content}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default HomePage;
