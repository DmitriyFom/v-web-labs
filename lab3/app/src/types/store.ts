// src/types/store.ts
import { type TProduct } from './Product';

export type TCartItem = {
  product: TProduct;
  quantity: number;
};

export type TStoreState = {
  products: TProduct[];
  searchQuery: string;
  favorites: number[];      // ID избранных товаров
  cart: TCartItem[];        // Товары в корзине
 selectedItems: number[]; // ← добавить

  // Действия (методы)
  setSearchQuery: (query: string) => void;
  toggleFavorite: (id: number) => void;
  
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, qty: number) => void;
  clearCart: () => void;
  toggleItemSelection: (id: number) => void; // ← добавить
  selectAllItems: (ids: number[]) => void;   // ← добавить
  clearSelection: () => void;       
};