import React, { useState } from "react";

const Blog = () => {
  const [blog, setBlog] = useState({ title: "", content: "" });
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const storedPosts = localStorage.getItem("blogPosts");
    if (storedPosts) {
      setBlogPosts(JSON.parse(storedPosts)); 
    }
  }, []);

  useEffect(() => {
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
          rows="10"
          value={blog.content}
          onChange={(e) => setBlog({ ...blog, content: e.target.value })}
        ></textarea>
        <br />
        <br />
        <button type="submit">Post</button>
      </form>
      <div className="blogContent">
        {blogPosts.map((post, index) => (
          <div className="blogPost" key={index}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
