// src/components/Photos.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card } from 'react-bootstrap';
import PhotoCarousel from './PhotoCarousel'; // Import the PhotoCarousel component
import './Photos.css'; // Import the CSS file

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/photos');
        setPhotos(response.data);
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };

    fetchPhotos();
  }, []);

  const handleOpenModal = (index) => {
    setCurrentIndex(index);
  };

  const handleCloseModal = () => {
    setCurrentIndex(null);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  return (
    <Container style={{ marginTop: '50px' }}>
      <Row>
        {photos.map((photo, index) => (
          <Col xs={12} md={4} lg={3} key={photo._id} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src={`http://localhost:5001/${photo.url}`}
                onClick={() => handleOpenModal(index)}
                style={{ cursor: 'pointer' }}
              />
              <Card.Body>
                <Card.Title>{photo.title}</Card.Title>
                <Card.Text>{photo.description}</Card.Text>
                <Card.Text>
                  <small className="text-muted">{new Date(photo.date).toLocaleDateString()}</small>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <PhotoCarousel
        photos={photos}
        selectedPhotoIndex={currentIndex}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
        handleClose={handleCloseModal}
      />
    </Container>
  );
};

export default Photos;
