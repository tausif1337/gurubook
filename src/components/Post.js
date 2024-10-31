import React, { useState } from 'react';
import LikeButton from './LikeButton';
import CommentList from './CommentList';

function Post({ post, setPosts }) {
  const addComment = (text) => {
    const updatedPost = {
      ...post,
      comments: [
        ...post.comments,
        { id: Date.now(), text, date: new Date(), likes: 0 }
      ],
    };
    setPosts((prevPosts) =>
      prevPosts.map((p) => (p.id === post.id ? updatedPost : p))
    );
  };

  const incrementLike = () => {
    const updatedPost = { ...post, likes: post.likes + 1 };
    setPosts((prevPosts) =>
      prevPosts.map((p) => (p.id === post.id ? updatedPost : p))
    );
  };

  // Format post date to Dhaka timezone
  const formattedDate = new Intl.DateTimeFormat('en-GB', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
    timeZone: 'Asia/Dhaka'
  }).format(new Date(post.date));

  return (
    <div className="post">
      <p>{post.content}</p>
      <small style={{ color: '#888' }}>Posted on: {formattedDate}</small>
      <LikeButton likes={post.likes} incrementLike={incrementLike} />
      <CommentList comments={post.comments} addComment={addComment} />
    </div>
  );
}

export default Post;
