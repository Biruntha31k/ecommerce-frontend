
import React, { useEffect, useState } from 'react';
import { fetchUserData } from '../services/api'; // Import the API utility

const UserProfile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await fetchUserData();
        setUserData(data);
      } catch (error) {
        console.error('Failed to fetch user data', error);
      }
    };

    getUserData();
  }, []);

  if (!userData) return <div>Loading...</div>;

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
};

export default UserProfile;
