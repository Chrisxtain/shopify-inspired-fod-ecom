
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '@/context/CartContext';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="product-card group">
      <div className="relative overflow-hidden">
        <img 
          src={product.image}
          alt={product.name}
          className="product-image"
          loading="lazy"
        />
        {product.badge && (
          <Badge className="product-badge">{product.badge}</Badge>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-medium text-lg truncate">{product.name}</h3>
        <div className="flex items-center mt-1">
          <div className="flex items-center">
            <Star 
              className="h-4 w-4 fill-yellow-400 text-yellow-400" 
              weight="fill"
            />
            <span className="ml-1 text-sm font-medium">{product.rating}</span>
          </div>
          <span className="text-xs text-gray-500 ml-2">({product.reviewCount} reviews)</span>
        </div>
        <p className="product-price mt-2">${product.price.toFixed(2)}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
