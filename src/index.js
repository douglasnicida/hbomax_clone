import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import App from './pages/App';
import Header from './components/header/header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="overflow-hidden">
      <Header/>
      <App />
    </div>
  </React.StrictMode>
);
