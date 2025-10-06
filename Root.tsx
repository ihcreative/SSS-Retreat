// Root.tsx
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import App from './App';

const Root: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </HashRouter>
  );
};

export default Root;
