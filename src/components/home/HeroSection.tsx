
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const heroSlides = [
  {
    title: "Discover Quality Products for Every Need",
    description: "From pet essentials to home improvement, fashion to travel gear, find everything you need in one place with unbeatable prices and quality.",
    image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
    link: "/category/pet",
  },
  {
    title: "Transform Your Home with Our Collection",
    description: "Explore our curated selection of home improvement products designed to elevate your living space.",
    image: "https://images.unsplash.com/photo-1581166397057-235af2b3c6dd",
    link: "/category/home-improvement",
  },
  {
    title: "Travel in Style and Comfort",
    description: "Discover premium travel gear for your next adventure, from luggage to accessories.",
    image: "https://images.unsplash.com/photo-1553531384-397c80973a0b",
    link: "/category/travel",
  }
];

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-br from-store-navy to-blue-800 text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <Carousel className="relative">
          <CarouselContent>
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="flex flex-col lg:flex-row items-center">
                  <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-lg mb-6 text-gray-100">
                      {slide.description}
                    </p>
                    <div className="flex space-x-4">
                      <Button 
                        asChild
                        className="bg-store-teal hover:bg-blue-400 text-white font-semibold px-6 py-3 rounded-md"
                      >
                        <Link to={slide.link}>Shop Now</Link>
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
                  <div className="lg:w-1/2">
                    <img 
                      src={slide.image} 
                      alt="Hero image"
                      className="rounded-lg shadow-lg w-full object-cover h-80 lg:h-96 transform transition-transform hover:scale-105"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute inset-0 flex items-center justify-between pointer-events-none p-4">
            <CarouselPrevious className="relative pointer-events-auto left-0" />
            <CarouselNext className="relative pointer-events-auto right-0" />
          </div>
        </Carousel>
        
        <div className="flex justify-center mt-6 space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 w-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-store-teal" : "bg-white bg-opacity-30"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
