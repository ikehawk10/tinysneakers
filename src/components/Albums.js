// src/components/Albums.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Albums.css'; // Import the CSS file

const Albums = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/albums');
        setAlbums(response.data);
      } catch (error) {
        console.error('Error fetching albums:', error);
      }
    };

    fetchAlbums();
  }, []);

  return (
    <Container className="albums-container">
      <h2>Albums</h2>
      <Row>
        {albums.map((album) => (
          <Col xs={12} md={6} lg={4} key={album._id} className="mb-4">
            <Link to={`/albums/${album._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <Card className="album-card">
                <Card.Body>
                  <Card.Title className="album-card-title">{album.name}</Card.Title>
                </Card.Body>
                <Card.Img
                  variant="bottom"
                  src={`http://localhost:5001/${album.coverPhotoUrl}`}
                  alt={album.name}
                />
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Albums;
