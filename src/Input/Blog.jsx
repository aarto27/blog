import React, { useState, useEffect, useRef } from "react";
import BlogPost from "../Content/BlogPost";
import axios from "axios";
import Header from "../Header";
import './Blog.css'


const Blog = ({blogData}) => {
  const [blog, setBlog] = useState({ title: "", content: "" });
  const isFirstRender = useRef(true);

  console.log(blogData);

  const handlePost = async (e) => {
    e.preventDefault();
    if (blog.title.trim() === "" || blog.content.trim() === "") return;
  
    try {
      const response = await axios.post("http://localhost:3000/blogs", blog);
      setBlogPosts([...blogPosts, response.data]);
      setBlog({ title: "", content: "" });
    } catch (error) {
      console.error("Error posting blog:", error);
    }
  };
  

  return (
    <div className="blog">
      <Header />
      <form onSubmit={handlePost}>
        <input
          type="text"
          id="title"
          placeholder="Title"
          value={blog.title}
          onChange={(e) => setBlog({ ...blog, title: e.target.value })}
        />
        <br />
        <br />
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
        <br />
        <button type="submit" id="post">Post</button>
      </form>
      <BlogPost  posts={blogPosts}  setBlog={setBlogPosts}/>
    </div>
  );
};

export default Blog;
