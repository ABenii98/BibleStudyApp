
import { API, graphqlOperation } from 'aws-amplify';
import { gql } from 'graphql-tag';
import { React,  useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import App from './App';
import ProfilePage from './components/ProfilePage.jsx';
import Navbar from './components/Navbar.jsx';
import SocialHub from './components/SocialHub';
import Challenges from './components/Challenges';

const Navigation = ({ signOut, user }) => {
  const navigate = useNavigate();
  const location = useLocation();

useEffect(() => {
  const checkProfileSetup = async () => {
    if (user) {
      const userId = user.attributes.sub;
      try {
        const response = await API.graphql({
          query: gql`query GetUser($id: ID!) { getUser(id: $id) { firstName birthday } }`,
          variables: { id: userId },
          authMode: 'AMAZON_COGNITO_USER_POOLS'
        });
        const userData = response.data.getUser;
        console.log("User data from DynamoDB:", userData);
        if ((!userData?.birthday || userData.birthday === '') && 
            (location.pathname === '/social-hub' || location.pathname === '/challenges')) {
          navigate('/profile');
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        if (location.pathname === '/social-hub' || location.pathname === '/challenges') {
          navigate('/profile');
        }
      }
    }
  };
  checkProfileSetup();
}, [user, location.pathname, navigate]);

  return (
    <>
      <Navbar signOut={signOut} user={user} />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/profile" element={<ProfilePage signOut={signOut} user={user} />} />
        <Route path="/social-hub" element={<SocialHub />} />
        <Route path="/challenges" element={<Challenges />} />
      </Routes>
    </>
  );
};

export default Navigation;