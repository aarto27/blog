import React, { useState } from 'react';

function LikeBtn({ post, onLikeToggle }) {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
    onLikeToggle(post.id, !isLiked); 
  };

  return (
    <div>
      <p onClick={toggleLike}>
        {isLiked ? "❤️ " : "♡"} Like {post.likes}
      </p>
    </div>
  );
}

export default LikeBtn;
