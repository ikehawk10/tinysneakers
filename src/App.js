// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Photos from './components/Photos';
import CreateAlbum from './components/CreateAlbum';
import Albums from './components/Albums';
import AlbumDetails from './components/AlbumDetails';

// Add this route


const App = () => (
  <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/photos" element={<Photos />} />
      <Route path="/create-album" element={<CreateAlbum />} />
      <Route path="/albums/:id" element={<AlbumDetails />} />
      <Route path="/albums" element={<Albums />} />
    </Routes>
  </Router>
);

export default App;
