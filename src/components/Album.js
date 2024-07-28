// src/components/Album.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

const Album = () => {
  const { id } = useParams();
  const [album, setAlbum] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const fetchAlbum = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/api/albums/${id}`);
        setAlbum(response.data);
        setPhotos(response.data.photos);
      } catch (error) {
        console.error('Error fetching album:', error);
      }
    };
    fetchAlbum();
  }, [id]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('albumId', id);

    try {
      await axios.post(`http://localhost:5001/api/photos/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      // Refresh the album's photos after a successful upload
      const response = await axios.get(`http://localhost:5001/api/albums/${id}`);
      setPhotos(response.data.photos);
      setFile(null);
      setTitle('');
      setDescription('');
    } catch (error) {
      console.error('Error uploading photo:', error);
    }
  };

  return (
    <Container>
      {album && (
        <>
          <h2>{album.name}</h2>
          <p>{album.description}</p>
          <Row>
            {photos.map((photo) => (
              <Col xs={12} md={4} lg={3} key={photo._id} className="mb-4">
                <Card>
                  <Card.Img variant="top" src={`http://localhost:5001/${photo.url}`} />
                  <Card.Body>
                    <Card.Title>{photo.title}</Card.Title>
                    <Card.Text>{photo.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <h3>Upload New Photo</h3>
          <Form onSubmit={handleUpload}>
            <Form.Group controlId="file">
              <Form.Label>Choose file:</Form.Label>
              <Form.Control type="file" onChange={handleFileChange} required />
            </Form.Group>
            <Form.Group controlId="title" className="mt-3">
              <Form.Label>Title:</Form.Label>
              <Form.Control
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter photo title"
                required
              />
            </Form.Group>
            <Form.Group controlId="description" className="mt-3">
              <Form.Label>Description:</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter photo description"
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-4">
              Upload Photo
            </Button>
          </Form>
        </>
      )}
    </Container>
  );
};

export default Album;
