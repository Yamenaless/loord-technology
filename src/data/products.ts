export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    title: "Gaming Mechanical Keyboard RGB",
    description: "High-performance mechanical keyboard with RGB backlighting and premium switches.",
    price: 129.99,
    images: [
      "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1595044426077-d36d9236d54a?w=500&h=500&fit=crop"
    ],
    category: "Keyboards",
    inStock: true
  },
  {
    id: "2",
    title: "Wireless Gaming Mouse",
    description: "Precision wireless gaming mouse with customizable DPI and ergonomic design.",
    price: 79.99,
    images: [
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&h=500&fit=crop"
    ],
    category: "Mice",
    inStock: true
  },
  {
    id: "3",
    title: "Gaming Headset Pro",
    description: "Premium gaming headset with 7.1 surround sound and noise-canceling microphone.",
    price: 149.99,
    images: [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&h=500&fit=crop"
    ],
    category: "Headsets",
    inStock: true
  },
  {
    id: "4",
    title: "High-Performance Gaming PC",
    description: "Complete gaming desktop with RTX 4080, Intel i7, 32GB RAM, and 1TB NVMe SSD.",
    price: 2499.99,
    images: [
      "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=500&h=500&fit=crop"
    ],
    category: "Full PCs",
    inStock: true
  },
  {
    id: "5",
    title: "RGB Mouse Pad XL",
    description: "Extra-large RGB mouse pad with smooth surface and customizable lighting effects.",
    price: 39.99,
    images: [
      "https://images.unsplash.com/photo-1592840062661-1ba552621fdf?w=500&h=500&fit=crop"
    ],
    category: "Mouse Pads",
    inStock: true
  },
  {
    id: "6",
    title: "Studio Microphone USB",
    description: "Professional USB microphone for streaming and content creation.",
    price: 199.99,
    images: [
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=500&h=500&fit=crop"
    ],
    category: "Microphones",
    inStock: true
  },
  {
    id: "7",
    title: "Bluetooth Wireless Earbuds",
    description: "Premium wireless earbuds with active noise cancellation and long battery life.",
    price: 89.99,
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&h=500&fit=crop"
    ],
    category: "Bluetooth AirPods",
    inStock: true
  },
  {
    id: "8",
    title: "Graphics Card RTX 4070",
    description: "NVIDIA GeForce RTX 4070 graphics card with 12GB GDDR6X memory.",
    price: 599.99,
    images: [
      "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=500&h=500&fit=crop"
    ],
    category: "PC Parts",
    inStock: false
  }
];

export const categories = [
  "PC Parts",
  "Full PCs", 
  "Keyboards",
  "Mice",
  "Headsets",
  "Microphones",
  "Mouse Pads",
  "Bluetooth AirPods",
  "Apple AirPods"
];

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: "1",
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy for all products. Items must be in original condition with all packaging and accessories included."
  },
  {
    id: "2",
    question: "How long does shipping take?",
    answer: "Standard shipping takes 3-5 business days. Express shipping (1-2 days) and overnight shipping options are also available at checkout."
  },
  {
    id: "3",
    question: "Do you offer warranty on products?",
    answer: "Yes, all products come with manufacturer warranty. Additionally, we offer extended warranty options for most items at the time of purchase."
  },
  {
    id: "4",
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and buy now, pay later options."
  },
  {
    id: "5",
    question: "How can I track my order?",
    answer: "Once your order ships, you'll receive a tracking number via email. You can also track your order by logging into your account on our website."
  }
];

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export const reviews: Review[] = [
  {
    id: "1",
    name: "Alex Johnson",
    rating: 5,
    comment: "Amazing quality products and fast shipping! The gaming keyboard I ordered exceeded my expectations.",
    date: "2024-01-15"
  },
  {
    id: "2",
    name: "Sarah Chen",
    rating: 4,
    comment: "Great selection of PC parts. Customer service was very helpful when I had questions about compatibility.",
    date: "2024-01-10"
  },
  {
    id: "3",
    name: "Mike Rodriguez",
    rating: 5,
    comment: "Best prices I've found online for gaming gear. The RGB mouse pad is exactly what I was looking for!",
    date: "2024-01-08"
  },
  {
    id: "4",
    name: "Emily Davis",
    rating: 4,
    comment: "Ordered a complete gaming setup. Everything arrived perfectly packaged and works flawlessly.",
    date: "2024-01-05"
  }
];
