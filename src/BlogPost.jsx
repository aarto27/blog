import React,{useState} from "react";

const BlogPost = ({ posts }) => {
    const [blogPosts, setBlogPosts] = useState(posts);

    const handleDelete = (index) => {
        console.log("Your index is:",index);
        const newpost = blogPosts.filter((i)=>{
            return i !== index;
        });
        setBlogPosts(newpost);
        console.log(handleDelete);
      };


  return (
    <>
      <div className="blogContent">
        {posts.map((post, index) => (
          <div className="blogPost" key={index}>
           <i onClick={()=>handleDelete(index)} className="fa-solid fa-trash"></i>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogPost;
