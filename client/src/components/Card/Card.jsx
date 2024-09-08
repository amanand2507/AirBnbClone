import React, { useState } from 'react';
import { Carousel, Card } from 'react-bootstrap';

function CardComponent({
  details = {
    rating: '4',
    desc: 'Beach and Sunset Views',
    imgSrc: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqg5siFywtSULLeH0eaN3k6cBQy_HSnJpJGQ&usqp=CAU',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lpibo-ew-1656015868.jpg',
      'https://www.travelandleisure.com/thmb/BJupPeakYV7RY_vQQnmvrKAl7LU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/soneva-jani-sunset-view-maldives-SONEVA0421-74b37591d80441ce87831a41da518e49.jpg',
      'https://i0.wp.com/theluxuryeditor.com/wp-content/uploads/2019/02/178793622.jpg?resize=1024%2C683',
    ],
    price: '20000',
    date: '15-20 May',
    title: 'Hotel 0000',
  },
}) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Card className="m-3 my-4 border-0">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {details.imgSrc.map((image, i) => (
          <Carousel.Item key={i}>
            <img
              className="d-block w-100 rounded-4"
              height="250px"
              src={image}
              alt={image}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <Card.Body className="mx-0 px-0">
        <div className="fs-6 fw-bold">{details.title}</div>
        <div className="fs-6">{details.desc}</div>
        <div className="fs-6 fw-bold">{details.date}</div>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
