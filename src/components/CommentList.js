import React, { useState } from 'react';
import Comment from './Comment';
import './CommentList.css';

function CommentList({ comments, addComment }) {
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim()) {
      addComment(newComment);
      setNewComment('');
    }
  };

  return (
    <div className="comment-list">
      {comments.map((comment) => (
        <Comment key={comment.id} text={comment.text} date={comment.date} />
      ))}
      <input
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Add a comment"
      />
      <button onClick={handleAddComment}>Comment</button>
      <span>{comments.length} Comments</span>
    </div>
  );
}

export default CommentList;
