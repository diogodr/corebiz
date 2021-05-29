import React from 'react';

import { Container } from './styles';
import { Header } from '../../components/Header'
import { Slider } from '../../components/Slider'
import Products from '../../components/Products';
import Promotions from '../../components/Promotions';
import Localization from '../../components/Localization';


function Home() {
  return (
    <Container >
      <Header />
      <Slider />
      <Products />
      <Promotions />
      <Localization />
    </Container>

  );
}

export default Home;