import React, { useState } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';

const AirbnbLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the email and password to your backend
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <Container className="my-5 container-sm" style={{ width: '600px' }}>
      <h3>Welcome to AirBnb</h3>
      <Form onSubmit={handleSubmit}>
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
        <div className="text-center">
          <p>
            By signing in, you agree to Airbnb's Terms of Service and Privacy
            Policy. <a href="#">Learn more</a>
          </p>
          <Button variant="primary" type="submit" className="w-100 authButton">
            Login
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default AirbnbLogin;
