import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/app';
import './styles/globals.scss';
import './styles/tailwindcss.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
