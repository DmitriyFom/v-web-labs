// src/widgets/ProductCard/ProductCard.tsx
import { type TProduct } from '../../types/Product';
import { useStore } from '../../store/StoreProvider';

export const ProductCard = ({ product }: { product: TProduct }) => {
  const favorites = useStore((state) => state.favorites);
  const addToCart = useStore((state) => state.addToCart);
  const toggleFavorite = useStore((state) => state.toggleFavorite);

  const isFavorite = favorites.includes(product.id);

  const handleToggleFavorite = () => toggleFavorite(product.id);
  const handleAddToCart = () => addToCart(product.id);

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col h-full">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <button
          onClick={handleToggleFavorite}
          className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition-colors"
        >
          {isFavorite ? '❤️' : '🤍'}
        </button>
      </div>

      <div className="p-3 bg-gray-50 mt-auto">
        <div className="font-bold text-red-500">{product.price} ₽</div>
        <div className="text-sm text-gray-700">{product.name}</div>
      </div>

      <button
        onClick={handleAddToCart}
        className="w-full py-2 text-white font-medium transition-colors bg-blue-500 hover:bg-blue-600 flex items-center justify-center"
      >
        🛒
      </button>
    </div>
  );
};