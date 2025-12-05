import { useMemo } from 'react';
import { ProductCard } from '../widgets/ProductCard/ProductCard';
import { products } from '../entities/product/model';

type HomePageProps = {
  searchQuery: string;
};

export const HomePage = ({ searchQuery }: HomePageProps) => {
  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) {
      return products;
    }
    
    const query = searchQuery.toLowerCase();
    return products.filter(product => 
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  // Разделяем отфильтрованные товары по категориям
  const hoodies = filteredProducts.filter(p => p.category === 'hoodie');
  const shorts = filteredProducts.filter(p => p.category === 'shorts');

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Показываем результаты поиска */}
      {searchQuery && (
        <div className="mb-6 p-4 bg-blue-50 rounded-lg">
          <h2 className="text-lg font-semibold text-blue-800">
            Результаты поиска по запросу: "{searchQuery}"
          </h2>
          <p className="text-blue-600">
            Найдено товаров: {filteredProducts.length}
          </p>
        </div>
      )}

      {/* Худи */}
      {hoodies.length > 0 && (
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Худи</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {hoodies.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      {/* Шорты */}
      {shorts.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-4">Шорты</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {shorts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      {/* Если ничего не найдено */}
      {searchQuery && filteredProducts.length === 0 && (
        <div className="text-center py-10">
          <div className="text-5xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            Товары не найдены
          </h3>
          <p className="text-gray-500">
            Попробуйте изменить поисковый запрос
          </p>
        </div>
      )}
    </div>
  );
};