import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import one from "../assets/1.png";
import two from "../assets/2.png";
import three from "../assets/3.png";
import four from "../assets/4.png";
import five from "../assets/5.png";

function Banner() {
  // Use an array of image paths
  const sliderImages = [one, two, three, four, five];

  return (
    <div className="relative h-[500px] md:h-[600px]">
      {/* Swiper Slider */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="absolute top-0 left-0 w-full h-full opacity-50"
      >
        {sliderImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Banner Content */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white z-10">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-md font-serif">
          Welcome to <span className="text-[#FFD700]">BlossomTrends</span>
        </h1>
        <p className="mt-4 font-semibold text-lg md:text-xl drop-shadow-md font-sans">
        Let Your Style Blossom with the Latest Trends<br></br>
        Where Fashion Flourishes for Every Occasion
        </p>
        <button className="mt-6 px-6 py-3 bg-[#644f26] hover:bg-white text-white hover:text-[#644f26] text-lg font-semibold rounded-full shadow-md transition duration-300 ease-in-out">
          Shop Now
        </button>
      </div>
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-5"></div>
    </div>
  );
}

export default Banner;
