
const apiUrl = process.env.REACT_APP_API_URL;

//GET request
export const fetchUserData = async () => {
  try {
    const response = await fetch(`${apiUrl}/user`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};

// POST request
export const registerUser = async (userData) => {
  try {
    const response = await fetch(`${apiUrl}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};
