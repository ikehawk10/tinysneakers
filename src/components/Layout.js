import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from './NavBar'; // Adjust the import path

const Layout = () => {
  const location = useLocation();

  // Check if the current route is '/login' or '/register'
  const showNavBar = location.pathname !== '/login' && location.pathname !== '/register';

  return (
    <>
      {showNavBar && <NavBar />} {/* Conditionally render NavBar */}
      <main>
        <Outlet /> {/* This will render the matched route */}
      </main>
    </>
  );
};

export default Layout;
