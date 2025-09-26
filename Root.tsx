// Root.tsx
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import App from './App';
import HomePage from './HomePage';

const Root: React.FC = () => {
  return (
    <BrowserRouter>
      {/* Example Footer with Link to /mel */}
      <footer style={{ backgroundColor: '#7C936C', padding: '20px', color: 'white', textAlign: 'center' }}>
        <nav>
          <Link to="/" style={{ marginRight: 20, color: 'white', textDecoration: 'underline' }}>
            Retreat Home
          </Link>
          <Link to="/mel" style={{ color: 'white', textDecoration: 'underline' }}>
            Melle’s Coaching
          </Link>
        </nav>
      </footer>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/mel" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
