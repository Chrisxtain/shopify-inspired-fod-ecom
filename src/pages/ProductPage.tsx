
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { getProductById, getProductsByCategory } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Star, ShoppingCart, HeartIcon } from 'lucide-react';
import ProductGrid from '@/components/products/ProductGrid';
import ProductReviews from '@/components/products/ProductReviews';

// Mock product gallery images - in a real app, these would come from your backend
const mockGalleryImages = [
  "https://images.unsplash.com/photo-1560343090-f0409e92791a",
  "https://images.unsplash.com/photo-1552346154-21d32810aba3",
  "https://images.unsplash.com/photo-1556905055-8f358a7a47b2",
  "https://images.unsplash.com/photo-1583394838336-acd977736f90"
];

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(Number(id));
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [mainImage, setMainImage] = useState(product?.image || "");

  // Combine the product's main image with mock gallery images
  const galleryImages = product ? [product.image, ...mockGalleryImages.slice(0, 3)] : [];

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
    }
  };

  const handleBuyNow = () => {
    if (product) {
      addToCart(product, quantity);
      navigate('/cart');
    }
  };

  // Get related products (same category)
  const relatedProducts = product 
    ? getProductsByCategory(product.category).filter(p => p.id !== product.id).slice(0, 4)
    : [];

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
            <p className="mb-6">The product you are looking for does not exist.</p>
            <Button onClick={() => navigate('/')}>Return to Homepage</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image and Gallery */}
            <div className="space-y-4">
              <div className="relative">
                <img
                  src={mainImage}
                  alt={product.name}
                  className="w-full rounded-lg object-cover"
                  style={{ height: '500px' }}
                />
                {product.badge && (
                  <div className="absolute top-4 right-4 bg-store-teal text-white px-3 py-1 rounded-full text-sm font-medium">
                    {product.badge}
                  </div>
                )}
              </div>
              
              {/* Mini Gallery */}
              <div className="grid grid-cols-4 gap-2">
                {galleryImages.map((img, index) => (
                  <div 
                    key={index}
                    className={`cursor-pointer border-2 rounded-md overflow-hidden ${
                      mainImage === img ? 'border-store-teal' : 'border-transparent'
                    }`}
                    onClick={() => setMainImage(img)}
                  >
                    <img 
                      src={img} 
                      alt={`Product view ${index + 1}`} 
                      className="h-20 w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="flex flex-col justify-between h-full">
              {/* Top section: Product information */}
              <div>
                <h1 className="text-3xl font-bold text-store-navy mb-2">{product.name}</h1>

                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">
                    {product.rating.toFixed(1)} ({product.reviewCount} reviews)
                  </span>
                </div>

                <div className="prose prose-slate mb-6">
                  <p>{product.description}</p>
                </div>
              </div>

              {/* Bottom section: Price and actions */}
              <div className="mt-6">
                <div className="text-3xl font-bold text-store-navy mb-4">
                  ${product.price.toFixed(2)}
                </div>
                
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-24">
                    <label htmlFor="quantity" className="block text-sm font-medium mb-1">
                      Quantity
                    </label>
                    <Input
                      type="number"
                      id="quantity"
                      min="1"
                      value={quantity}
                      onChange={handleQuantityChange}
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={handleAddToCart}
                    className="flex-1 bg-store-teal hover:bg-blue-600 text-white"
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Add to Cart
                  </Button>
                  <Button 
                    onClick={handleBuyNow}
                    className="flex-1"
                    variant="secondary"
                  >
                    Buy Now
                  </Button>
                  <Button variant="outline" size="icon">
                    <HeartIcon className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Product Reviews */}
          <ProductReviews product={product} />

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <h2 className="section-title">You May Also Like</h2>
              <ProductGrid products={relatedProducts} />
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
