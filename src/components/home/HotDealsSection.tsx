
import React from 'react';
import { Link } from 'react-router-dom';
import ProductGrid from '../products/ProductGrid';
import { getHotProducts } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Clock } from 'lucide-react';

const HotDealsSection: React.FC = () => {
  const hotProducts = getHotProducts();

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <Clock className="mr-2 text-red-500" size={24} />
            <h2 className="text-3xl font-bold text-store-navy">Limited Time Offers</h2>
          </div>
          <Button asChild variant="outline" className="border-store-teal text-store-teal hover:bg-store-teal hover:text-white">
            <Link to="/category/all">View All Products</Link>
          </Button>
        </div>

        <ProductGrid products={hotProducts} />
      </div>
    </div>
  );
};

export default HotDealsSection;
