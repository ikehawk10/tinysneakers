// src/components/Home.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Home.css';

const Home = () => (
  <Container className="mt-4">
    <Row className="align-items-center">
      <Col md={6} className="text-center">
        <img
          src="images/family-photo.jpeg"
          alt="Family"
          className="img-fluid rounded-circle"
        />
      </Col>
      <Col md={6}>
        <div className="intro-text">
          <h1 className="display-4">Welcome to TinySneakers!</h1>
          <p className="lead">This site documents River's life through photos!</p>
          <Button variant="primary" href="/photos">View Photos</Button>
        </div>
      </Col>
    </Row>
  </Container>
);

export default Home;
