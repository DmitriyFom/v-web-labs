// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './widgets/Header/Header';
import { Footer } from './widgets/Footer/Footer';
import { HomePage } from './pages/HomePage';
import { CartPage } from './pages/CartPage'; // ← добавь импорт

export const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} /> {/* ← добавь маршрут */}
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};