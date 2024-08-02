import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Register from './components/Register';
import AlbumDetails from './components/AlbumDetails';
import Albums from './components/Albums';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Home from './components/Home';
import Photos from './components/Photos';
import Layout from './components/Layout'; // Import the Layout component
import CreateAlbum from './components/CreateAlbum';

const App = () => (
  <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}> {/* Use Layout component for rendering */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/photos" element={<Photos />} />
          <Route 
            path="/albums/:id" 
            element={
              <PrivateRoute>
                <AlbumDetails />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/albums" 
            element={
              <PrivateRoute>
                <Albums />
              </PrivateRoute>
            } 
          />
          <Route path="/create-album" element={<CreateAlbum />} />
          <Route path="*" element={<Navigate to="/" />} /> {/* Redirect unknown routes */}
        </Route>
      </Routes>
    </AuthProvider>
  </BrowserRouter>
);

export default App;
