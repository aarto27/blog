import React, { useState } from 'react'

function LikeBtn() {

    let [isLiked , setIsLiked] = useState(false);

    let toggle = () =>{
        setIsLiked(!isLiked);
    };
  return (
    <div><p onClick={toggle}>
        {isLiked ? "❤️ " : "♡"}
        </p></div>
  )
}

export default LikeBtn