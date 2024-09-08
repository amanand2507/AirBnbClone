import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer2 = () => {
  return (
    <footer className="bg-light py-4">
      <Container>
        {/* First row with links */}
        <Row>
          <Col md={4}>
            <h6 className="fw-bold">Support</h6>
            <ul className="list-unstyled">
              <li className="my-2">
                <a href="#">Help Centre</a>
              </li>
              <li className="my-2">
                <a href="#">AirCover</a>
              </li>
              <li className="my-2">
                <a href="#">Anti-discrimination</a>
              </li>
              <li className="my-2">
                <a href="#">Disability support</a>
              </li>
              <li className="my-2">
                <a href="#">Cancellation options</a>
              </li>
              <li className="my-2">
                <a href="#">Report neighbourhood concern</a>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h6 className="fw-bold">Hosting</h6>
            <ul className="list-unstyled">
              <li className="my-2">
                <a href="#">Airbnb your home</a>
              </li>
              <li className="my-2">
                <a href="#">AirCover for Hosts</a>
              </li>
              <li className="my-2">
                <a href="#">Hosting resources</a>
              </li>
              <li className="my-2">
                <a href="#">Community forum</a>
              </li>
              <li className="my-2">
                <a href="#">Hosting responsibly</a>
              </li>
              <li className="my-2">
                <a href="#">Join a free Hosting class</a>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h6 className="fw-bold">Airbnb</h6>
            <ul className="list-unstyled">
              <li className="my-2">
                <a href="#">Newsroom</a>
              </li>
              <li className="my-2">
                <a href="#">New features</a>
              </li>
              <li className="my-2">
                <a href="#">Careers</a>
              </li>
              <li className="my-2">
                <a href="#">Investors</a>
              </li>
              <li className="my-2">
                <a href="#">Airbnb.org emergency stays</a>
              </li>
            </ul>
          </Col>
        </Row>

        {/* Horizontal separator */}
        <hr />

        {/* Second row with copyright, links, and icons */}
        <Row className="d-flex ">
          <Col md={8}>
            <p className="mb-0">
              © 2024 Airbnb, Inc. · <a href="#">Privacy</a> ·{' '}
              <a href="#">Terms</a> · <a href="#">Sitemap</a> ·{' '}
              <a href="#">Company details</a>
            </p>
          </Col>
          <Col md={4} className="d-flex justify-content-end">
            <a href="#" className="mx-3">
              English (IN)
            </a>
            <a href="#" className="mx-3">
              ₹ INR
            </a>
            <a href="#" className="mx-3">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="mx-3">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#" className="mx-3">
              <i className="bi bi-instagram"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer2;
