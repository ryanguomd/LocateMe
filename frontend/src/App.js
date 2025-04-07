import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import CityInsights from './pages/CityInsights';

function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: 10 }}>
        <Link to="/" style={{ marginRight: 10 }}>Home</Link>
        <Link to="/city-insights">City Insights</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city-insights" element={<CityInsights />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
