import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setError(''); // Clear error if passwords match
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
      console.log('Registration successful:', response.data);
      setSuccess(true);
      setTimeout(() => navigate('/login'), 2000); // Redirect after showing success message
    } catch (error) {
      console.error('Registration error:', error);
      setError(error.response?.data?.message || 'Something went wrong');
    }
  };
  
  

  return (
    <section className="bg-[#f3f3f3] h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-semibold text-[#644f26] text-center mb-6">Register</h2>
        {success && <p className="text-green-500 text-center mb-4">Registration successful!</p>}
        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-left text-lg font-medium text-[#644f26]">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg mt-2"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-left text-lg font-medium text-[#644f26]">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg mt-2"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-left text-lg font-medium text-[#644f26]">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg mt-2"
              placeholder="Create a password"
              required
            />
          </div>

          {/* Confirm Password Input */}
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-left text-lg font-medium text-[#644f26]">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg mt-2"
              placeholder="Confirm your password"
              required
            />
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#644f26] text-white text-lg font-semibold rounded-lg hover:bg-[#8b6b3b] transition duration-300"
          >
            Register
          </button>
        </form>

        {/* Additional Options */}
        <div className="text-center mt-4 text-sm text-gray-600">
          Already have an account? <a href="/login" className="text-[#644f26] hover:underline">Login</a>
        </div>
      </div>
    </section>
  );
}

export default RegisterPage;
