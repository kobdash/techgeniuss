import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root')); // Use createRoot from react-dom
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

