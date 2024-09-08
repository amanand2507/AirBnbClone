import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CardComponent from '../components/Card/Card';
import IconMenu from '../components/IconMenu/IconMenu';

import axios from 'axios';

export default function Catalog() {
  const [list, setList] = useState([]);
  const getList = async () => {
    try {
      const data = await axios.get('http://localhost:3000/place');
      console.log(data);
      setList(data?.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getList();
  }, []);

  return (
    <div>
      <IconMenu />
      <Container fluid className="px-4">
        <Row>
          {list?.map((item, index) => {
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
