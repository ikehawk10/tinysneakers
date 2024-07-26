// src/components/Home.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Home = () => (
  <div>
    <Container className="mt-4">
      <Row>
        <Col>
          <h1>Welcome to TinySneakers!</h1>
          <p>This site documents River's life through photos!</p>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Home;
