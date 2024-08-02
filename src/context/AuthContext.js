// src/context/AuthContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

// Custom hook to use auth context
const useAuth = () => {
  return useContext(AuthContext);
};

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common['x-auth-token'] = token;
      const fetchUser = async () => {
        try {
          const response = await axios.get('http://localhost:5001/api/auth/me');
          setUser(response.data);
        } catch (error) {
          console.error('Error fetching user data:', error);
          setUser(null); // Handle errors or invalid tokens
        }
      };
      fetchUser();
    } else {
      delete axios.defaults.headers.common['x-auth-token'];
    }
  }, [token]);

  const login = async (username, password) => {
    try {
      const response = await axios.post('http://localhost:5001/api/auth/login', { username, password });
      setToken(response.data.token);
      localStorage.setItem('token', response.data.token);
      const userResponse = await axios.get('http://localhost:5001/api/auth/me');
      setUser(userResponse.data);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const logout = () => {
    setToken('');
    setUser(null);
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['x-auth-token'];
  };

  return (
    <AuthContext.Provider value={{ token, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

// Exporting AuthProvider, AuthContext, and useAuth
export { AuthContext, AuthProvider, useAuth };
