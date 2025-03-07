import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Home from './pages/Home'; // Certifique-se de que o caminho está correto
import './pages/home/styles.css';
import React from 'react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
  </StrictMode>,
);