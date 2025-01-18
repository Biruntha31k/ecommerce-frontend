import React from 'react';

function Checkout() {
  return (
    <div className="container mx-auto py-16">
      <h2 className="text-3xl font-bold mb-8">Checkout</h2>
      <form className="grid grid-cols-1 gap-6 max-w-lg">
        <input
          type="text"
          placeholder="Full Name"
          className="border p-2 rounded-lg w-full"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="border p-2 rounded-lg w-full"
        />
        <input
          type="text"
          placeholder="Shipping Address"
          className="border p-2 rounded-lg w-full"
        />
        <button className="bg-blue-500 text-white py-2 rounded-lg">Place Order</button>
      </form>
    </div>
  );
}

export default Checkout;