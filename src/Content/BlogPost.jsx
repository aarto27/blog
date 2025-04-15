import React from "react";
import LikeBtn from "./LikeBtn";

const BlogPost = ({ posts, setBlog }) => {
    
    

    const handleDelete = (index) => {
      const ab = index;
        const newpost = posts.filter((item, index)=> ab !== index);
        setBlog(newpost);
      };


  return (
    <>
      <div className="blogContent">
        {posts.map((post, index) => (
          <div className="blogPost" key={index}>
            <div className="header">
           <i onClick={()=>handleDelete(index)} className="fa-solid fa-trash delete"></i>
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