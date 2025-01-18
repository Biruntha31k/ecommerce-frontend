import React from 'react';

function AboutUs() {
  return (
    <section className="bg-[#f3f3f3] py-12">
      <div className="container mx-auto px-6 lg:px-16 text-center">
        <h3 className="text-3xl font-semibold text-[#644f26] mb-6">About Us</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          <span className='font-bold text-[#644f26]'>BlossomTrends</span> is a fashion-forward women’s clothing brand dedicated to helping you express your unique style. We offer a curated collection of trendy, high-quality apparel that seamlessly blends comfort and elegance. Whether you're looking for chic casual wear or sophisticated evening outfits, our pieces are designed to make you feel confident and beautiful. 
          <br />
          <br />
          At <span className='font-bold text-[#644f26]'>BlossomTrends</span>, we believe fashion should evolve with you, blossoming with every new season. Join us and step into a world where style, grace, and individuality come together effortlessly.
        </p>
      </div>
    </section>
  );
}

export default AboutUs;
