// src/components/SocialHub.jsx
import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";
import { gql } from "graphql-tag";

const SocialHub = ({ user }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      if (!user) return;

      try {
        const response = await API.graphql({
          query: gql`
            query ListPosts {
              listPosts {
                items {
                  id
                  content
                  likes
                  createdAt
                  user {
                    firstName
                    photoPath
                  }
                }
              }
            }
          `,
          authMode: "AMAZON_COGNITO_USER_POOLS",
        });

        setPosts(response.data?.listPosts?.items || []);
      } catch (err) {
        console.error("SocialHub error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [user]);

  if (loading) return <p>Loading feed...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Social Hub</h1>
      {posts.map(post => (
        <div key={post.id} style={{ border: "1px solid #ddd", margin: "10px 0", padding: "10px" }}>
          <p>
            <strong>{post.user?.firstName || "User"}</strong>: {post.content}
          </p>
          <p>Likes: {post.likes}</p>
          <small>{new Date(post.createdAt).toLocaleString()}</small>
        </div>
      ))}
    </div>
  );
};

export default SocialHub;