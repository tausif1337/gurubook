import React, { useState } from 'react';
import Post from './Post';
import './PostList.css';


function PostList({ posts, addPost, setPosts }) {
  const [newPostContent, setNewPostContent] = useState('');

  const handleAddPost = () => {
    if (newPostContent.trim()) {
      addPost(newPostContent);
      setNewPostContent('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newPostContent}
        onChange={(e) => setNewPostContent(e.target.value)}
        placeholder="What's on your mind?"
      />
      <button onClick={handleAddPost}>Post</button>

      {posts.map((post) => (
        <Post key={post.id} post={post} setPosts={setPosts} />
      ))}
    </div>
  );
}

export default PostList;
