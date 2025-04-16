import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./HomePage.css";

const HomePage = ({ currentUser }) => {
  const navigate = useNavigate();
  const [userBlogs, setUserBlogs] = useState([]);

  const goToBlogs = () => navigate("/blog");

  useEffect(() => {
    const fetchUserBlogs = async () => {
      try {
        const res = await axios.get("http://localhost:3000/blogs");
        const filtered = res.data.filter(
          (blog) => blog.author === currentUser?.name
        );
        setUserBlogs(filtered.reverse());
      } catch (err) {
        console.error("Error fetching user blogs:", err);
      }
    };

    if (currentUser?.name) fetchUserBlogs();
  }, [currentUser]);

  return (
    <div className="home-wrapper">

      <section className="hero">
        <h1>Welcome back, <span>{currentUser?.name || "Guest"}</span> 👋</h1>
        <p>
          Here's a quick look at your creative space. Express yourself through blogs,
          and explore the thoughts you've shared.
        </p>
        <button className="go-blog-btn" onClick={goToBlogs}>
          ✍️ Create New Blog
        </button>
      </section>

      <section className="your-blogs">
        <h2>Your Blog Posts</h2>
        {userBlogs.length === 0 ? (
          <p className="empty-msg">You haven’t shared anything yet. Start blogging now!</p>
        ) : (
          <div className="blog-list">
            {userBlogs.map((blog) => (
              <div className="blog-card" key={blog.id}>
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
