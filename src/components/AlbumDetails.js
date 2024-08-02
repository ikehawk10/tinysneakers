// src/components/AlbumDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Image, Button, Modal } from 'react-bootstrap';
import Upload from './Upload'; // Import the Upload component
import PhotoCarousel from './PhotoCarousel'; // Import the PhotoCarousel component

const AlbumDetails = () => {
  const { id } = useParams(); // Get the album ID from the URL
  const [album, setAlbum] = useState(null); // State to hold album data
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null); // State to track the selected photo index

  useEffect(() => {
    const fetchAlbum = async () => {
      try {
        // Make an API request to fetch album details
        const response = await axios.get(`http://localhost:5001/api/albums/${id}`);
        setAlbum(response.data);
      } catch (error) {
        console.error('Error fetching album:', error);
      }
    };

    fetchAlbum();
  }, [id]); // Re-fetch data if the ID changes

  // Function to refresh album data
  const refreshAlbum = async () => {
    try {
      const response = await axios.get(`http://localhost:5001/api/albums/${id}`);
      setAlbum(response.data);
    } catch (error) {
      console.error('Error refreshing album:', error);
    }
  };

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  // Function to handle clicking on a photo
  const handlePhotoClick = (index) => {
    setSelectedPhotoIndex(index);
  };

  // Function to handle next photo in the modal
  const handleNextPhoto = () => {
    setSelectedPhotoIndex((prevIndex) => (prevIndex + 1) % album.photos.length);
  };

  // Function to handle previous photo in the modal
  const handlePreviousPhoto = () => {
    setSelectedPhotoIndex((prevIndex) =>
      (prevIndex - 1 + album.photos.length) % album.photos.length
    );
  };

  // Function to close the photo modal
  const handleClosePhotoModal = () => {
    setSelectedPhotoIndex(null);
  };

  // Show loading message while data is being fetched
  if (!album) return <div>Loading...</div>;

  return (
    <Container style={{ marginTop: '50px' }}>
      <h2>{album.name}</h2>
      <p>{album.description}</p>
      <Button variant="primary" onClick={handleShowModal}>
        Upload Photo
      </Button>
      <Row>
        {album.photos.map((photo, index) => (
          <Col xs={12} md={6} lg={4} key={photo._id} className="mb-4">
            <Image
              src={`http://localhost:5001/${photo.url}`}
              alt={photo.title}
              fluid
              onClick={() => handlePhotoClick(index)}
              style={{ cursor: 'pointer' }}
            />
            <p>{photo.title}</p>
          </Col>
        ))}
      </Row>

      {/* Modal for uploading photos */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Photo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Upload albumId={id} onUploadSuccess={refreshAlbum} /> {/* Pass the callback */}
        </Modal.Body>
      </Modal>

      {/* Modal for displaying selected photo */}
      <PhotoCarousel
        photos={album.photos}
        selectedPhotoIndex={selectedPhotoIndex}
        handlePrevious={handlePreviousPhoto}
        handleNext={handleNextPhoto}
        handleClose={handleClosePhotoModal}
      />
    </Container>
  );
};

export default AlbumDetails;
