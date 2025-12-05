import { useState, type FormEvent } from 'react';
import { Header } from './widgets/Header/Header';
import { Footer } from './widgets/Footer/Footer';
import { HomePage } from './pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const App = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Search submitted:', searchQuery);
  };

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        {/* Передаем состояние поиска в Header */}
        <Header 
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          onSearchSubmit={handleSearchSubmit}
        />
        <main className="flex-grow">
          <Routes>
            {/* Передаем searchQuery в HomePage */}
            <Route 
              path="/" 
              element={
                <HomePage searchQuery={searchQuery} />
              } 
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};