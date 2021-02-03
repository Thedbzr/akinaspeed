import React from 'react';
import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Carousel.css';

export default function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel className="scrollItems" activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            //wide banner
            src="https://i.imgur.com/j5SW4FW.png"
            alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            //wide banner
            src="https://i.imgur.com/oQG8wWK.png"
            alt="Second slide"
            />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            //wide banner
            src="https://i.imgur.com/KIQjpUQ.png"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    );
}