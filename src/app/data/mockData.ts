// Mock data for the agriculture app

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  nurseryId: string;
  nurseryName: string;
  image: string;
  description: string;
  stock: number;
  location: string;
  district: string;
}

export interface Nursery {
  id: string;
  name: string;
  location: string;
  district: string;
  image: string;
  description: string;
  contactNumber: string;
  products: string[];
}

export interface Enquiry {
  id: string;
  productId: string;
  productName: string;
  nurseryName: string;
  quantity: number;
  district: string;
  location: string;
  userId: string;
  userName: string;
  userPhone: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: Date;
}

export interface User {
  id: string;
  name: string;
  phone: string;
  location: string;
  district: string;
  isAdmin: boolean;
}

export const mockNurseries: Nursery[] = [
  {
    id: '1',
    name: 'Green Valley Nursery',
    location: 'Sector 12, Urban',
    district: 'Mumbai',
    image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735',
    description: 'Premium quality plants and gardening supplies',
    contactNumber: '+91 98765 43210',
    products: ['1', '2', '5', '8']
  },
  {
    id: '2',
    name: 'Organic Farm Nursery',
    location: 'Village Road, Rural',
    district: 'Pune',
    image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2',
    description: 'Organic certified plants and natural fertilizers',
    contactNumber: '+91 98765 43211',
    products: ['3', '4', '6']
  },
  {
    id: '3',
    name: 'Tropical Plants Hub',
    location: 'Main Street',
    district: 'Bangalore',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b',
    description: 'Exotic tropical plants and rare varieties',
    contactNumber: '+91 98765 43212',
    products: ['7', '9', '10']
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Rose Plant',
    price: 150,
    category: 'Flowering Plants',
    nurseryId: '1',
    nurseryName: 'Green Valley Nursery',
    image: 'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23',
    description: 'Beautiful red roses, perfect for gardens. Blooms throughout the season with proper care.',
    stock: 50,
    location: 'Sector 12, Urban',
    district: 'Mumbai'
  },
  {
    id: '2',
    name: 'Tomato Seeds',
    price: 50,
    category: 'Seeds',
    nurseryId: '1',
    nurseryName: 'Green Valley Nursery',
    image: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa',
    description: 'Hybrid tomato seeds with high yield. Disease resistant variety.',
    stock: 200,
    location: 'Sector 12, Urban',
    district: 'Mumbai'
  },
  {
    id: '3',
    name: 'NPK Fertilizer',
    price: 250,
    category: 'Chemicals',
    nurseryId: '2',
    nurseryName: 'Organic Farm Nursery',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399',
    description: 'Balanced NPK fertilizer for all plants. 1kg pack.',
    stock: 100,
    location: 'Village Road, Rural',
    district: 'Pune'
  },
  {
    id: '4',
    name: 'Neem Pesticide',
    price: 180,
    category: 'Chemicals',
    nurseryId: '2',
    nurseryName: 'Organic Farm Nursery',
    image: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7',
    description: 'Organic neem-based pesticide. Safe for all plants.',
    stock: 75,
    location: 'Village Road, Rural',
    district: 'Pune'
  },
  {
    id: '5',
    name: 'Marigold Plant',
    price: 80,
    category: 'Flowering Plants',
    nurseryId: '1',
    nurseryName: 'Green Valley Nursery',
    image: 'https://images.unsplash.com/photo-1592150102519-4a67b3a96e20',
    description: 'Bright yellow marigold flowers. Great for borders.',
    stock: 120,
    location: 'Sector 12, Urban',
    district: 'Mumbai'
  },
  {
    id: '6',
    name: 'Vegetable Mix Seeds',
    price: 120,
    category: 'Seeds',
    nurseryId: '2',
    nurseryName: 'Organic Farm Nursery',
    image: 'https://images.unsplash.com/photo-1464226066583-1bc52c7c5ac2',
    description: 'Mixed vegetable seeds pack. Contains tomato, cucumber, beans.',
    stock: 80,
    location: 'Village Road, Rural',
    district: 'Pune'
  },
  {
    id: '7',
    name: 'Money Plant',
    price: 90,
    category: 'Indoor Plants',
    nurseryId: '3',
    nurseryName: 'Tropical Plants Hub',
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b',
    description: 'Easy to maintain indoor plant. Purifies air.',
    stock: 150,
    location: 'Main Street',
    district: 'Bangalore'
  },
  {
    id: '8',
    name: 'Garden Tools Set',
    price: 500,
    category: 'Tools',
    nurseryId: '1',
    nurseryName: 'Green Valley Nursery',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b',
    description: 'Complete gardening tools set. Includes spade, rake, pruner.',
    stock: 30,
    location: 'Sector 12, Urban',
    district: 'Mumbai'
  },
  {
    id: '9',
    name: 'Snake Plant',
    price: 200,
    category: 'Indoor Plants',
    nurseryId: '3',
    nurseryName: 'Tropical Plants Hub',
    image: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5',
    description: 'Low maintenance snake plant. Perfect for beginners.',
    stock: 60,
    location: 'Main Street',
    district: 'Bangalore'
  },
  {
    id: '10',
    name: 'Orchid Plant',
    price: 350,
    category: 'Flowering Plants',
    nurseryId: '3',
    nurseryName: 'Tropical Plants Hub',
    image: 'https://images.unsplash.com/photo-1513002749550-c59d786b8e6c',
    description: 'Exotic orchid plant with purple flowers.',
    stock: 25,
    location: 'Main Street',
    district: 'Bangalore'
  }
];

export const mockEnquiries: Enquiry[] = [
  {
    id: '1',
    productId: '1',
    productName: 'Rose Plant',
    nurseryName: 'Green Valley Nursery',
    quantity: 10,
    district: 'Mumbai',
    location: 'Sector 12, Urban',
    userId: '1',
    userName: 'John Doe',
    userPhone: '+91 98765 00000',
    status: 'pending',
    createdAt: new Date('2024-12-20')
  }
];

export const categories = [
  'All',
  'Flowering Plants',
  'Indoor Plants',
  'Seeds',
  'Chemicals',
  'Tools'
];

export const districts = [
  'Mumbai',
  'Pune',
  'Bangalore',
  'Delhi',
  'Hyderabad',
  'Chennai',
  'Kolkata'
];
