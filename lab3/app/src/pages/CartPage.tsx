import { useMemo } from 'react';
import { useStore } from '../store/StoreProvider';

export const CartPage = () => {
  const cart = useStore((state) => state.cart);
  const { removeFromCart, updateQuantity, clearCart } = useStore((state) => ({
    removeFromCart: state.removeFromCart,
    updateQuantity: state.updateQuantity,
    clearCart: state.clearCart,
  }));

  const totalPrice = useMemo(() =>
    cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0), [cart]);
  const discount = totalPrice * 0.2;
  const finalPrice = totalPrice - discount;

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">Корзина</h1>
      {cart.length === 0 ? (
        <p>Пусто</p>
      ) : (
        <>
          <button onClick={clearCart} className="text-red-500 mb-4">Очистить</button>
          {cart.map((item) => (
            <div key={item.product.id} className="flex items-center gap-4 mb-4">
              <img src={item.product.image} className="w-16 h-16 object-cover" />
              <div>{item.product.name}</div>
              <div>{item.product.price} ₽</div>
              <div>
                <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)}>-</button>
                {item.quantity}
                <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)}>+</button>
              </div>
              <button onClick={() => removeFromCart(item.product.id)}>🗑️</button>
            </div>
          ))}
          <div className="mt-6">
            <div>Товары: {totalPrice} ₽</div>
            <div className="text-red-500">Скидка: -{discount.toFixed(0)} ₽</div>
            <div className="font-bold">Итого: {finalPrice.toFixed(0)} ₽</div>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2">Оформить</button>
          </div>
        </>
      )}
    </div>
  );
};