import { useMemo } from 'react';
import { ProductCard } from '../widgets/ProductCard/ProductCard';
import { useStore } from '../store/StoreProvider';

export const HomePage = () => {
  const products = useStore((state) => state.products);
  const searchQuery = useStore((state) => state.searchQuery);

  const filtered = useMemo(() => {
    if (!searchQuery.trim()) return products;
    const q = searchQuery.toLowerCase();
    return products.filter(
      (p) => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
    );
  }, [searchQuery, products]);

  const hoodies = filtered.filter((p) => p.category === 'hoodie');
  const shorts = filtered.filter((p) => p.category === 'shorts');

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Худи</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {hoodies.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Шорты</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {shorts.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>
    </div>
  );
};