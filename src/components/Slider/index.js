import React from 'react';
import Carousel from 'react-elastic-carousel';

import { Container } from './styles';
import slideImg from '../../assets/slideImg.svg'
import mobileSlideImg from '../../assets/mobileSlideImg.svg'

export function Slider() {
  const widthScreem = window.innerWidth;
  const isMobile = widthScreem < 768;

  return (
    <Container>
      <div className="styling-example">
        <Carousel className={isMobile ? "slide-mobile" : ""} enableAutoPlay autoPlaySpeed={3000}>
          <img src={isMobile ? mobileSlideImg : slideImg} alt="slide" />
          <img src={isMobile ? mobileSlideImg : slideImg} alt="slide" />
          <img src={isMobile ? mobileSlideImg : slideImg} alt="slide" />
          <img src={isMobile ? mobileSlideImg : slideImg} alt="slide" />
        </Carousel>
      </div>
    </Container>
  );
}