import React, { useState } from 'react';
import PostList from './components/PostList';

function App() {
  const [posts, setPosts] = useState([]);

  // Add a new post with a timestamp
  const addPost = (content) => {
    const newPost = {
      id: Date.now(),
      content,
      date: new Date(),
      likes: 0,
      comments: [],
    };
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="App">
      <h1>gurubook</h1>
      <PostList posts={posts} addPost={addPost} setPosts={setPosts} />
    </div>
  );
}

export default App;
