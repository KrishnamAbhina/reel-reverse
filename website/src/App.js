// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Landing from './pages/landing'; // path to your landing page

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/get-started" element={<Landing />} />
    </Routes>
  );
}

export default App;
