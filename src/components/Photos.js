// src/components/Photos.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';
import './Photos.css'; // Import the CSS file

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);

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
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
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
                src={`http://localhost:5001/uploads/${photo.url}`}
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

      {currentIndex !== null && (
        <Modal show={showModal} onHide={handleCloseModal} size="lg" centered className="custom-modal">
          <Modal.Body>
            <img
              src={`http://localhost:5001/uploads/${photos[currentIndex].url}`}
              alt={photos[currentIndex].title}
              className={`modal-image ${photos[currentIndex].url.includes('.jpg') ? 'landscape' : ''}`}
            />
            <p className="modal-description">{photos[currentIndex].description}</p>
          </Modal.Body>
          <Modal.Footer>
            {photos.length > 1 && (
              <>
                <Button variant="secondary" onClick={handlePrevious}>
                  Previous
                </Button>
                <Button variant="secondary" onClick={handleNext}>
                  Next
                </Button>
              </>
            )}
            <Button variant="primary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Container>
  );
};

export default Photos;
