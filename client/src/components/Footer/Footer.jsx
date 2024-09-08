import React from 'react';
import { Container, Row, Col, Nav, NavItem } from 'react-bootstrap';
import './Footer.css';

const itemList = [
  { title: 'Canmore', description: 'Pet-friendly rentals' },
  { title: 'Benalmádena', description: 'Flat rentals' },
  { title: 'Marbella', description: 'Flat rentals' },
  { title: 'Mijas', description: 'Cottage rentals' },
  { title: 'Prescott', description: 'Pet-friendly rentals' },
  { title: 'Scottsdale', description: 'Flat rentals' },
  { title: 'Tucson', description: 'Flat rentals' },
  { title: 'Jasper', description: 'Cabin rentals' },
  { title: 'Mountain View', description: 'Pet-friendly rentals' },
  { title: 'Devonport', description: 'Cottage rentals' },
  { title: 'Mallacoota', description: 'Pet-friendly rentals' },
  { title: 'Ibiza', description: 'Holiday rentals' },
  { title: 'Anaheim', description: 'Family-friendly rentals' },
  { title: 'Monterey', description: 'Flat rentals' },
  { title: 'Paso Robles', description: 'House rentals' },
  { title: 'Santa Barbara', description: 'Beachfront rentals' },
  { title: 'Sonoma', description: 'Pet-friendly rentals' },
];

const Footer = () => {
  return (
    <footer className="bg-light pt-4">
      <Container>
        <h5>Inspiration for future getaways</h5>
        <Nav variant="tabs" defaultActiveKey="/popular">
          <NavItem className="px-2">
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
          {itemList.map((item) => {
            return (
              <FooterItem title={item.title} description={item.description} />
            );
          })}
          <Col>
            <div className="pt-3 text-right">
              <a href="/more">Show more</a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
function FooterItem({ title = 'Demo', description = 'Demo Desc' }) {
  return (
    <Col xs={6} sm={3} md={2}>
      <ul className="list-unstyled">
        <li>
          <strong>{title}</strong>
        </li>
        <li>{description}</li>
      </ul>
    </Col>
  );
}
