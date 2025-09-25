import React from 'react';
import './styles/SocialHub.css';

const SocialHub = () => {
  return (
    <div className="social-hub-container">
      <h1 className="social-title">Social Hub</h1>
      <div className="social-content">
        <div className="friend-list">
          <h2>Friends</h2>
          <p>User1, User2, User3 (Add your friends here!)</p>
        </div>
        <div className="posts">
          <h2>Recent Posts</h2>
          <p>Post 1: Shared a favorite verse today!</p>
          <p>Post 2: Joined a new study group.</p>
          <p>Post 3: Looking for discussion partners.</p>
        </div>
      </div>
    </div>
  );
};

export default SocialHub;