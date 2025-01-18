import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function ProductDetails({ products }) {
  const { id } = useParams(); // Get the product ID from the URL
  const navigate = useNavigate();

  const product = products.find(product => product.id === parseInt(id));

  if (!product) {
    return <div className="container mx-auto py-16 text-red-500">Product not found.</div>;
  }

  const addToCart = (product) => {
    // Store the product in localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));

    // Redirect to Cart page
    navigate('/cart');
  };

  return (
    <div className="container mx-auto py-16 px-4 flex flex-col items-center text-center bg-white shadow-lg rounded-lg">
      <img
        src={product.image}
        alt={product.name}
        className="w-80 h-80 object-contain rounded-md mb-6 transform transition duration-300 hover:scale-105"
      />
      <h1 className="text-4xl font-bold text-gray-800 mb-4 hover:text-[#644f26] transition-colors duration-300">
        {product.name}
      </h1>
      <p className="text-gray-600 text-lg leading-relaxed mb-4">
        {product.description || "No description available"}
      </p>
      <p className="text-2xl font-semibold text-[#644f26] mb-6">
        Rs. {product.price}
      </p>
      <button 
        onClick={() => addToCart(product)} 
        className="px-8 py-3 bg-[#644f26] text-white font-medium rounded-md shadow-md hover:bg-opacity-90 transform transition duration-300 hover:scale-105"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetails;
