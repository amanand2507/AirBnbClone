import React from 'react';
import { Container, Row, Col, Nav, NavItem } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-light pt-4">
      <Container>
        <h5>Inspiration for future getaways</h5>
        <Nav variant="tabs" defaultActiveKey="/popular">
          <NavItem>
            <Nav.Link eventKey="popular" href="/popular">
              Popular
            </Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link eventKey="arts-culture" href="/arts-culture">
              Arts & Culture
            </Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link eventKey="outdoors" href="/outdoors">
              Outdoors
            </Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link eventKey="mountains" href="/mountains">
              Mountains
            </Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link eventKey="beach" href="/beach">
              Beach
            </Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link eventKey="unique-stays" href="/unique-stays">
              Unique stays
            </Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link eventKey="categories" href="/categories">
              Categories
            </Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link eventKey="things-to-do" href="/things-to-do">
              Things to do
            </Nav.Link>
          </NavItem>
        </Nav>

        <Row className="pt-4">
          <Col xs={6} sm={3}>
            <ul className="list-unstyled">
              <li>
                <strong>Canmore</strong>
              </li>
              <li>Flat rentals</li>
            </ul>
            <ul className="list-unstyled">
              <li>
                <strong>Tucson</strong>
              </li>
              <li>Rentals with pools</li>
            </ul>
            <ul className="list-unstyled">
              <li>
                <strong>Anaheim</strong>
              </li>
              <li>House rentals</li>
            </ul>
          </Col>
          <Col xs={6} sm={3}>
            <ul className="list-unstyled">
              <li>
                <strong>Benalmádena</strong>
              </li>
              <li>Flat rentals</li>
            </ul>
            <ul className="list-unstyled">
              <li>
                <strong>Jasper</strong>
              </li>
              <li>Cabin rentals</li>
            </ul>
            <ul className="list-unstyled">
              <li>
                <strong>Monterey</strong>
              </li>
              <li>Cabin rentals</li>
            </ul>
          </Col>
          <Col xs={6} sm={3}>
            <ul className="list-unstyled">
              <li>
                <strong>Marbella</strong>
              </li>
              <li>Beachfront rentals</li>
            </ul>
            <ul className="list-unstyled">
              <li>
                <strong>Mountain View</strong>
              </li>
              <li>Cabin rentals</li>
            </ul>
            <ul className="list-unstyled">
              <li>
                <strong>Paso Robles</strong>
              </li>
              <li>Cottage rentals</li>
            </ul>
          </Col>
          <Col xs={6} sm={3}>
            <ul className="list-unstyled">
              <li>
                <strong>Mijas</strong>
              </li>
              <li>House rentals</li>
            </ul>
            <ul className="list-unstyled">
              <li>
                <strong>Devonport</strong>
              </li>
              <li>Cottage rentals</li>
            </ul>
            <ul className="list-unstyled">
              <li>
                <strong>Santa Barbara</strong>
              </li>
              <li>Beach house rentals</li>
            </ul>
          </Col>
        </Row>
        <Row className="pt-4">
          <Col xs={6} sm={3}>
            <ul className="list-unstyled">
              <li>
                <strong>Prescott</strong>
              </li>
              <li>Cabin rentals</li>
            </ul>
          </Col>
          <Col xs={6} sm={3}>
            <ul className="list-unstyled">
              <li>
                <strong>Mallacoota</strong>
              </li>
              <li>Pet-friendly rentals</li>
            </ul>
          </Col>
          <Col xs={6} sm={3}>
            <ul className="list-unstyled">
              <li>
                <strong>Ibiza</strong>
              </li>
              <li>Holiday rentals</li>
            </ul>
          </Col>
          <Col xs={6} sm={3}>
            <ul className="list-unstyled">
              <li>
                <strong>Sonoma</strong>
              </li>
              <li>Beach house rentals</li>
            </ul>
          </Col>
        </Row>
        <div className="pt-3 text-right">
          <a href="/more">Show more</a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
