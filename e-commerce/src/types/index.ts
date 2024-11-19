export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  rating: number;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  rating: number;
}
export interface Product {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  images: string[];
  thumbnail: string;
  fastDelivery: boolean;
}

export interface CartItem {
  id: string;
  title: string;
  price: number;
  images: string;
  quantity: number;
  rating: number;
}
