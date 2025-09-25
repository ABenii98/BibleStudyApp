import React, { Component, useState } from 'react';
import { Authenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import { API, graphqlOperation } from 'aws-amplify';
import { createUser } from './graphql/mutations';
import { useNavigate } from 'react-router-dom';
import awsmobile from "./aws-exports.js";
import Navigation from './Navigation.jsx';
import './components/styles/Auth.css';

Amplify.configure(awsmobile);

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

const Auth = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleAuthStateChange = async (authState, authUser) => {
    if (authState === 'signedin' && authUser) {
      setUser(authUser);
      try {
        const userId = authUser.attributes.sub;
        const email = authUser.attributes.email;
        const firstName = authUser.attributes['custom:firstName'] || '';
        const lastName = authUser.attributes['custom:lastName'] || '';

        // Check if firstName and lastName are provided
        if (!firstName || !lastName) {
          console.error('First name or last name missing during signup:', authUser.attributes);
          return; // Prevent saving incomplete data
        }

        // Initial save to DynamoDB
        await API.graphql(graphqlOperation(createUser, {
          input: {
            id: userId,
            email,
            firstName,
            lastName,
            birthday: '',
            photoPath: '',
            bio: '',
            xP: 0,
          },
          authMode: 'AMAZON_COGNITO_USER_POOLS'
        }));
        console.log('User created in DynamoDB:', userId);
        // Redirect to profile for remaining setup
        navigate('/profile');
      } catch (error) {
        console.error('Error creating user in DynamoDB:', error);
      }
    } else if (authState === 'signout') {
      setUser(null);
      navigate('/');
    }
  };

  return (
    <Authenticator 
      signupFields={[
        {
          label: 'First Name',
          key: 'custom:firstName',
          required: true,
          type: 'text',
          placeholder: 'Enter first name'
        },
        {
          label: 'Last Name',
          key: 'custom:lastName',
          required: true,
          type: 'text',
          placeholder: 'Enter last name'
        }
      ]}
      onAuthStateChange={handleAuthStateChange}
    >
      {({ signOut, user }) => (
        <ErrorBoundary>
          <Navigation signOut={signOut} user={user} />
        </ErrorBoundary>
      )}
    </Authenticator>
  );
};

export default Auth;