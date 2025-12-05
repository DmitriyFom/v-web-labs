// src/store/createStore.ts
import { createStore } from 'zustand';
import { type TStoreState } from '../types/store';

export const populateStore = (initialState: Pick<TStoreState, 'products'>) =>
  createStore<TStoreState>((set, get) => ({
    ...initialState,
    searchQuery: '',
    favorites: [],
    cart: [],
    selectedItems: [],

    setSearchQuery: (query) => set({ searchQuery: query }),

    toggleFavorite: (id) => {
      const favorites = get().favorites;
      set({
        favorites: favorites.includes(id)
          ? favorites.filter((favId) => favId !== id)
          : [...favorites, id],
      });
    },

    addToCart: (id) => {
      const { products, cart } = get();
      const existing = cart.find((item) => item.product.id === id);
      if (existing) {
        set({
          cart: cart.map((item) =>
            item.product.id === id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        });
      } else {
        const product = products.find((p) => p.id === id);
        if (product) {
          set({ cart: [...cart, { product, quantity: 1 }] });
        }
      }
    },

    removeFromCart: (id) => {
      set({
        cart: get().cart.filter((item) => item.product.id !== id),
      });
    },

    updateQuantity: (id, qty) => {
      if (qty < 1) return;
      set({
        cart: get().cart.map((item) =>
          item.product.id === id ? { ...item, quantity: qty } : item
        ),
      });
    },
    toggleItemSelection: (id) => {
      set((state) => {
        const isSelected = state.selectedItems.includes(id);
        return {
          selectedItems: isSelected
            ? state.selectedItems.filter(itemId => itemId !== id)
            : [...state.selectedItems, id],
        };
      });
    },

    selectAllItems: (ids) => set({ selectedItems: ids }),
    clearSelection: () => set({ selectedItems: [] }),

    clearCart: () => set({ cart: [] }),
  }));