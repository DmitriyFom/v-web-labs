import { useState } from 'react';
import { AddToCartButton } from '../../features/cart/ui/AddToCartButton'; 

type TProduct = {
  id: number;
  name: string;
  price: number;
  image: string;
};


type ProductCardProps = {
  product: TProduct;
};

export const ProductCard = ({ product }: ProductCardProps) => {

  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  // Типизация обработчика события
  const handleFavoriteClick = (): void => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col h-full">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <button
          onClick={handleFavoriteClick}
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