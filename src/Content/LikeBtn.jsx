import React, { useState } from 'react';

function LikeBtn({ post, onLikeToggle }) {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
    onLikeToggle(post.id, !isLiked); 
  };

  return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
       <img  onClick={toggleLike} src="Heart.png" alt="like" style={{width:"40px" , height:"40px"}} /> <p> Like {post.likes}</p>
    </div>
  );
}

export default LikeBtn;
