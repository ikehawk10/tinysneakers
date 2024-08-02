import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Register from './components/Register';
import AlbumDetails from './components/AlbumDetails';
import Albums from './components/Albums';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

const App = () => (
  <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
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
        <Route path="/" element={<Navigate to="/albums" />} />
      </Routes>
    </AuthProvider>
  </BrowserRouter>

);

export default App;
