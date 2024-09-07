import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CardComponent from '../components/Card/Card';
import { list } from '../assets/cards-list';

export default function Catalog() {
  return (
    <div>
      <Container fluid className="px-4">
        <Row>
          {list.map((item, index) => {
            return (
              <Col md={3} sm={4}>
                <CardComponent key={index} details={item} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
