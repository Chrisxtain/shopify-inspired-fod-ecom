
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BlogCard from '@/components/blog/BlogCard';
import { blogPosts } from '@/data/blog';

const BlogPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-store-navy text-white py-12 mb-8">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
            <p className="text-xl opacity-90 max-w-2xl">
              Discover tips, guides, and insights about our products and how to make the most of them.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard
                key={post.id}
                id={post.id}
                title={post.title}
                slug={post.slug}
                excerpt={post.excerpt}
                image={post.image}
                date={post.date}
                category={post.category}
                author={post.author}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
