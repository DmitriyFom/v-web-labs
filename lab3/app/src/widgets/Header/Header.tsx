import { Link } from 'react-router-dom';
import { useStore } from '../../store/StoreProvider';

export const Header = () => {
  const searchQuery = useStore((state) => state.searchQuery);
  const setSearchQuery = useStore((state) => state.setSearchQuery);
  const totalItems = useStore((state) =>
    state.cart.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <header className="p-4 bg-white shadow flex justify-between items-center">
      <Link to="/">👕</Link>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Поиск..."
        className="border px-2 py-1 w-64"
      />
      <div>
        <Link to="/favorites" className="mr-4">❤️</Link>
        <Link to="/cart" className="relative">🛒
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
};