import React from 'react';
import './styles/Navbar.css';

const Navbar = ({ user }) => {
  return (
    <nav className="navbar">
      {/* Top-left: Profile link */}
      <div className="navbar-left">
        {user && (
          <a href="/profile" className="profile-link">
            {user.email || "Profile"}
          </a>
        )}
      </div>

      <div className="navbar-center">
        <a href="/social-hub" className="nav-link">Social Hub</a>
        <a href="/" className="home-link">
          <img src="/favicon.ico" alt="Home" className="home-icon" />
        </a>
        <a href="/challenges" className="nav-link">Challenges</a>
      </div>

      <div className="navbar-right">
        {/* (Optional: could add settings, notifications, etc. later) */}
      </div>
    </nav>
  );
};

export default Navbar;
