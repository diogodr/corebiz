import React from 'react';

import { Container } from './styles';
import { Header } from '../../components/Header'
import { Slider } from '../../components/Slider'
import Products from '../../components/Products';
import Promotions from '../../components/Promotions';
import Localization from '../../components/Localization';
import { CounterCartContextProvider } from '../../components/hooks/useItems';

function Home() {
  return (
    <CounterCartContextProvider>
      <Container >
        <Header />
        <Slider />
        <Products />
        <Promotions />
        <Localization />
      </Container>
    </CounterCartContextProvider>
  );
}

export default Home;