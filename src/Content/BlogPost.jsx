import React, { useState } from "react";
import LikeBtn from "./LikeBtn";
import axios from "axios";

const BlogPost = ({ posts, setBlog , currentUser }) => {

  const handleLikeToggle = (postId, isLiked) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        return {
          ...post,
          likes: isLiked ? post.likes + 1 : post.likes - 1,
        };
      }
      return post;
    });
    setBlog(updatedPosts);
  };
  
  const handleDelete = async (id) => {
  //   const targetPost = posts.find((post) => post.id === id);
  // const author = targetPost.author;
  // console.log("Post Author:", author);
  // console.log("Current User:", currentUser.name);
  // if (currentUser.name !== author) {
  //   console.log("You are not allowed to delete this post.");
  //   return;
  // }

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
            <LikeBtn post={post} onLikeToggle={handleLikeToggle} />
           </div>
           <p><strong>By:</strong> {post.author || "Unknown"}</p> 
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogPost;