// src/Navigation.jsx
import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import App from "./App";
import ProfilePage from "./components/ProfilePage.jsx";
import Navbar from "./components/Navbar.jsx";
import SocialHub from "./components/SocialHub";
import Challenges from "./components/Challenges";

const Navigation = ({ signOut, user }) => {
  const navigate = useNavigate();

  // OPTIONAL: Redirect to profile if no birthday in Cognito (or skip)
  // But DO NOT call getUser

  return (
    <>
      <Navbar signOut={signOut} user={user} />
      <Routes>
        <Route path="/" element={<App user={user} />} />
        <Route path="/profile" element={<ProfilePage signOut={signOut} user={user} />} />
        <Route path="/social-hub" element={<SocialHub user={user} />} />
        <Route path="/challenges" element={<Challenges user={user} />} />
      </Routes>
    </>
  );
};

export default Navigation;