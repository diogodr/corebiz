import React from 'react';

import { Container } from './styles';

function Promotions() {
  return (
    <Container>
      <h1>Participe de nossas news com promoções e novidades!</h1>
      <form action="">
        <input placeholder="Digite seu nome" type="text" />
        <input placeholder="Digite seu email" type="text" />
        <button>Eu quero!</button>
      </form>
    </Container>
  );
}

export default Promotions;