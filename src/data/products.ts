
import { Product } from '@/context/CartContext';

// Product database
export const products: Product[] = [
  // Pet Category
  {
    id: 1,
    name: "Premium Pet Carrier",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
    category: "pet",
    description: "A comfortable and stylish carrier for your beloved pet, suitable for small to medium-sized animals. Features breathable mesh panels, padded interior, and secure closures.",
    rating: 4.7,
    reviewCount: 128,
    badge: "Popular"
  },
  {
    id: 2, 
    name: "Automatic Pet Feeder",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    category: "pet",
    description: "Never miss a feeding time with this programmable pet feeder. Schedule up to 5 meals per day. Compatible with dry food only.",
    rating: 4.5,
    reviewCount: 95
  },
  {
    id: 3,
    name: "Orthopedic Pet Bed",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd",
    category: "pet",
    description: "Memory foam pet bed that provides exceptional support for pets with arthritis or joint pain. Machine washable cover with non-slip bottom.",
    rating: 4.8,
    reviewCount: 213
  },
  {
    id: 4,
    name: "Interactive Cat Toy",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13",
    category: "pet",
    description: "Keep your cat entertained for hours with this interactive toy that stimulates their hunting instincts. Battery-powered with adjustable speed settings.",
    rating: 4.2,
    reviewCount: 67
  },
  {
    id: 5,
    name: "Dog Training Treats",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1602084475355-c7b1a71b8796",
    category: "pet",
    description: "All-natural, grain-free training treats perfect for positive reinforcement. Small size ideal for training sessions.",
    rating: 4.6,
    reviewCount: 89
  },
  {
    id: 6,
    name: "Pet Grooming Kit",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1559941727-6fb446e7e8ae",
    category: "pet",
    description: "Complete grooming kit including clippers, scissors, nail file, and comb. Suitable for cats and dogs of all sizes.",
    rating: 4.4,
    reviewCount: 76
  },
  {
    id: 7,
    name: "Pet GPS Tracker",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd",
    category: "pet",
    description: "Real-time GPS tracking for your pet with geofence alerts. Long-lasting battery and waterproof design.",
    rating: 4.9,
    reviewCount: 152,
    badge: "New"
  },
  {
    id: 8,
    name: "Adjustable Pet Harness",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a",
    category: "pet",
    description: "No-pull harness with adjustable straps for a perfect fit. Reflective stitching for nighttime visibility and safety.",
    rating: 4.3,
    reviewCount: 118
  },
  
  // Home Improvement Category
  {
    id: 9,
    name: "Cordless Power Drill",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1540207605711-9d855779cd98",
    category: "home-improvement",
    description: "Powerful 20V cordless drill with variable speed settings. Includes 2 batteries, charger, and 10-piece drill bit set.",
    rating: 4.7,
    reviewCount: 245
  },
  {
    id: 10,
    name: "Smart Thermostat",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1610496066233-48d5e397d86c",
    category: "home-improvement",
    description: "WiFi-enabled thermostat that learns your preferences. Control from anywhere using your smartphone.",
    rating: 4.8,
    reviewCount: 189,
    badge: "Limited"
  },
  {
    id: 11,
    name: "Indoor Security Camera",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1558001005-2d7e803baa7c",
    category: "home-improvement",
    description: "HD indoor security camera with motion detection and two-way audio. Connects to your home WiFi for remote monitoring.",
    rating: 4.5,
    reviewCount: 132
  },
  {
    id: 12,
    name: "LED Light Bulbs (4-Pack)",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1575908539614-ff89490f4a78",
    category: "home-improvement",
    description: "Energy-efficient LED bulbs that last up to 15,000 hours. Soft white light equivalent to 60W traditional bulbs.",
    rating: 4.6,
    reviewCount: 98
  },
  {
    id: 13,
    name: "Tool Organizer Wall Panel",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1581166397057-235af2b3c6dd",
    category: "home-improvement",
    description: "Modular wall panel system for organizing tools and accessories. Includes hooks, shelves, and bins.",
    rating: 4.4,
    reviewCount: 75
  },
  {
    id: 14,
    name: "Smart Door Lock",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1595750223148-27384ca30e61",
    category: "home-improvement",
    description: "Keyless entry system with fingerprint, code, and app access. Compatible with most standard door sizes.",
    rating: 4.7,
    reviewCount: 164
  },
  {
    id: 15,
    name: "Interior Paint (1 Gallon)",
    price: 32.99,
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f",
    category: "home-improvement",
    description: "Low-VOC interior paint with built-in primer. One-coat coverage for most applications.",
    rating: 4.3,
    reviewCount: 112
  },
  {
    id: 16,
    name: "Adjustable Wrench Set",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1426927308491-6380b6a9936f",
    category: "home-improvement",
    description: "Set of 3 adjustable wrenches in different sizes. Chrome vanadium steel construction with comfortable grip handles.",
    rating: 4.5,
    reviewCount: 88
  },
  
  // Fashion Category
  {
    id: 17,
    name: "Classic Denim Jacket",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7",
    category: "fashion",
    description: "Versatile denim jacket that pairs with any outfit. Features button closures and multiple pockets.",
    rating: 4.6,
    reviewCount: 175,
    badge: "Bestseller"
  },
  {
    id: 18,
    name: "Leather Crossbody Bag",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1591561954555-607968c989ab",
    category: "fashion",
    description: "Genuine leather crossbody bag with adjustable strap. Multiple compartments for organization.",
    rating: 4.7,
    reviewCount: 143
  },
  {
    id: 19,
    name: "Knit Sweater",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27",
    category: "fashion",
    description: "Soft, medium-weight knit sweater perfect for layering. Available in multiple colors.",
    rating: 4.4,
    reviewCount: 98
  },
  {
    id: 20,
    name: "Canvas Sneakers",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
    category: "fashion",
    description: "Casual canvas sneakers with rubber sole. Comfortable for all-day wear.",
    rating: 4.5,
    reviewCount: 210
  },
  {
    id: 21,
    name: "Silk Scarf",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d",
    category: "fashion",
    description: "Luxurious silk scarf with elegant print. Perfect accessory for any outfit.",
    rating: 4.7,
    reviewCount: 67
  },
  {
    id: 22,
    name: "Wool Fedora Hat",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a",
    category: "fashion",
    description: "Classic wool fedora hat with decorative band. One size fits most.",
    rating: 4.2,
    reviewCount: 45
  },
  {
    id: 23,
    name: "Gold-Plated Hoop Earrings",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59",
    category: "fashion",
    description: "Medium-sized gold-plated hoop earrings. Hypoallergenic and suitable for sensitive ears.",
    rating: 4.6,
    reviewCount: 89,
    badge: "Sale"
  },
  {
    id: 24,
    name: "Leather Belt",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c4a45",
    category: "fashion",
    description: "Genuine leather belt with classic buckle. Available in black and brown.",
    rating: 4.4,
    reviewCount: 76
  },
  
  // Laundry Category
  {
    id: 25,
    name: "Eco-friendly Laundry Detergent",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce",
    category: "laundry",
    description: "Plant-based, hypoallergenic laundry detergent. Safe for sensitive skin and the environment.",
    rating: 4.6,
    reviewCount: 156
  },
  {
    id: 26,
    name: "Collapsible Laundry Basket",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1610557892108-47643bed2fbc",
    category: "laundry",
    description: "Space-saving laundry basket that collapses flat when not in use. Durable and lightweight.",
    rating: 4.3,
    reviewCount: 83
  },
  {
    id: 27,
    name: "Wool Dryer Balls (Set of 6)",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1620665316284-0fb53fb7e8f8",
    category: "laundry",
    description: "Reusable wool dryer balls that reduce drying time and static. Natural alternative to dryer sheets.",
    rating: 4.7,
    reviewCount: 129,
    badge: "Eco"
  },
  {
    id: 28,
    name: "Stain Remover Stick",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1615713170963-2595d996c75a",
    category: "laundry",
    description: "Effective stain remover for pre-treating clothes before washing. Works on most common stains.",
    rating: 4.5,
    reviewCount: 94
  },
  {
    id: 29,
    name: "Hanging Clothes Drying Rack",
    price: 32.99,
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1",
    category: "laundry",
    description: "Space-efficient hanging clothes rack that attaches to door or shower rod. Perfect for delicates and small spaces.",
    rating: 4.4,
    reviewCount: 67
  },
  {
    id: 30,
    name: "Mesh Laundry Bags (Set of 5)",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1585268674523-95a76975385e",
    category: "laundry",
    description: "Different sized mesh bags for protecting delicates in the washing machine. Zippered closure.",
    rating: 4.6,
    reviewCount: 118
  },
  {
    id: 31,
    name: "Folding Board",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1584441405886-bc91be61e56a",
    category: "laundry",
    description: "Adjustable folding board for perfectly folded clothes every time. Save space in drawers and closets.",
    rating: 4.3,
    reviewCount: 75
  },
  {
    id: 32,
    name: "Lint Roller (3-Pack)",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1587302186428-d82c7bd3ad6d",
    category: "laundry",
    description: "Set of 3 lint rollers with 60 sheets each. Perfect for removing pet hair, lint, and dust from clothing.",
    rating: 4.2,
    reviewCount: 54
  },
  
  // Travel Category
  {
    id: 33,
    name: "Hardshell Carry-On Luggage",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1553531384-397c80973a0b",
    category: "travel",
    description: "Durable hardshell carry-on that meets most airline size restrictions. Features spinner wheels and TSA-approved lock.",
    rating: 4.8,
    reviewCount: 234,
    badge: "Top Rated"
  },
  {
    id: 34,
    name: "Travel Neck Pillow",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1520902220584-df5e26fea7dc",
    category: "travel",
    description: "Memory foam neck pillow for comfortable rest while traveling. Removable, washable cover.",
    rating: 4.5,
    reviewCount: 178
  },
  {
    id: 35,
    name: "Packing Cubes (Set of 6)",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1581553680321-4fffae59fccd",
    category: "travel",
    description: "Lightweight packing cubes in various sizes for organized packing. Water-resistant material.",
    rating: 4.7,
    reviewCount: 156
  },
  {
    id: 36,
    name: "Universal Travel Adapter",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c",
    category: "travel",
    description: "All-in-one travel adapter compatible with outlets in over 150 countries. Includes USB ports.",
    rating: 4.6,
    reviewCount: 142
  },
  {
    id: 37,
    name: "Travel Toiletry Bag",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1540527953903-782cbaa52f0c",
    category: "travel",
    description: "Water-resistant toiletry bag with multiple compartments. Hanging hook for convenience.",
    rating: 4.4,
    reviewCount: 97
  },
  {
    id: 38,
    name: "Portable Luggage Scale",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1502301197179-65228ab57f78",
    category: "travel",
    description: "Compact digital luggage scale to avoid overweight baggage fees. Measures up to 110 pounds (50 kg).",
    rating: 4.3,
    reviewCount: 85
  },
  {
    id: 39,
    name: "Packable Daypack",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1517017544237-9fce15511adf",
    category: "travel",
    description: "Lightweight backpack that folds into a small pouch when not in use. Perfect for day trips during travel.",
    rating: 4.5,
    reviewCount: 113,
    badge: "Versatile"
  },
  {
    id: 40,
    name: "Travel Document Organizer",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1517588632672-9758d6acba04",
    category: "travel",
    description: "RFID-blocking passport wallet and document organizer. Multiple pockets for cards, tickets, and currency.",
    rating: 4.6,
    reviewCount: 79
  },
];

// Find products by category
export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

// Find a product by ID
export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

// Get featured products (those with the highest rating or with specific badges)
export const getFeaturedProducts = (): Product[] => {
  // Logic to define featured products (e.g., products with highest ratings, or with specific badges)
  return products.filter(product => product.badge === "Popular" || product.badge === "Bestseller" || product.badge === "Top Rated").slice(0, 4);
};

// Get limited or new products
export const getHotProducts = (): Product[] => {
  return products.filter(product => product.badge === "New" || product.badge === "Limited" || product.badge === "Sale").slice(0, 4);
};
