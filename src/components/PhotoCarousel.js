// src/components/PhotoCarousel.js
import React from 'react';
import { Modal, Button, Image } from 'react-bootstrap';

const PhotoCarousel = ({ photos, selectedPhotoIndex, handlePrevious, handleNext, handleClose }) => {
  if (selectedPhotoIndex === null) return null;

  const isSinglePhoto = photos.length === 1;

  return (
    <Modal show onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{photos[selectedPhotoIndex].title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image
          src={`http://localhost:5001/${photos[selectedPhotoIndex].url}`}
          alt={photos[selectedPhotoIndex].title}
          fluid
        />
        <p>{photos[selectedPhotoIndex].description}</p>
      </Modal.Body>
      <Modal.Footer>
        {!isSinglePhoto && (
          <>
            <Button variant="secondary" onClick={handlePrevious}>
              Previous
            </Button>
            <Button variant="secondary" onClick={handleNext}>
              Next
            </Button>
          </>
        )}
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PhotoCarousel;
