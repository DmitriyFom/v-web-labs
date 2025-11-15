import { useState } from 'react';
import { Header } from './widgets/Header/Header';
import { Footer } from './widgets/Footer/Footer';
import { HomePage } from './pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const App = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage searchQuery={searchQuery} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};