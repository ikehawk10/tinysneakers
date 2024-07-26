// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Photos from './components/Photos';
import Upload from './components/Upload';
import NavBar from './components/NavBar';

const App = () => (
  <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/photos" element={<Photos />} />
      <Route path="/upload" element={<Upload />} />
    </Routes>
  </Router>
);

export default App;
