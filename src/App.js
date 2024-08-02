import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import AlbumDetails from './components/AlbumDetails';
import Albums from './components/Albums';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

const App = () => (
  <AuthProvider>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
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
    </Router>
  </AuthProvider>
);

export default App;
