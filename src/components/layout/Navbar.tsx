
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/context/CartContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useCart();
  
  const categories = [
    { name: 'Pet', path: '/category/pet' },
    { name: 'Home Improvement', path: '/category/home-improvement' },
    { name: 'Fashion', path: '/category/fashion' },
    { name: 'Laundry', path: '/category/laundry' },
    { name: 'Travel', path: '/category/travel' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-white border-b sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-store-navy">
              FOD-ECOM-MVP
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-store-navy hover:text-store-teal transition-colors">
              Home
            </Link>
            <div className="relative group">
              <button className="text-store-navy hover:text-store-teal transition-colors">
                Categories
              </button>
              <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                {categories.map((category) => (
                  <Link
                    key={category.name}
                    to={category.path}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link to="/blog" className="text-store-navy hover:text-store-teal transition-colors">
              Blog
            </Link>
            <Link to="/about" className="text-store-navy hover:text-store-teal transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="text-store-navy hover:text-store-teal transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
              </Button>
              {totalItems > 0 && (
                <Badge className="absolute -top-1 -right-1 bg-store-teal text-white">
                  {totalItems}
                </Badge>
              )}
            </Link>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={toggleMenu}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 md:hidden">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <Link to="/" className="text-2xl font-bold text-store-navy">
                FOD-ECOM-MVP
              </Link>
              <Button variant="ghost" size="icon" onClick={toggleMenu}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            <nav className="flex flex-col space-y-4 mt-8">
              <Link 
                to="/" 
                className="text-store-navy text-lg py-2 border-b"
                onClick={toggleMenu}
              >
                Home
              </Link>
              {categories.map((category) => (
                <Link
                  key={category.name}
                  to={category.path}
                  className="text-store-navy text-lg py-2 border-b"
                  onClick={toggleMenu}
                >
                  {category.name}
                </Link>
              ))}
              <Link 
                to="/blog" 
                className="text-store-navy text-lg py-2 border-b"
                onClick={toggleMenu}
              >
                Blog
              </Link>
              <Link 
                to="/about" 
                className="text-store-navy text-lg py-2 border-b"
                onClick={toggleMenu}
              >
                About Us
              </Link>
              <Link 
                to="/contact" 
                className="text-store-navy text-lg py-2 border-b"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
