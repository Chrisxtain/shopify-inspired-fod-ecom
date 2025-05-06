
import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Pet',
    description: 'Everything for your furry friends',
    image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1',
    link: '/category/pet'
  },
  {
    name: 'Home Improvement',
    description: 'Tools and supplies for any project',
    image: 'https://images.unsplash.com/photo-1581166397057-235af2b3c6dd',
    link: '/category/home-improvement'
  },
  {
    name: 'Fashion',
    description: 'Stay stylish with our collection',
    image: 'https://images.unsplash.com/photo-1611312449408-fcece27cdbb7',
    link: '/category/fashion'
  },
  {
    name: 'Laundry',
    description: 'Products for cleaner clothes',
    image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce',
    link: '/category/laundry'
  },
  {
    name: 'Travel',
    description: 'Gear for your next adventure',
    image: 'https://images.unsplash.com/photo-1553531384-397c80973a0b',
    link: '/category/travel'
  }
];

const CategoriesSection: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-store-navy mb-8">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={category.link}
              className="group relative overflow-hidden rounded-lg h-64 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 text-white">
                <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                <p className="text-sm opacity-90">{category.description}</p>
                <span className="mt-2 inline-block text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Shop Now →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
