import React, { useState } from "react";
import LikeBtn from "./LikeBtn";
import axios from "axios";

const BlogPost = ({ posts, setBlog , currentUser }) => {

  const handleLikeToggle = async (postId) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        const currentLikes = Number(post.likes) || 0;
        const likedBy = post.likedBy || [];
  
        const hasLiked = likedBy.includes(currentUser.name);
  
        const updatedPost = {
          ...post,
          likes: hasLiked ? currentLikes - 1 : currentLikes + 1,
          likedBy: hasLiked
            ? likedBy.filter((name) => name !== currentUser.name)
            : [...likedBy, currentUser.name],
        };
        axios.patch(`http://localhost:3000/blogs/${post.id}`, {
          likes: updatedPost.likes,
          likedBy: updatedPost.likedBy,
        });
  
        return updatedPost;
      }
      return post;
    });
  
    setBlog(updatedPosts);
  };
  

  return (
    <>
      <div className="blogContent">
        {posts.map((post, index) => (
          <div className="blogPost" key={post.id}>
            <div className="header">
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