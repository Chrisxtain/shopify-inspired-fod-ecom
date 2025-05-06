
interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Ultimate Guide to Sustainable Pet Products",
    slug: "ultimate-guide-sustainable-pet-products",
    excerpt: "Discover eco-friendly pet products that are good for your pet and the environment.",
    content: `
      <p>As pet owners become more environmentally conscious, the demand for sustainable pet products continues to grow. This guide will help you navigate the world of eco-friendly pet supplies.</p>
      
      <h2>Why Choose Sustainable Pet Products?</h2>
      <p>Sustainable pet products are not only better for the environment but often healthier for your pets too. Many conventional pet products contain harmful chemicals and materials that can affect your pet's health over time.</p>
      
      <h2>Top Sustainable Pet Product Categories</h2>
      <ul>
        <li><strong>Food:</strong> Look for pet foods with sustainably sourced ingredients, minimal packaging, and ethical manufacturing practices.</li>
        <li><strong>Toys:</strong> Choose toys made from natural materials like hemp, organic cotton, or reclaimed wood.</li>
        <li><strong>Beds:</strong> Opt for beds filled with recycled materials and covered in organic fabrics.</li>
        <li><strong>Grooming Products:</strong> Select shampoos and conditioners with biodegradable ingredients and minimal packaging.</li>
      </ul>
      
      <h2>Our Top Picks</h2>
      <p>After testing dozens of sustainable pet products, we've identified several standouts in each category. Our top recommendation for dog toys is the Hemp Rope Collection, which is durable, biodegradable, and made without toxic dyes.</p>
      
      <h2>Making the Switch</h2>
      <p>Transitioning to sustainable pet products doesn't have to happen overnight. Start by replacing items as they wear out, and gradually build a more eco-friendly collection of pet supplies.</p>
      
      <p>Remember that the most sustainable choice is often to use what you already have until it's worn out. When it's time to replace something, that's the perfect opportunity to make a more environmentally friendly choice.</p>
    `,
    image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
    author: "Emma Wilson",
    date: "2023-10-15",
    category: "Pet Care"
  },
  {
    id: 2,
    title: "10 Home Improvement Projects You Can Complete in a Weekend",
    slug: "home-improvement-weekend-projects",
    excerpt: "Transform your living space with these quick and impactful home improvement projects.",
    content: `
      <p>You don't need weeks or months to make significant improvements to your home. Here are ten projects you can tackle in a single weekend for maximum impact with minimal time investment.</p>
      
      <h2>1. Paint an Accent Wall</h2>
      <p>A fresh coat of paint on a single wall can transform a room. Choose a bold color to create a focal point or use a stencil for a patterned effect.</p>
      
      <h2>2. Update Cabinet Hardware</h2>
      <p>Replacing knobs and handles on kitchen or bathroom cabinets is a simple way to refresh the space. This project typically takes just a few hours.</p>
      
      <h2>3. Install Floating Shelves</h2>
      <p>Add both style and storage to any room with floating shelves. They're relatively easy to install and can dramatically change the look of a wall.</p>
      
      <h2>4. Create a Gallery Wall</h2>
      <p>Gather your favorite photos and artwork to create a personalized gallery wall. Plan the layout before you start hanging for best results.</p>
      
      <h2>5. Refresh Grout</h2>
      <p>Cleaning or recoloring grout in your bathroom or kitchen can make tile look new again. This tedious but straightforward project delivers impressive results.</p>
      
      <h2>6. Install Under-Cabinet Lighting</h2>
      <p>Add ambiance and functionality to your kitchen with stick-on LED lights under your cabinets. Many options don't even require wiring.</p>
      
      <h2>7. Build a Fire Pit</h2>
      <p>Create an outdoor gathering spot by building a simple fire pit in your backyard. Pre-made kits make this project especially easy.</p>
      
      <h2>8. Power Wash Exterior Surfaces</h2>
      <p>Rent a power washer for a day to clean your driveway, deck, patio furniture, and siding. You'll be amazed at the difference.</p>
      
      <h2>9. Create a Mudroom Drop Zone</h2>
      <p>Install hooks, a small bench, and perhaps some baskets near your entryway to create an organized space for shoes, bags, and outerwear.</p>
      
      <h2>10. Upgrade Your Bathroom Fixtures</h2>
      <p>Replace your showerhead, faucet, and toilet handle to give your bathroom an updated look without a full renovation.</p>
      
      <p>Remember to gather all necessary supplies before you begin any of these projects, and don't hesitate to ask for help when needed. With proper planning, you can successfully complete any of these transformations in just one weekend.</p>
    `,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    author: "Marcus Johnson",
    date: "2023-11-22",
    category: "Home Improvement"
  },
  {
    id: 3,
    title: "Fashion Forward: Sustainable Style Trends for 2023",
    slug: "sustainable-fashion-trends-2023",
    excerpt: "Discover the latest eco-friendly fashion trends that don't compromise on style.",
    content: `
      <p>The fashion industry is evolving rapidly as consumers demand more sustainable and ethical practices. Here's our guide to the top sustainable fashion trends for 2023 that prove style and sustainability can go hand in hand.</p>
      
      <h2>1. Circular Fashion Takes Center Stage</h2>
      <p>Circular fashion—designing clothes with their eventual recycling or biodegradation in mind—has moved from the fringes to the mainstream. Major brands are now embracing closed-loop systems that minimize waste and maximize the lifecycle of materials.</p>
      
      <h2>2. Regenerative Agriculture in Textiles</h2>
      <p>Beyond organic, regenerative farming practices that actually improve soil health and biodiversity are being applied to cotton, hemp, and other natural fibers. These textiles not only reduce environmental harm but actively contribute to ecosystem restoration.</p>
      
      <h2>3. Innovative Alternative Materials</h2>
      <p>From cactus leather to pineapple fiber fabrics, innovative plant-based alternatives to conventional materials are gaining traction. These materials typically use less water and fewer chemicals than their traditional counterparts.</p>
      
      <h2>4. Rental and Subscription Services</h2>
      <p>The "access over ownership" model continues to grow in popularity. Fashion rental services allow consumers to refresh their wardrobes without contributing to fast fashion consumption patterns.</p>
      
      <h2>5. Blockchain Transparency</h2>
      <p>Blockchain technology is being used to create verifiable supply chain transparency, allowing consumers to confirm the ethical and environmental claims of their clothing purchases.</p>
      
      <h2>6. Gender-Fluid Design</h2>
      <p>Sustainable fashion brands are increasingly embracing gender-fluid design principles that extend the wearability and versatility of garments across traditional gender boundaries.</p>
      
      <h2>7. Traditional Craftsmanship Revival</h2>
      <p>Ancient textile techniques like natural dyeing, hand weaving, and embroidery are experiencing a revival as consumers appreciate their lower environmental impact and the preservation of cultural heritage.</p>
      
      <h2>How to Embrace These Trends Responsibly</h2>
      <p>While these trends offer exciting ways to evolve your wardrobe, remember that the most sustainable garment is the one already in your closet. Consider how to incorporate these trends by repurposing what you own, buying secondhand, or making very selective new purchases from truly sustainable brands.</p>
    `,
    image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475",
    author: "Sophia Chen",
    date: "2023-12-04",
    category: "Fashion"
  },
  {
    id: 4,
    title: "Essential Travel Gear for Eco-Conscious Adventurers",
    slug: "eco-friendly-travel-gear",
    excerpt: "Pack smarter and lighter with these sustainable travel essentials.",
    content: `
      <p>Traveling responsibly means considering both your impact on the destinations you visit and the environmental footprint of your gear. Here's our curated list of essential travel items that are both practical and eco-friendly.</p>
      
      <h2>Sustainable Luggage Options</h2>
      <p>Several companies now make durable luggage from recycled materials such as ocean plastic or recycled polyester. Look for brands that offer repair services to extend the life of your luggage.</p>
      
      <h2>Water Purification Solutions</h2>
      <p>Reduce plastic waste by bringing a portable water purifier or purification tablets. Modern options like UV purifiers are lightweight and can make most water sources safe to drink.</p>
      
      <h2>Solar-Powered Electronics</h2>
      <p>Portable solar chargers have become increasingly efficient and lightweight. They're particularly valuable for longer trips or visits to areas with unreliable electricity.</p>
      
      <h2>Plastic-Free Toiletries</h2>
      <p>Solid shampoo bars, conditioner bars, and toothpaste tablets eliminate the need for plastic bottles and last longer than their liquid counterparts, making them ideal for extended travel.</p>
      
      <h2>Multi-Purpose Clothing</h2>
      <p>Invest in high-quality, versatile garments made from sustainable materials. Items that can be worn multiple ways or in different climates allow you to pack less.</p>
      
      <h2>Reusable Food Storage</h2>
      <p>Collapsible silicone containers and beeswax wraps are perfect for storing snacks or leftovers without creating waste.</p>
      
      <h2>Ethical Documentation Tools</h2>
      <p>If you're purchasing a new camera or other documentation tools for your travels, research companies with strong environmental and labor practices.</p>
      
      <h2>Offsetting What You Can't Eliminate</h2>
      <p>While reducing your impact is always preferable, consider purchasing high-quality carbon offsets for unavoidable emissions from your journey.</p>
      
      <p>Remember that sustainability is a journey, not a destination. You don't need to replace everything at once—prioritize items that will make the biggest difference for your typical travel style.</p>
    `,
    image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23",
    author: "Alex Rivera",
    date: "2023-10-29",
    category: "Travel"
  }
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};
