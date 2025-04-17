import React, { useState, useEffect } from "react";
import BlogPost from "../Content/BlogPost";
import axios from "axios";
import Header from "../Header";
import "./Blog.css";

const Blog = ({ currentUser }) => {
  const [blogData, setBlogData] = useState([]);
  const [blog, setBlog] = useState({ title: "", content: "", author: "" });

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:3000/blogs");
        setBlogData(response.data.reverse());
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };
    fetchBlogs();
  }, []);
console.log(currentUser);
  const handlePost = async (e) => {
    e.preventDefault();
    if (!blog.title.trim() || !blog.content.trim()) return;

    try {
      const response = await axios.post("http://localhost:3000/blogs", {
        ...blog,
        author: currentUser?.name || "Anonymous",
      });
      setBlogData([response.data, ...blogData]);
      setBlog({ title: "", content: "", author: "" });
    } catch (error) {
      console.error("Error posting blog:", error);
    }
  };

  return (
    <div className="blog-page">
      <Header currentUser={currentUser} />

      <section className="intro-section">
        <h2>Welcome to Your Blog Board, <span>{currentUser?.name || "Guest"}!</span></h2>
        <p>Share your thoughts with the world 🌍</p>
      </section>

      <div className="form-section">
        <h3>Create a New Blog 📝</h3>
        <form onSubmit={handlePost}>
          <input
            type="text"
            id="title"
            placeholder="Give your blog a title..."
            value={blog.title}
            onChange={(e) => setBlog({ ...blog, title: e.target.value })}
          />

          <textarea
            id="content"
            placeholder="What's on your mind?"
            rows="6"
            value={blog.content}
            onChange={(e) => setBlog({ ...blog, content: e.target.value })}
          ></textarea>

          <button type="submit" id="post"> Publish</button>
        </form>
      </div>

      <div className="blog-section">
        <h3>Your Recent Posts</h3>
        <BlogPost posts={blogData} setBlog={setBlogData} />
      </div>
    </div>
  );
};

export default Blog;
