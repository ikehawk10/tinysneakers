import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SneakerIcon from './SneakerIcon';

const NavBar = () => (
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
        <Nav.Link as={Link} to="/upload">Upload</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBar;
