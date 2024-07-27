// src/components/Upload.js
import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const Upload = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!file) {
      setError('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', title);
    formData.append('description', description);

    try {
      await axios.post('http://localhost:5001/api/photos/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setSuccess('Photo uploaded successfully');
      setFile(null);
      setTitle('');
      setDescription('');
    } catch (error) {
      setError('Error uploading photo. Please try again.');
      console.error('Error uploading photo:', error);
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="mb-4">Upload Photo</h2>
      {success && <Alert variant="success">{success}</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
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
    </Container>
  );
};

export default Upload;
