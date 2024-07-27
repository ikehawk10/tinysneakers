// src/components/Photos.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

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

  const handleShow = (photo) => {
    setSelectedPhoto(photo);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedPhoto(null);
  };

  return (
    <Container style={{ marginTop: '50px' }}>
      <Row>
        {photos.map(photo => (
          <Col xs={12} md={4} lg={3} key={photo._id} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src={`http://localhost:5001/${photo.url}`}
                onClick={() => handleShow(photo)}
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

      {selectedPhoto && (
        <Modal show={showModal} onHide={handleClose} size="lg" centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedPhoto.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={`http://localhost:5001/${selectedPhoto.url}`}
              alt={selectedPhoto.title}
              style={{ width: '100%', height: 'auto' }}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Container>
  );
};

export default Photos;
