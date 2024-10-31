import React from 'react';
import './Comment.css';

function Comment({ text, date }) {
  // Format the comment date to Dhaka timezone
  const formattedDate = new Intl.DateTimeFormat('en-GB', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
    timeZone: 'Asia/Dhaka'
  }).format(new Date(date));

  return (
    <div className="comment">
      <p>{text}</p>
      <small style={{ color: '#888' }}>Commented on: {formattedDate}</small>
    </div>
  );
}

export default Comment;
