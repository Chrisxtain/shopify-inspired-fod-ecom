
import React, { useState } from 'react';
import { Product } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Star } from 'lucide-react';
import { toast } from 'sonner';

interface ReviewsProps {
  product: Product;
}

interface ReviewType {
  id: number;
  name: string;
  rating: number;
  date: string;
  comment: string;
}

// Mock reviews data for the product
const mockReviews: ReviewType[] = [
  {
    id: 1,
    name: "Alex Johnson",
    rating: 5,
    date: "2023-09-15",
    comment: "This product exceeded my expectations. The quality is excellent, and it arrived faster than expected. I would definitely purchase again!"
  },
  {
    id: 2,
    name: "Sarah Miller",
    rating: 4,
    date: "2023-08-22",
    comment: "Very good product overall. Durable and well-made. The only reason I'm giving 4 stars instead of 5 is that the color is slightly different from what was shown in the images."
  },
  {
    id: 3,
    name: "Michael Chen",
    rating: 5,
    date: "2023-10-05",
    comment: "Perfect for my needs! This is exactly what I was looking for, and the price is reasonable for the quality received."
  }
];

const ProductReviews: React.FC<ReviewsProps> = ({ product }) => {
  const [reviews, setReviews] = useState<ReviewType[]>(mockReviews);
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [hoveredStar, setHoveredStar] = useState(0);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !comment.trim()) {
      toast.error('Please fill in all fields');
      return;
    }
    
    const newReview = {
      id: reviews.length + 1,
      name,
      rating,
      date: new Date().toISOString().split('T')[0],
      comment,
    };
    
    setReviews([newReview, ...reviews]);
    setName('');
    setComment('');
    setRating(5);
    
    toast.success('Review submitted successfully!');
  };

  const renderStars = (rating: number, interactive = false) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type={interactive ? "button" : undefined}
            onClick={interactive ? () => setRating(star) : undefined}
            onMouseEnter={interactive ? () => setHoveredStar(star) : undefined}
            onMouseLeave={interactive ? () => setHoveredStar(0) : undefined}
            className={interactive ? "focus:outline-none" : undefined}
          >
            <Star
              className={`h-5 w-5 ${
                star <= (hoveredStar || rating)
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              }`}
              weight={star <= (hoveredStar || rating) ? "fill" : "regular"}
            />
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="mt-12 border-t pt-8">
      <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
      
      <div className="mb-8">
        <div className="flex items-center space-x-2">
          <div className="flex">
            {renderStars(product.rating)}
          </div>
          <span className="font-medium">{product.rating.toFixed(1)}/5</span>
          <span className="text-gray-500">({product.reviewCount} reviews)</span>
        </div>
      </div>
      
      <div className="border-t pt-6 pb-8">
        <h3 className="text-xl font-semibold mb-4">Write a Review</h3>
        <form onSubmit={handleSubmitReview} className="space-y-4">
          <div>
            <Label htmlFor="name">Your Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="rating">Rating</Label>
            <div className="mt-1">
              {renderStars(rating, true)}
            </div>
          </div>
          
          <div>
            <Label htmlFor="comment">Your Review</Label>
            <Textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Share your experience with this product"
              rows={4}
              required
            />
          </div>
          
          <Button type="submit" className="bg-store-teal hover:bg-blue-600">
            Submit Review
          </Button>
        </form>
      </div>
      
      <div className="space-y-6">
        <h3 className="text-xl font-semibold">Customer Reviews</h3>
        
        {reviews.length === 0 ? (
          <p className="text-gray-500">No reviews yet. Be the first to review this product!</p>
        ) : (
          reviews.map((review) => (
            <div key={review.id} className="border-b pb-4 mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold">{review.name}</span>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>
              <div className="flex items-center mb-2">
                {renderStars(review.rating)}
              </div>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductReviews;
