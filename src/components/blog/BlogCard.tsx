
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface BlogCardProps {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  author: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  slug,
  excerpt,
  image,
  date,
  category,
  author,
}) => {
  // Format the date to be more readable
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <Link to={`/blog/${slug}`} className="block overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform hover:scale-105"
        />
      </Link>
      <CardContent className="pt-6">
        <div className="flex justify-between items-center mb-2">
          <Badge variant="secondary">{category}</Badge>
          <span className="text-sm text-gray-500">{formattedDate}</span>
        </div>
        <Link to={`/blog/${slug}`} className="block group">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-store-teal transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 line-clamp-3">{excerpt}</p>
        </Link>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <div className="text-sm text-gray-500">
          By <span className="font-medium">{author}</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
