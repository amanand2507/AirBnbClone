import React, { useState } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';

const AirbnbSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the email, password, confirm password, and name to your backend
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    console.log('Name:', name);
  };

  return (
    <Container className="my-5 container-sm" style={{ width: '600px' }}>
      <h3>Sign up for Airbnb</h3>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={handleNameChange}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={handleEmailChange}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={handlePasswordChange}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter confirm password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
          </Form.Group>
        </Row>
        <div className="text-center">
          <p>
            By signing up, you agree to Airbnb's Terms of Service and Privacy
            Policy. <a href="#">Learn more</a>
          </p>
          <Button variant="primary" type="submit" className="w-100 authButton">
            Sign up
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default AirbnbSignup;
