
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-store-navy to-blue-800 text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Discover Quality Products for Every Need
            </h1>
            <p className="text-lg mb-6 text-gray-100">
              From pet essentials to home improvement, fashion to travel gear, 
              find everything you need in one place with unbeatable prices and quality.
            </p>
            <div className="flex space-x-4">
              <Button 
                asChild
                className="bg-store-teal hover:bg-blue-400 text-white font-semibold px-6 py-3 rounded-md"
              >
                <Link to="/category/pet">Shop Now</Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-store-navy font-semibold px-6 py-3 rounded-md transition-colors"
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1581166397057-235af2b3c6dd" 
                alt="Home improvement"
                className="rounded-lg shadow-lg h-48 w-full object-cover transform transition-transform hover:scale-105"
              />
              <img 
                src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1" 
                alt="Pet supplies"
                className="rounded-lg shadow-lg h-32 w-full object-cover transform transition-transform hover:scale-105" 
              />
            </div>
            <div className="space-y-4 mt-8">
              <img 
                src="https://images.unsplash.com/photo-1611312449408-fcece27cdbb7" 
                alt="Fashion items"
                className="rounded-lg shadow-lg h-32 w-full object-cover transform transition-transform hover:scale-105" 
              />
              <img 
                src="https://images.unsplash.com/photo-1553531384-397c80973a0b" 
                alt="Travel gear"
                className="rounded-lg shadow-lg h-48 w-full object-cover transform transition-transform hover:scale-105" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
