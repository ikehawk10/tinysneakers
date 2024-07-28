// src/components/CreateAlbum.js
import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';
import './Common.css'; // Import shared styles

const CreateAlbum = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [coverPhoto, setCoverPhoto] = useState(null);

  const handleFileChange = (e) => {
    setCoverPhoto(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('coverPhoto', coverPhoto);

    try {
      await axios.post('http://localhost:5001/api/albums', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Album created successfully');
    } catch (error) {
      console.error('Error creating album:', error);
    }
  };

  return (
    <Container className="page-container">
      <h2 className="page-header">Create New Album</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Album Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter album name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter album description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Cover Photo</Form.Label>
          <Form.Control
            type="file"
            onChange={handleFileChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-4">
          Create Album
        </Button>
      </Form>
    </Container>
  );
};

export default CreateAlbum;
