import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-[#644f26] text-white py-12 mt-12">
      <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about" className="hover:text-gray-300 transition duration-300">About Us</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-300 transition duration-300">Contact Us</Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-gray-300 transition duration-300">FAQs</Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:text-gray-300 transition duration-300">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
          <p className="text-sm">Email: <span className="font-medium">support@blossomtrends.com</span></p>
          <p className="text-sm">Phone: <span className="font-medium">+1 (123) 456-7890</span></p>
          <p className="text-sm">Address: <span className="font-medium">123 Fashion Ave, New York, NY</span></p>
        </div>

        {/* Social Media */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-gray-300 transition duration-300">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-gray-300 transition duration-300">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-gray-300 transition duration-300">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-gray-300 transition duration-300">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-600 pt-6 text-center text-sm text-gray-300">
        <p>&copy; 2025 BlossomTrends. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
