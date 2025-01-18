import React, { useState } from 'react';

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Add item to the wishlist
  const addToWishlist = () => {
    if (inputValue.trim() === '') {
      alert('Please enter an item name');
      return;
    }
    setWishlist([...wishlist, inputValue]);
    setInputValue('');
  };

  // Remove item from the wishlist
  const removeFromWishlist = (item) => {
    const updatedWishlist = wishlist.filter((wishlistItem) => wishlistItem !== item);
    setWishlist(updatedWishlist);
  };

  return (
    <div className="bg-[#f3f3f3] min-h-screen flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-semibold text-[#644f26] text-center mb-6">My Wishlist</h2>

        {/* Input Section */}
        <div className="flex items-center mb-6">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg mr-2"
            placeholder="Enter an item name"
          />
          <button
            onClick={addToWishlist}
            className="py-3 px-6 bg-[#644f26] text-white font-medium rounded-lg hover:bg-[#8b6b3b] transition duration-300"
          >
            Add
          </button>
        </div>

        {/* Wishlist Items */}
        {wishlist.length > 0 ? (
          <ul className="space-y-4">
            {wishlist.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center p-3 bg-[#f9f9f9] rounded-lg shadow-sm"
              >
                <span className="text-lg text-gray-700">{item}</span>
                <button
                  onClick={() => removeFromWishlist(item)}
                  className="py-1 px-3 bg-red-500 text-white text-sm font-medium rounded-lg hover:bg-red-600 transition duration-300"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-600">Your wishlist is empty.</p>
        )}
      </div>
    </div>
  );
}

export default Wishlist;
