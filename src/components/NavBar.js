import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Import useAuth
import SneakerIcon from './SneakerIcon';

const NavBar = () => {
  const { logout } = useAuth(); // Destructure logout from useAuth
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogout = () => {
    logout(); // Call logout function from context
    navigate('/login'); // Redirect to login page
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" style={{ padding: '20px' }}>
      <Navbar.Brand as={Link} to="/">
        <SneakerIcon
          style={{ width: '30px', height: 'auto', marginRight: '10px' }} // Adjust size and spacing
        />
        TinySneakers
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/photos">Photos</Nav.Link>
          <Nav.Link as={Link} to="/albums">Albums</Nav.Link>
          <Nav.Link as={Link} to="/create-album">Create Album</Nav.Link>
        </Nav>
        <Button variant="outline-light" onClick={handleLogout} style={{ marginLeft: 'auto' }}>
          Logout
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
