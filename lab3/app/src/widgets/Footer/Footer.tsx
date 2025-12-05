export const Footer = () => {
  return (
    <footer className="bg-white border-t mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-gray-600 text-sm mb-2 md:mb-0">
          © 2025 Магазин
        </div>
        <div className="flex gap-4 text-sm text-gray-600">
          <a href="#" className="hover:text-blue-600">Политика и безопасность</a>
          <a href="#" className="hover:text-blue-600">Cookie</a>
        </div>
      </div>
    </footer>
  );
};