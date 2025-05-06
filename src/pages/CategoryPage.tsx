
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductGrid from '@/components/products/ProductGrid';
import { getProductsByCategory, products } from '@/data/products';

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const categoryProducts = category === 'all' 
    ? products 
    : getProductsByCategory(category || '');

  // Function to get a friendly category name
  const getCategoryTitle = (slug: string): string => {
    switch(slug) {
      case 'pet': return 'Pet Supplies';
      case 'home-improvement': return 'Home Improvement';
      case 'fashion': return 'Fashion';
      case 'laundry': return 'Laundry';
      case 'travel': return 'Travel';
      case 'all': return 'All Products';
      default: return slug.charAt(0).toUpperCase() + slug.slice(1);
    }
  };

  const categoryTitle = getCategoryTitle(category || '');

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-store-navy">{categoryTitle}</h1>
            <p className="text-gray-600 mt-2">
              {categoryProducts.length} products found
            </p>
          </div>

          {categoryProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No products found in this category.</p>
            </div>
          ) : (
            <ProductGrid products={categoryProducts} />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;
