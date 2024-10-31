import React from 'react';
import './LikeButton.css';

function LikeButton({ likes, incrementLike }) {
  return (
    <div className="like-button">
      <button onClick={incrementLike}>Like</button>
      <span>{likes} Likes</span>
    </div>
  );
}

export default LikeButton;