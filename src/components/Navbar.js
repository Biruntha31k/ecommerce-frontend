import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { AiOutlineMail, AiOutlineUser } from 'react-icons/ai';
import { UserContext } from '../UserContext';
import Logo from '../assets/B.png';

function Navbar({ selectedCategory, setSelectedCategory }) {
  const navigate = useNavigate(); 
  const { user, setUser } = useContext(UserContext);
  const [isLoginMenuOpen, setIsLoginMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLoginMenuToggle = () => {
    setIsLoginMenuOpen(!isLoginMenuOpen);
    navigate('/login');
  };

  const handleLogout = () => {
    setUser({ isLoggedIn: false, username: '' });
    setIsLoginMenuOpen(false);
    alert('You have been logged out!');
  };

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="bg-white text-gray-800 shadow-md sticky top-0 z-50">
      <div className="container mx-auto max-w-screen-xl flex justify-between items-center py-4 px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="BlossomTrends" className="cursor-pointer w-12 h-12" />
        </Link>

        {/* Categories (Desktop and Medium Screens) */}
        <ul className="hidden lg:flex space-x-12 text-sm font-medium text-gray-800">
          <li>
            <Link 
              to="/products" 
              onClick={() => setSelectedCategory("All")}
              className="text-[#644f26] bg-white py-2 px-4 rounded-lg transition duration-300 ease-in-out"
            >
              All for Women
            </Link>
          </li>
          <li>
            <Link 
              to="/products?category=Ethnic"
              onClick={() => setSelectedCategory("Ethnic")}
              className="text-[#644f26] bg-white py-2 px-4 rounded-lg transition duration-300 ease-in-out"
            >
              Ethnic
            </Link>
          </li>
          <li>
            <Link 
              to="/products?category=Western"
              onClick={() => setSelectedCategory("Western")}
              className="text-[#644f26] bg-white py-2 px-4 rounded-lg transition duration-300 ease-in-out"
            >
              Western
            </Link>
          </li>
          <li>
            <Link 
              to="/products?category=Sports"
              onClick={() => setSelectedCategory("Sports")}
              className="text-[#644f26] bg-white py-2 px-4 rounded-lg transition duration-300 ease-in-out"
            >
              Sports Wear
            </Link>
          </li>
          <li>
            <Link 
              to="/products?category=Addon"
              onClick={() => setSelectedCategory("Addon")}
              className="text-[#644f26] bg-white py-2 px-4 rounded-lg transition duration-300 ease-in-out"
            >
              Add on
            </Link>
          </li>
        </ul>

        {/* Categories Button for Small Screens */}
        <button 
          className="lg:hidden font-semibold text-lg text-[#644f26] p-2" 
          onClick={handleSidebarToggle}
        >
          Categories
        </button>

        {/* Action Icons */}
        <div className="flex items-center space-x-4 relative">
          {user.isLoggedIn ? (
            <div className="flex items-center space-x-4 bg-white p-2 rounded-lg shadow-md">
              <span className="text-gray-800 font-medium">
                Welcome, <span className="font-semibold text-[#644f26]">{user.username}</span>
              </span>
              <button
                onClick={handleLogout}
                className="bg-[#644f26] text-white py-1 px-4 rounded-lg hover:bg-[#533a1e] transition-all duration-300 ease-in-out shadow-sm hover:shadow-md"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={handleLoginMenuToggle}
              className="hover:text-[#644f26] focus:outline-none"
            >
              <AiOutlineUser size={22} />
            </button>
          )}

          {/* Other Icons */}
          <Link to="/contact" className="hover:text-[#644f26]">
            <AiOutlineMail size={22} />
          </Link>
          <Link to="/cart" className="hover:text-[#644f26] flex items-center">
            <FiShoppingCart size={22} />
          </Link>
        </div>
      </div>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50">
          <button
            className="text-[#644f26] p-4 text-lg focus:outline-none"
            onClick={handleSidebarToggle}
          >
            X
          </button>
          <ul className="space-y-4 p-4">
            <li>
              <Link 
                to="/products" 
                onClick={() => {
                  setSelectedCategory("All");
                  handleSidebarToggle();
                }}
                className="block text-[#644f26] py-2 px-4 rounded-lg"
              >
                All for Women
              </Link>
            </li>
            <li>
              <Link 
                to="/products?category=Ethnic"
                onClick={() => {
                  setSelectedCategory("Ethnic");
                  handleSidebarToggle();
                }}
                className="block text-[#644f26] py-2 px-4 rounded-lg"
              >
                Ethnic
              </Link>
            </li>
            <li>
              <Link 
                to="/products?category=Western"
                onClick={() => {
                  setSelectedCategory("Western");
                  handleSidebarToggle();
                }}
                className="block text-[#644f26] py-2 px-4 rounded-lg"
              >
                Western
              </Link>
            </li>
            <li>
              <Link 
                to="/products?category=Sports"
                onClick={() => {
                  setSelectedCategory("Sports");
                  handleSidebarToggle();
                }}
                className="block text-[#644f26] py-2 px-4 rounded-lg"
              >
                Sports Wear
              </Link>
            </li>
            <li>
              <Link 
                to="/products?category=Addon"
                onClick={() => {
                  setSelectedCategory("Addon");
                  handleSidebarToggle();
                }}
                className="block text-[#644f26] py-2 px-4 rounded-lg"
              >
                Add on
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
