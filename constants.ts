import { Product, Testimonial } from './types';

// ==============================================================================
// CONFIGURATION
// Replace these URLs with your local assets (e.g., /assets/images/hero.jpg)
// when deploying to production.
// ==============================================================================

export const IMAGES = {
  // Hero background: energetic football crowd or stadium
  HERO_BG: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=2070&auto=format&fit=crop',
  // Model 1: Fan wearing red jersey
  MODEL_MALE: 'https://images.unsplash.com/photo-1517466787929-bc90951d6428?q=80&w=800&auto=format&fit=crop',
  // Model 2: Fan wearing green/white jersey
  MODEL_FEMALE: 'https://images.unsplash.com/photo-1529139574466-a302d2052574?q=80&w=800&auto=format&fit=crop',
  // Texture detail
  FABRIC_DETAIL: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800&auto=format&fit=crop',
  // Group shot
  GROUP_CELEBRATION: 'https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=800&auto=format&fit=crop',
};

export const WHATSAPP_NUMBER = '212600000000'; // Replace with actual business number

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'The Atlas Home Kit',
    price: 250,
    category: 'Home',
    description: 'Classic red with green star detailing. Breathable fabric.',
    image: 'https://images.unsplash.com/photo-1562887250-985202613d0c?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'The Sahara Away Kit',
    price: 250,
    category: 'Away',
    description: 'Elegant white with geometric Zellige patterns.',
    image: 'https://images.unsplash.com/photo-1620371350502-999e9a7d80a4?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'Supporter Premium',
    price: 199,
    category: 'Fan',
    description: 'Cotton blend perfect for stadium or cafe viewing.',
    image: 'https://images.unsplash.com/photo-1580381615739-9d6c731459a7?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '4',
    name: 'Limited Gold Edition',
    price: 299,
    category: 'Training',
    description: 'Black and Gold to celebrate African royalty.',
    image: 'https://images.unsplash.com/photo-1559563458-527698bf5295?q=80&w=800&auto=format&fit=crop',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Youssef B.',
    role: 'Ultra Fan',
    text: 'The quality is amazing. I wore it to the friendly match in Agadir and got so many compliments. Dima Maghrib!',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: '2',
    name: 'Sarah M.',
    role: 'Casablanca',
    text: 'Fast delivery and the customization was perfect. Printing my name on the back made it feel special.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: '3',
    name: 'Karim & Friends',
    role: 'Group Order',
    text: 'Ordered 10 shirts for our company team building for the CAN. Best quality/price ratio.',
    avatar: 'https://randomuser.me/api/portraits/men/85.jpg',
  },
];