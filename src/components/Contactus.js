import React, { useState } from "react";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation (optional)
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill out all fields.");
      return;
    }

    // Simulate form submission
    console.log("Form Data Submitted:", formData);
    setFormSubmitted(true);

    // Clear the form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-[#644f26] text-center mb-8">
        Contact Us
      </h1>

      {formSubmitted && (
        <div className="text-green-600 text-center mb-6">
          Thank you! Your message has been sent successfully.
        </div>
      )}

      <div className="flex flex-col md:flex-row md:space-x-8">
        {/* Contact Form */}
        <div className="md:w-2/3 bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl text-[#644f26] font-semibold mb-4">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="5"
                placeholder="Write your message"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="md:w-1/3 mt-8 md:mt-0">
          <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
            <h2 className="text-2xl text-[#644f26] font-semibold mb-4">Contact Details</h2>
            <p className="text-gray-700">
              <span className="font-medium">Address:</span> 123 Street Name,
              City, State, ZIP Code
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Phone:</span> +123-456-7890
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Email:</span> support@blossomtrends.com
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Working Hours:</span> Mon-Fri, 9am
              - 5pm
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
