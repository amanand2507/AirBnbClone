import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './IconMenu.css';

const IconMenu = () => {
  const categories = [
    { icon: 'bi bi-star-fill', label: 'Icons' },
    { icon: 'bi bi-water', label: 'Amazing pools' },
    { icon: 'bi bi-tree', label: 'Farms' },
    { icon: 'bi bi-image', label: 'Amazing views' },
    { icon: 'bi bi-cup-hot', label: 'Bed & breakfasts' },
    { icon: 'bi bi-house', label: 'Rooms' },
    { icon: 'bi bi-tree-fill', label: 'Treehouses' },
    { icon: 'bi bi-house-door', label: 'Tiny homes' },
    { icon: 'bi bi-house', label: 'Cabins' },
    { icon: 'bi bi-star-fill', label: 'Icons' },
    { icon: 'bi bi-water', label: 'Amazing pools' },
    { icon: 'bi bi-tree', label: 'Farms' },
    { icon: 'bi bi-image', label: 'Amazing views' },
    { icon: 'bi bi-cup-hot', label: 'Bed & breakfasts' },
    { icon: 'bi bi-house', label: 'Rooms' },
    { icon: 'bi bi-tree-fill', label: 'Treehouses' },
    { icon: 'bi bi-house-door', label: 'Tiny homes' },
    { icon: 'bi bi-house', label: 'Cabins' },
  ];

  const [start, setStart] = useState(0);

  function next() {
    setStart((prev) => prev + 1);
  }

  return (
    <Container fluid className="icon-menu-container py-3 border-bottom">
      <Row className="text-center">
        {categories.slice(start, start + 11).map((category, index) => (
          <Col
            key={index}
            xs={6}
            sm={4}
            md={3}
            lg={1}
            className="icon-category"
          >
            <i className={`${category.icon} icon-class`}></i>
            <p>{category.label}</p>
          </Col>
        ))}
        <Col md={1} className="icon-category">
          <i className="bi bi-chevron-right icon-class" onClick={next}></i>
        </Col>
      </Row>
    </Container>
  );
};

export default IconMenu;
