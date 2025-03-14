// Code for the main entry point of the application
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import { Category } from './pages/Category';
import Section from './components/models/Section';
import Cart from './pages/Cart'; // Importe a página Cart
import './pages/home/styles.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/category" element={<Category />} />
      <Route path="/" element={<Section />} />
      <Route path="/category/:category" element={<Category />} />
      <Route path="/cart" element={<Cart />} /> {/* Adicione a rota para a página Cart */}
    </Routes>
  </Router>
);
