import React, { useState, useEffect } from "react";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = cart.map((item) => ({
      ...item,
      price: item.price || 0,
      quantity: item.quantity || 1,
    }));
    setCartItems(updatedCart);
  }, []);

  const handleIncreaseQuantity = (id) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleDecreaseQuantity = (id) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleDeleteItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-extrabold mb-6 text-[#644f26]">
        Your Shopping Cart
      </h2>

      {cartItems.length === 0 ? (
        <p className="text-lg text-gray-500">Your cart is currently empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b py-4 space-y-4"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-contain rounded-md"
                />
                <div>
                  <p className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    Rs. {item.price} x {item.quantity}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
              <button
                  onClick={() => handleDecreaseQuantity(item.id)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition"
                >
                  -1
                </button>
                <button
                  onClick={() => handleIncreaseQuantity(item.id)}
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
                >
                  +1
                </button>
                
                <button
                  onClick={() => handleDeleteItem(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
              <p className="text-lg font-medium text-gray-700">
                Rs. {item.price * item.quantity}
              </p>
            </div>
          ))}

          <div className="flex justify-between items-center mt-8 border-t pt-4">
            <p className="text-2xl font-bold text-[#644f26]">Total</p>
            <p className="text-2xl font-bold text-[#644f26]">Rs. {total}</p>
          </div>
        </div>
      )}

      {/* Payment Options */}
      <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Payment Options
        </h3>
        <div className="flex items-center">
          <input
            type="radio"
            id="cod"
            name="payment"
            value="cashOnDelivery"
            checked
            disabled
            className="mr-2"
          />
          <label htmlFor="cod" className="text-gray-700">
            Cash on Delivery (Only Available)
          </label>
        </div>
      </div>

      {/* Place Order Button */}
      <button
        onClick={() => {
          alert("Order placed successfully!");
          localStorage.removeItem("cart");
          setCartItems([]);
        }}
        disabled={cartItems.length === 0}
        className="mt-8 w-full bg-blue-500 text-white py-3 rounded-lg text-lg font-bold hover:bg-blue-600 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        Place Order
      </button>
    </div>
  );
}

export default Cart;
