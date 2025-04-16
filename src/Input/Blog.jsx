import React, { useState, useEffect } from "react";
import BlogPost from "../Content/BlogPost";
import axios from "axios";
import Header from "../Header";
import "./Blog.css";

const Blog = (props) => {
  
  const {currentUser}= props;
  const [blogData, setBlogData] = useState([]);
  const [blog, setBlog] = useState({ title: "", content: "" });

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:3000/blogs");
        setBlogData(response.data);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };
    fetchBlogs();
  }, []);

  const handlePost = async (e) => {
    e.preventDefault();
    if (!blog.title.trim() || !blog.content.trim()) return;

    try {
      const response = await axios.post("http://localhost:3000/blogs", blog);
      setBlogData([...blogData, response.data]);
      setBlog({ title: "", content: "" , author:"userID"});
    } catch (error) {
      console.error("Error posting blog:", error);
    }
  };
console.log("blog===>",props);
  return (
    <div className="blog">
      <Header currentUser={currentUser} />
      <form onSubmit={handlePost}>
        <input
          type="text"
          id="title"
          placeholder="Title"
          value={blog.title}
          onChange={(e) => setBlog({ ...blog, title: e.target.value })}
        />
        <br />
        <textarea
          placeholder="Write Your Blog Here"
          cols="30"
          id="content"
          rows="10"
          value={blog.content}
          onChange={(e) => setBlog({ ...blog, content: e.target.value })}
        ></textarea>
        <br />
        <button type="submit" id="post">
          Post
        </button>
      </form>
      <BlogPost posts={blogData} setBlog={setBlogData} />
    </div>
  );
};

export default Blog;
