import { useState } from 'react';
import { AddToCartButton } from '../../features/cart/ui/AddToCartButton'; // Убрано .jsx
import { type TProduct } from '../../types/Product'; // Импорт типа

// Указание типа для параметра product
export const ProductCard = ({ product }: { product: TProduct }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col h-full">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition-colors"
        >
          {isFavorite ? '❤️' : '🤍'}
        </button>
      </div>

      <div className="p-3 bg-gray-50 mt-auto">
        <div className="font-bold text-red-500">{product.price} ₽</div>
        <div className="text-sm text-gray-700">{product.name}</div>
      </div>

      <AddToCartButton productId={product.id} />
    </div>
  );
};