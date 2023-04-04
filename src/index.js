import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DinnerContextProvider } from './context/dinnerContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DinnerContextProvider>
      <App />
    </DinnerContextProvider>
  </React.StrictMode>
);
