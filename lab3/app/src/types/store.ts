import { type TProduct } from './Product'; 

export type TCartItem = {
  product: TProduct;
  quantity: number;
};


export type TStoreState = {
  products: TProduct[];
  searchQuery: string;
  favorites: number[];      
  cart: TCartItem[];        

  // Действия
  setSearchQuery: (query: string) => void;
  toggleFavorite: (id: number) => void;
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, qty: number) => void;
  clearCart: () => void;
};