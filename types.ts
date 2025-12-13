export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: 'Home' | 'Away' | 'Training' | 'Fan';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  avatar: string;
}

export interface OrderFormState {
  name: string;
  phone: string;
  city: string;
  quantity: number;
  size: string;
  customName: string;
  customNumber: string;
}

export enum SectionIDs {
  HERO = 'hero',
  CUSTOMIZE = 'customize',
  COLLECTION = 'collection',
  FEATURES = 'features',
  ORDER = 'order',
}