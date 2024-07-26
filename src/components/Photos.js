// src/components/Photos.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

// Sample photo data
const photos = [
  { id: 1, src: 'https://via.placeholder.com/300', alt: 'Photo 1' },
  { id: 2, src: 'https://via.placeholder.com/300', alt: 'Photo 2' },
  { id: 3, src: 'https://via.placeholder.com/300', alt: 'Photo 3' },
  { id: 4, src: 'https://via.placeholder.com/300', alt: 'Photo 4' },
  { id: 5, src: 'https://via.placeholder.com/300', alt: 'Photo 5' },
  // Add more photo objects here
];

const Photos = () => (
  <Container className="mt-5">
    <Row>
      {photos.map((photo) => (
        <Col xs={12} md={4} lg={3} key={photo.id} className="mb-4">
          <Card>
            <Card.Img variant="top" src={photo.src} alt={photo.alt} />
            <Card.Body>
              <Card.Title>{photo.alt}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default Photos;
