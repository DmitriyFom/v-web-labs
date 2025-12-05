import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.css';
import { StoreProvider } from './store/StoreProvider';
import { products } from './entities/product/model'; 

const container = document.getElementById('root');
if (container) {
  ReactDOM.createRoot(container).render(
    <React.StrictMode>
      <StoreProvider initialState={{ products }}>
        <App />
      </StoreProvider>
    </React.StrictMode>
  );
} else {
  console.error('Root element not found');
}