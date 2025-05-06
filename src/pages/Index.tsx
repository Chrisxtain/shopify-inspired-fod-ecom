
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import FeaturedSection from '@/components/home/FeaturedSection';
import HotDealsSection from '@/components/home/HotDealsSection';
import CategoriesSection from '@/components/home/CategoriesSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturedSection />
        <CategoriesSection />
        <HotDealsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
