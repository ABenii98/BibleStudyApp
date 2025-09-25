import React, { useState, useEffect } from 'react';
import { API, Storage } from 'aws-amplify';
import { gql } from 'graphql-tag';
import { useNavigate } from 'react-router-dom';
import './styles/ProfilePage.css';
import { Label } from '@aws-amplify/ui-react';

const ProfilePage = ({ user, signOut }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [photoPath, setPhotoPath] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [bio, setBio] = useState('');
  const [xP, setXP] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const getUserQuery = gql`
    query GetUser($id: ID!) {
      getUser(id: $id) {
        id
        email
        firstName
        lastName
        birthday
        photoPath
        bio
        xP
      }
    }
  `;

  const createUserMutation = gql`
    mutation CreateUser($input: CreateUserInput!) {
      createUser(input: $input) {
        id
        email
        firstName
        lastName
        birthday
        photoPath
        bio
        xP
      }
    }
  `;

  const updateUserMutation = gql`
    mutation UpdateUser($input: UpdateUserInput!) {
      updateUser(input: $input) {
        id
        email
        firstName
        lastName
        birthday
        photoPath
        bio
        xP
      }
    }
  `;

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      setError(null);
      try {
        if (!user?.attributes?.sub) {
          setError('User data unavailable.');
          setLoading(false);
          return;
        }

        const userId = user.attributes.sub;
        const response = await API.graphql({
          query: getUserQuery,
          variables: { id: userId },
          authMode: 'AMAZON_COGNITO_USER_POOLS'
        });

        const userData = response.data.getUser;
        if (userData) {
          setFirstName(userData.firstName || '');
          setLastName(userData.lastName || '');
          setBirthday(userData.birthday || '');
          setPhotoPath(userData.photoPath || '');
          setBio(userData.bio || '');
          setXP(userData.xP || 0);
        }
      } catch {
        setError('Failed to load profile.');
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [user]);

  useEffect(() => {
    let isMounted = true;
    if (photoPath) {
      Storage.get(photoPath, { level: 'public' })
        .then(url => { if (isMounted) setPhotoUrl(url); })
        .catch(() => setError('Failed to load profile photo.'));
    } else {
      setPhotoUrl('');
    }
    return () => { isMounted = false; };
  }, [photoPath]);

  const handlePhotoUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        const fileName = `profile_images/${user.attributes.sub}-${Date.now()}-${file.name}`;
        await Storage.put(fileName, file, {
          level: 'public',
          contentType: file.type || 'application/octet-stream'
        });
        setPhotoPath(fileName);
      } catch {
        setError('Failed to upload photo.');
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userId = user.attributes.sub;
      const email = user.attributes.email;

      const getUserResp = await API.graphql({
        query: getUserQuery,
        variables: { id: userId },
        authMode: 'AMAZON_COGNITO_USER_POOLS'
      });
      const existingUser = getUserResp.data.getUser;

      const input = {
        id: userId,
        email,
        firstName,
        lastName,
        birthday,
        photoPath,
        bio,
        xP
      };

      if (!existingUser) {
        await API.graphql({
          query: createUserMutation,
          variables: { input },
          authMode: 'AMAZON_COGNITO_USER_POOLS'
        });
      } else {
        await API.graphql({
          query: updateUserMutation,
          variables: { input },
          authMode: 'AMAZON_COGNITO_USER_POOLS'
        });
      }
      setIsEditing(false);
    } catch {
      setError('Failed to save profile.');
    }
  };

  return (
    <div className="profile-container">
      <h1 className="profile-title">Profile</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="error-message">{error}</p>}

      <div className="profile-view">
        {photoUrl && <img src={photoUrl} alt="Profile" className="profile-photo" />}
        <p className="profile-name">{firstName} {lastName}</p>
        <p className="profile-email">{user?.attributes?.email}</p>
        <p>Birthday: {birthday || 'Not set'}</p>
        <p>Bio: {bio}</p>
        <p>XP Points: {xP}</p>
      </div>

      <button onClick={() => setIsEditing(!isEditing)} className="edit-button">
        {isEditing ? 'Cancel' : 'Edit Profile'}
      </button>

      {isEditing && (
        <form onSubmit={handleSubmit} className="setup-form">
          <div className="form-group">
            <Label>COMPLETE YOUR PROFILE TO UNLOCK SOCIAL HUB AND CHALLANGES</Label>
            <label htmlFor="photo">Profile Photo</label>
            <input type="file" id="photo" accept="image/*" onChange={handlePhotoUpload} />
          </div>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="birthday">Birthday</label>
            <input type="date" id="birthday" value={birthday} onChange={(e) => setBirthday(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="bio">Bio</label>
            <textarea id="bio" value={bio} onChange={(e) => setBio(e.target.value)} placeholder="Tell us about yourself..." />
          </div>
          <button type="submit" className="submit-button">Save Changes</button>
        </form>
      )}

      <div className="sign-out-container">
        <button className="sign-out-button" onClick={signOut}>Sign Out</button>
      </div>
    </div>
  );
};

export default ProfilePage;
