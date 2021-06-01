import React, { useEffect, useState } from 'react';
import Carousel from 'react-elastic-carousel';

import { Container } from './styles';

import slideImg from '../../assets/slideImg.svg'
import mobileSlideImg from '../../assets/mobileSlideImg.svg'
import { useWindowSize } from '../hooks/useWindowSize';

export function Slider() {
  const [width] = useWindowSize();

  const [isMobile, setIsMobile] = useState(width < 768)

  useEffect(() => {
    setIsMobile(width < 768);
  }, [width]);

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