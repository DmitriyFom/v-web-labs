type HeaderProps = {
  searchQuery: string;
  onSearchChange: (value: string) => void;
};

export const Header = ({ searchQuery, onSearchChange }: HeaderProps) => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-2xl">👕</div>

        <div className="flex-1 max-w-md mx-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Поиск товаров..."
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex gap-4 text-xl">
          <span>❤️</span>
          <span>🛒</span>
        </div>
      </div>
    </header>
  );
};