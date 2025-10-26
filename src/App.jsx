import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WOW } from 'wowjs';
import Home from './assets/pages/Home.jsx';
import './assets/styles/css/style.css';

function App() {
  useEffect(() => {
    new WOW().init();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;