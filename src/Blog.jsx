import React, { useState, useEffect, useRef } from "react";
import BlogPost from "./BlogPost";

const Blog = () => {
  const [blog, setBlog] = useState({ title: "", content: "" });
  const [blogPosts, setBlogPosts] = useState([]);
  const isFirstRender = useRef(true);

  useEffect(() => {
    const storedPosts = localStorage.getItem("blogPosts");
    if (storedPosts) {
      setBlogPosts(JSON.parse(storedPosts));
    }
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    localStorage.setItem("blogPosts", JSON.stringify(blogPosts));
  }, [blogPosts]);

  const handlePost = (e) => {
    e.preventDefault();
    if (blog.title.trim() === "" || blog.content.trim() === "") return;

    const updatedPosts = [...blogPosts, blog];
    setBlogPosts(updatedPosts);
    setBlog({ title: "", content: "" });
  };

  return (
    <div className="blog">
      <h1>Blog</h1>
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
    
      {/* Pass blogPosts to BlogPost */}
      <BlogPost posts={blogPosts}  setBlog={setBlogPosts}/>
    </div>
  );
};

export default Blog;
