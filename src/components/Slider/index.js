import React, { useState } from 'react';
import Carousel from 'react-elastic-carousel';

import { Container } from './styles';
import slideImg from '../../assets/slideImg.svg'
import mobileSlideImg from '../../assets/mobileSlideImg.svg'

export function Slider() {
  const widthScreem = window.innerWidth;
  const [isMobile, setIsMobile] = useState(widthScreem < 768);

  return (
    <Container>
      <div className="styling-example">
        {isMobile ? (
          <Carousel className="slide-mobile" enableAutoPlay autoPlaySpeed={3000}>
            <img src={mobileSlideImg} alt="slide" />
            <img src={mobileSlideImg} alt="slide" />
            <img src={mobileSlideImg} alt="slide" />
            <img src={mobileSlideImg} alt="slide" />
          </Carousel>
        ) : (
          <Carousel enableAutoPlay autoPlaySpeed={3000}>
            <img src={slideImg} alt="slide" />
            <img src={slideImg} alt="slide" />
            <img src={slideImg} alt="slide" />
            <img src={slideImg} alt="slide" />
          </Carousel>
        )}

      </div>
    </Container>
  );
}