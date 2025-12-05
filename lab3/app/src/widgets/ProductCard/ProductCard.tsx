import { type TProduct } from '../../types/Product';
import { useStore } from '../../store/StoreProvider';

export const ProductCard = ({ product }: { product: TProduct }) => {
  const favorites = useStore((state) => state.favorites);
  const addToCart = useStore((state) => state.addToCart);
  const toggleFavorite = useStore((state) => state.toggleFavorite);

  const isFavorite = favorites.includes(product.id);

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col h-full">
      <div className="relative">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
        <button
          onClick={() => toggleFavorite(product.id)}
          className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
        >
          {isFavorite ? '❤️' : '🤍'}
        </button>
      </div>
      <div className="p-3 bg-gray-50 mt-auto">
        <div className="font-bold text-red-500">{product.price} ₽</div>
        <div className="text-sm text-gray-700">{product.name}</div>
      </div>
      <button
        onClick={() => addToCart(product.id)}
        className="w-full py-2 bg-blue-500 text-white font-medium"
      >
        🛒
      </button>
    </div>
  );
};