import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext';

function Login() {
  const { setUser } = useContext(UserContext); // Access the context to update the user state
  const [username, setUsername] = useState(''); // State for username
  const [password, setPassword] = useState(''); // State for password
  const [error, setError] = useState(''); // State for login errors
  const navigate = useNavigate(); // For navigation after login

  const handleLogin = async (e) => {
    e.preventDefault();

    // Simulate an API call or fetch your backend here
    const simulatedResponse = {
      success: true, // Change to false to simulate login failure
      username: username,
    };

    if (simulatedResponse.success) {
      console.log('Login successful!');
      setUser({ isLoggedIn: true, username: simulatedResponse.username });
      navigate('/dashboard'); // Redirect to the home page or any other route
    } else {
      console.log('Login failed.');
      setError('Invalid username or password!');
    }
  };

  return (
    <section className="bg-[#f3f3f3] h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-semibold text-[#644f26] text-center mb-6">
          Welcome Back!
        </h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleLogin}>
          {/* Username Input */}
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-left text-lg font-medium text-[#644f26]"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg mt-2"
              placeholder="Enter your username"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-left text-lg font-medium text-[#644f26]"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg mt-2"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#644f26] text-white text-lg font-semibold rounded-lg hover:bg-[#8b6b3b] transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Additional Options */}
        <div className="text-center mt-4 text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/register" className="text-[#644f26] hover:underline">
            Register
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Login;
