
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { getBlogPostBySlug, blogPosts } from '@/data/blog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = getBlogPostBySlug(slug || '');
  
  // Get random related posts
  const relatedPosts = blogPosts
    .filter(p => p.slug !== slug)
    .sort(() => 0.5 - Math.random())
    .slice(0, 2);
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [slug]);
  
  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
            <p className="mb-6">The article you are looking for does not exist.</p>
            <Button onClick={() => navigate('/blog')}>Return to Blog</Button>
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
        <div className="relative h-96 bg-gray-900">
          <img 
            src={post.image} 
            alt={post.title} 
            className="absolute inset-0 w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
            <div className="container mx-auto px-4 pb-12">
              <Badge className="mb-4">{post.category}</Badge>
              <h1 className="text-4xl font-bold text-white mb-4">{post.title}</h1>
              <div className="flex items-center text-white/80">
                <span>{post.author}</span>
                <span className="mx-2">•</span>
                <span>{new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Button 
                variant="outline" 
                className="mb-6"
                onClick={() => navigate('/blog')}
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
              </Button>
              
              <div 
                className="prose prose-slate max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              <div className="mt-12 pt-6 border-t">
                <h3 className="text-xl font-semibold mb-4">Share this article</h3>
                <div className="flex space-x-4">
                  {/* Social sharing buttons would go here */}
                  <Button variant="outline" size="sm">
                    Share on Facebook
                  </Button>
                  <Button variant="outline" size="sm">
                    Share on Twitter
                  </Button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1 space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {relatedPosts.map(relatedPost => (
                    <div key={relatedPost.id} className="border-b pb-4 last:border-b-0 last:pb-0">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-32 object-cover rounded-md mb-2"
                      />
                      <h4 className="font-medium hover:text-store-teal transition-colors">
                        <a href={`/blog/${relatedPost.slug}`}>{relatedPost.title}</a>
                      </h4>
                      <p className="text-sm text-gray-500 mt-1">
                        {new Date(relatedPost.date).toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-store-teal text-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
                <p className="mb-4 text-white/90">
                  Stay up to date with our latest articles and promotions.
                </p>
                <div className="space-y-2">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2 rounded border border-white/30 bg-transparent text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <Button className="w-full bg-white text-store-teal hover:bg-gray-100">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPostPage;
