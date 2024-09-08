import React from 'react';
import {
  Navbar,
  Nav,
  Container,
  Button,
  Form,
  Stack,
  NavDropdown,
  Dropdown,
} from 'react-bootstrap';
import './Navbar.css';
import logo from '../../assets/logo/long-logo.png';
import { Link, NavLink } from 'react-router-dom';

const isLoggedIn = localStorage.getItem('token');

const AirbnbNavbar = () => {
  return (
    <Stack>
      {/* Top Navbar */}
      <Navbar expand="lg" className="mx-4">
        <Container fluid>
          <Navbar.Brand href="/">
            <img src={logo} alt="Airbnb Logo" height="30" />
          </Navbar.Brand>

          {/* Middle: Stays and Experiences Links */}
          <Nav className="ms-auto">
            <Nav.Link href="#stays" className="fw-bolder">
              Stays
            </Nav.Link>
            <Nav.Link href="#experiences" className="fw-bold">
              Experiences
            </Nav.Link>
          </Nav>

          {/* Right: Airbnb your home, Language, and Profile */}
          <Nav className="ms-auto mx-5">
            <Nav.Link href="#host" className="fw-bold">
              Airbnb your home
            </Nav.Link>
            <Nav.Link href="#language">
              <i className="bi bi-globe"></i>
            </Nav.Link>
            <Nav.Link href="#profile" className="d-flex align-items-center">
              <i className="bi bi-list mx-2"></i>
              <Dropdown drop="start">
                <Dropdown.Toggle as="a" className="d-flex align-items-center">
                  <i className="bi bi-person-circle"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu align={'start'}>
                  {!isLoggedIn && (
                    <>
                      <Dropdown.Item as={NavLink} to="/login">
                        Login
                      </Dropdown.Item>
                      <Dropdown.Item as={NavLink} to="/signup">
                        Signup
                      </Dropdown.Item>
                    </>
                  )}
                  {isLoggedIn && (
                    <>
                      <Dropdown.Item
                        as={NavLink}
                        onClick={() => {
                          localStorage.removeItem('token');
                          window.location.reload();
                        }}
                      >
                        Logout
                      </Dropdown.Item>
                      <Dropdown.Item as={NavLink} to="/profile">
                        Profile
                      </Dropdown.Item>
                    </>
                  )}
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Bottom Search Bar */}
      <Navbar expand="lg" className="airbnb-navbar py-4">
        <Container>
          <Form className="search-bar d-none d-lg-flex w-100 align-items-center">
            <Form.Group className="me-2 border-end">
              <Form.Label className="fw-bold px-2">Where</Form.Label>
              <Form.Control
                type="text"
                placeholder="Search destinations"
                className="border-0"
              />
            </Form.Group>
            <Form.Group className="me-2 border-end">
              <Form.Label className="fw-bold px-3">Check In</Form.Label>
              <Form.Control
                type="text"
                placeholder="Add dates"
                className="border-0"
              />
            </Form.Group>
            <Form.Group className="me-2 border-end">
              <Form.Label className="fw-bold px-2">Check Out</Form.Label>
              <Form.Control
                type="text"
                placeholder="Add dates"
                className="border-0"
              />
            </Form.Group>
            <Form.Group className="me-2">
              <Form.Label className="fw-bold px-2">Who</Form.Label>
              <Form.Control
                type="text"
                placeholder="Add guests"
                className="border-0"
              />
            </Form.Group>
            <Button variant="danger" className="rounded-circle">
              <i className="bi bi-search"></i>
            </Button>
          </Form>
        </Container>
      </Navbar>
    </Stack>
  );
};

export default AirbnbNavbar;
