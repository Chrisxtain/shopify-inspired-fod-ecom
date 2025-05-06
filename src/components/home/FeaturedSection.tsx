
import React from 'react';
import { Link } from 'react-router-dom';
import ProductGrid from '../products/ProductGrid';
import { getFeaturedProducts } from '@/data/products';
import { Button } from '@/components/ui/button';

const FeaturedSection: React.FC = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-store-navy">Featured Products</h2>
          <Button asChild variant="outline" className="border-store-teal text-store-teal hover:bg-store-teal hover:text-white">
            <Link to="/category/all">View All Products</Link>
          </Button>
        </div>

        <ProductGrid products={featuredProducts} />
      </div>
    </div>
  );
};

export default FeaturedSection;
