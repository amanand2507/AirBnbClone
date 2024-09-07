import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer2 = () => {
  return (
    <footer className="bg-light py-4">
      <Container>
        {/* First row with links */}
        <Row>
          <Col md={4}>
            <h6 className="font-weight-bold">Support</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#">Help Centre</a>
              </li>
              <li>
                <a href="#">AirCover</a>
              </li>
              <li>
                <a href="#">Anti-discrimination</a>
              </li>
              <li>
                <a href="#">Disability support</a>
              </li>
              <li>
                <a href="#">Cancellation options</a>
              </li>
              <li>
                <a href="#">Report neighbourhood concern</a>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h6 className="font-weight-bold">Hosting</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#">Airbnb your home</a>
              </li>
              <li>
                <a href="#">AirCover for Hosts</a>
              </li>
              <li>
                <a href="#">Hosting resources</a>
              </li>
              <li>
                <a href="#">Community forum</a>
              </li>
              <li>
                <a href="#">Hosting responsibly</a>
              </li>
              <li>
                <a href="#">Join a free Hosting class</a>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h6 className="font-weight-bold">Airbnb</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#">Newsroom</a>
              </li>
              <li>
                <a href="#">New features</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Investors</a>
              </li>
              <li>
                <a href="#">Airbnb.org emergency stays</a>
              </li>
            </ul>
          </Col>
        </Row>

        {/* Horizontal separator */}
        <hr />

        {/* Second row with copyright, links, and icons */}
        <Row className="d-flex justify-content-between">
          <Col md={6}>
            <p className="mb-0">
              © 2024 Airbnb, Inc. · <a href="#">Privacy</a> ·{' '}
              <a href="#">Terms</a> · <a href="#">Sitemap</a> ·{' '}
              <a href="#">Company details</a>
            </p>
          </Col>
          <Col md={6} className="text-md-right">
            <a href="#" className="mr-3">
              English (IN)
            </a>
            <a href="#" className="mr-3">
              ₹ INR
            </a>
            <a href="#" className="mr-3">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="mr-3">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer2;
