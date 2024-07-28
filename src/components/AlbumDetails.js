// src/components/AlbumDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Image } from 'react-bootstrap';

const AlbumDetail = () => {
  const { id } = useParams(); // Get the album ID from the URL
  const [album, setAlbum] = useState(null); // State to hold album data

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

  // Show loading message while data is being fetched
  if (!album) return <div>Loading...</div>;

  return (
    <Container style={{ marginTop: '50px' }}>
      <h2>{album.name}</h2>
      <p>{album.description}</p>
      <Row>
        {album.photos.map((photo) => (
          <Col xs={12} md={6} lg={4} key={photo._id} className="mb-4">
            <Image
              src={`http://localhost:5001/${photo.url}`}
              alt={photo.title}
              fluid
            />
            <p>{photo.title}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AlbumDetail;
