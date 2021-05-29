import React from 'react';

import { Container, Content } from './styles';
import slideImg from '../../assets/slideImg.svg'

export function Slider() {
  return (
    <Container>
      <Content>
        <img src={slideImg} alt="slide" />
        <img src={slideImg} alt="slide" />
        <img src={slideImg} alt="slide" />
        <img src={slideImg} alt="slide" />
      </Content>
    </Container>
  );
}