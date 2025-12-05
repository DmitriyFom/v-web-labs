import { useMemo, useState } from 'react';
import { useStore } from '../store/StoreProvider';

export const CartPage = () => {
  const cart = useStore((state) => state.cart);
  const removeFromCart = useStore((state) => state.removeFromCart);
  const updateQuantity = useStore((state) => state.updateQuantity);
  const clearCart = useStore((state) => state.clearCart);

  const [cartSearchQuery, setCartSearchQuery] = useState('');

  const filteredCart = useMemo(() => {
    if (!cartSearchQuery.trim()) return cart;
    const q = cartSearchQuery.toLowerCase().trim();
    return cart.filter(item =>
      item.product.name.toLowerCase().includes(q) ||
      (item.product.category && item.product.category.toLowerCase().includes(q))
    );
  }, [cart, cartSearchQuery]);


  const totalPrice = useMemo(() => {
    return filteredCart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  }, [filteredCart]);

  const discount = useMemo(() => totalPrice * 0.2, [totalPrice]);
  const finalPrice = totalPrice - discount;

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">Корзина</h1>

      {/* Поиск по корзине */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Поиск в корзине..."
          value={cartSearchQuery}
          onChange={(e) => setCartSearchQuery(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />
      </div>

      <div className="flex items-center mb-4">
        <input type="checkbox" id="selectAll" className="mr-2" />
        <label htmlFor="selectAll">Выбрать все</label>
        <button onClick={clearCart} className="ml-auto text-gray-500 hover:text-red-500">🗑️</button>
      </div>

      <div className="border border-gray-300 rounded-lg p-4 mb-6">
        {filteredCart.length > 0 ? (
          filteredCart.map((item) => (
            <div key={item.product.id} className="flex items-center mb-4">
              <input type="checkbox" className="mr-2" />
              <img
                src={item.product.image}
                alt={item.product.name}
                className="w-16 h-16 object-cover mr-4"
              />
              <div className="flex-grow">
                <h3 className="font-medium">{item.product.name}</h3>
                <p className="text-sm text-gray-500">{item.product.price} ₽</p>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                  className="px-2 py-1 border border-gray-300"
                >
                  -
                </button>
                <span className="px-3">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                  className="px-2 py-1 border border-gray-300"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeFromCart(item.product.id)}
                className="ml-4 text-gray-500 hover:text-red-500"
              >
                🗑️
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">
            {cartSearchQuery ? 'Товары не найдены' : 'Корзина пуста'}
          </p>
        )}
      </div>

      {/* Итоговая сумма для отфильтрованных товаров */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="mb-4">
          <div className="flex justify-between">
            <span>Товары ({filteredCart.length})</span>
            <span>{totalPrice.toFixed(0)} ₽</span>
          </div>
          <div className="flex justify-between text-red-500">
            <span>Скидка</span>
            <span>-{discount.toFixed(0)} ₽</span>
          </div>
        </div>
        <div className="flex justify-between font-bold mb-4">
          <span>Итого</span>
          <span>{finalPrice.toFixed(0)} ₽</span>
        </div>
        <button
          onClick={() => alert('Оформление заказа...')}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Перейти к оплате
        </button>
      </div>
    </div>
  );
};