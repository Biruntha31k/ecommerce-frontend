import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {

  const navigate = useNavigate();  // Initialize useNavigate

  const handleLoginClick = () => {
    navigate('/login');  // Navigate to login page when the button is clicked
  };

  return (
    <section className="bg-[#f3f3f3] min-h-screen">
      {/* Banner */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-[#644f26] z-10">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-md font-serif">
          Welcome to <span className="text-[#FFD700]">BlossomTrends</span>
        </h1>
        <p className="mt-4 font-semibold text-lg md:text-xl drop-shadow-md font-sans">
        Let Your Style Blossom with the Latest Trends<br></br>
        Where Fashion Flourishes for Every Occasion
        </p>
        <button
              onClick={handleLoginClick}
              className="mt-6 px-6 py-3 bg-[#644f26] hover:bg-white text-white hover:text-[#644f26] text-lg font-semibold rounded-full shadow-md transition duration-300 ease-in-out"
            >
              Login
            </button>
      </div>

      
    </section>
  );
}

export default HomePage;
