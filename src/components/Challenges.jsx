import React from 'react';
import './styles/Challenges.css';

const Challenges = () => {
  return (
    <div className="challenges-container">
      <h1 className="challenges-title">Challenges</h1>
      <div className="challenges-content">
        <div className="leaderboard">
          <h2>Leaderboard</h2>
          <p>1. Player1 - 100 points</p>
          <p>2. Player2 - 85 points</p>
          <p>3. Player3 - 70 points</p>
        </div>
        <div className="challenge-preview">
          <h2>Active Challenges</h2>
          <p>Challenge 1: Memorize John 3:16 - Reward: 50 points</p>
          <p>Challenge 2: Complete a Quiz - Reward: 30 points</p>
        </div>
      </div>
    </div>
  );
};

export default Challenges;