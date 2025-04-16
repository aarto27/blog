import React from "react";
import LikeBtn from "./LikeBtn";
import axios from "axios";

const BlogPost = ({ posts, setBlog }) => {
  
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/blogs/${id}`);
      const newPosts = posts.filter((post) => post.id !== id);
      setBlog(newPosts);
    } catch (error) {
      console.error("Error deleting blog post:", error);
    }
  };

  return (
    <>
      <div className="blogContent">
        {posts.map((post, index) => (
          <div className="blogPost" key={post.id}>
            <div className="header">
           <i onClick={()=>handleDelete(post.id)} className="fa-solid fa-trash delete"></i>
            <h2>{post.title}</h2>
           <LikeBtn />
           </div>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogPost;