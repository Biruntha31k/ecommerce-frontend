import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { id: 1, name: 'Ethnic Wear', image: 'https://tse3.mm.bing.net/th?id=OIP.lII0AlB7k7kyl1LFr3RqQQHaJ4&w=1080&h=1440&rs=1&pid=ImgDetMain', link: '/category/ethnic-wear' },
  { id: 2, name: 'Saree', image: 'https://th.bing.com/th/id/OIP.c0VV0LC-VwNvGhpKb_dFVgHaJ6?w=202&h=270&c=7&r=0&o=5&dpr=1.5&pid=1.7', link: '/category/saree' },
  { id: 3, name: 'Work Wear', image: 'https://th.bing.com/th/id/OIP.EshxKWtEPts00I5e0tNDuQHaLH?w=202&h=304&c=7&r=0&o=5&dpr=1.5&pid=1.7', link: '/category/work-wear' },
  { id: 4, name: 'Party Wear', image: 'https://th.bing.com/th/id/OIP.97IfAiK3uhJWXhD3QPxD-QHaHa?w=202&h=202&c=7&r=0&o=5&dpr=1.5&pid=1.7', link: '/category/party-wear' },
];

function ShopByCategory() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-[#644f26]">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Link
              to={category.link}
              key={category.id}
              className="group relative block rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-64 object-cover group-hover:opacity-90 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-2xl font-semibold tracking-wide">
                  {category.name}
                </span>
              </div>
              <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow-lg">
                <span className="text-[#644f26] font-bold">{category.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ShopByCategory;
