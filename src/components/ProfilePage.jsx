// src/components/ProfilePage.jsx
import React, { useState, useEffect } from "react";
import { API, Storage } from "aws-amplify";
import { gql } from "graphql-tag";
import { Auth } from "aws-amplify";
import "./styles/ProfilePage.css";

const TABS = [
  { id: "posts", label: "My Posts" },
  { id: "highlights", label: "My Highlights" },
  { id: "bookmarks", label: "My Bookmarks" },
  { id: "comments", label: "My Comments" },
];

const SignOutButton = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await Auth.signOut();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <button className="sign-out-button" onClick={handleSignOut}>
      Sign Out
    </button>
  );
};

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [profilePicUrl, setProfilePicUrl] = useState(null);
  const [activeTab, setActiveTab] = useState("posts");
  const [data, setData] = useState({
    posts: [],
    highlights: [],
    bookmarks: [],
    comments: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const cognitoUser = await Auth.currentAuthenticatedUser();
        const userId = cognitoUser.attributes.sub;

        // Load S3 profile picture
        if (cognitoUser.attributes["custom:photoPath"]) {
          const url = await Storage.get(cognitoUser.attributes["custom:photoPath"], {
            level: "protected",
          });
          setProfilePicUrl(url);
        }

        setUser(cognitoUser);

        // Load all data in parallel
        const [pRes, hRes, bRes, cRes] = await Promise.all([
          API.graphql({
            query: gql`
              query ListMyPosts($userId: ID!) {
                listPosts(filter: { userId: { eq: $userId } }) {
                  items {
                    id
                    content
                    likes
                    createdAt
                  }
                }
              }
            `,
            variables: { userId },
            authMode: "AMAZON_COGNITO_USER_POOLS",
          }),
          API.graphql({
            query: gql`
              query ListMyHighlights($userId: ID!) {
                listHighlights(filter: { userId: { eq: $userId } }) {
                  items {
                    id
                    book
                    chapter
                    verse
                    text
                    color
                    note
                    createdAt
                  }
                }
              }
            `,
            variables: { userId },
            authMode: "AMAZON_COGNITO_USER_POOLS",
          }),
          API.graphql({
            query: gql`
              query ListMyBookmarks($userId: ID!) {
                listBookmarks(filter: { userId: { eq: $userId } }) {
                  items {
                    id
                    book
                    chapter
                    verse
                    text
                    label
                    createdAt
                  }
                }
              }
            `,
            variables: { userId },
            authMode: "AMAZON_COGNITO_USER_POOLS",
          }),
          API.graphql({
            query: gql`
              query ListMyComments($userId: ID!) {
                listComments(filter: { userId: { eq: $userId } }) {
                  items {
                    id
                    verseKey
                    title
                    text
                    body
                    createdAt
                  }
                }
              }
            `,
            variables: { userId },
            authMode: "AMAZON_COGNITO_USER_POOLS",
          }),
        ]);

        setData({
          posts: pRes.data?.listPosts?.items || [],
          highlights: hRes.data?.listHighlights?.items || [],
          bookmarks: bRes.data?.listBookmarks?.items || [],
          comments: cRes.data?.listComments?.items || [],
        });
      } catch (err) {
        console.error("Profile load error:", err);
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const d = new Date(dateString);
    return d.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const renderContent = () => {
    const items = data[activeTab] || [];

    if (items.length === 0) {
      return <p style={{ textAlign: "center", color: "#666", margin: "40px 0" }}>No {TABS.find(t => t.id === activeTab)?.label} yet.</p>;
    }

    return items.map((item) => {
      if (activeTab === "posts") {
        return (
          <div key={item.id} className="profile-item">
            <p className="post-content">{item.content}</p>
            <div className="item-meta">
              <span>{item.likes} likes</span>
              <span>{formatDate(item.createdAt)}</span>
            </div>
          </div>
        );
      }

      if (activeTab === "highlights") {
        return (
          <div key={item.id} className="profile-item highlight-item" style={{ borderLeft: `4px solid ${item.color || "#ffd43b"}` }}>
            <p className="verse-ref">
              <strong>{item.book} {item.chapter}:{item.verse}{item.text}</strong>
            </p>
            {item.note && <p className="note">"{item.note}"</p>}
            <small>{formatDate(item.createdAt)}</small>
          </div>
        );
      }

      if (activeTab === "bookmarks") {
        return (
          <div key={item.id} className="profile-item">
            <p>
              <strong>{item.book} {item.chapter}:{item.verse}{item.text}</strong>
              {item.label && ` — ${item.label}`}
            </p>
            <small>{formatDate(item.createdAt)}</small>
          </div>
        );
      }

      if (activeTab === "comments") {
        return (
          <div key={item.id} className="profile-item">
            <p className="verse-ref"><strong>{item.verseKey}</strong></p>
            {item.title && <p className="comment-title">{item.title}{item.text}</p>}
            <p className="comment-body">"{item.body}"</p>
            <small>{formatDate(item.createdAt)}</small>
          </div>
        );
      }

      return null;
    });
  };

  if (loading) {
    return (
      <div className="profile-container">
        <div className="profile-header skeleton"></div>
        <div className="tab-content skeleton"></div>
      </div>
    );
  }

  const displayName = user?.attributes?.given_name || user?.attributes?.name || user?.attributes?.email?.split("@")[0] || "User";

  return (
    <div className="profile-container">
      {/* === HEADER === */}
      <div className="profile-header">
        <div className="avatar-container">
          {profilePicUrl ? (
            <img src={profilePicUrl} alt="Profile" className="profile-avatar" />
          ) : (
            <div className="avatar-placeholder">
              {displayName.charAt(0).toUpperCase()}
            </div>
          )}
        </div>
        <div className="user-info">
          <h1>{displayName}</h1>
          <p className="email">{user?.attributes?.email}</p>
        </div>
      </div>

      {/* === TABS === */}
      <div className="profile-tabs">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
            <span className="count">
              ({data[tab.id]?.length || 0})
            </span>
          </button>
        ))}
      </div>

      {/* === CONTENT === */}
      <div className="tab-content">
        {renderContent()}
      </div>

    </div>
  );
};

export default ProfilePage;