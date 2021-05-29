import React from 'react';

import { Container } from './styles';
import emailIcon from '../../assets/emailIcon.svg';
import phoneIcon from '../../assets/phoneIcon.svg';
import minLogoImg from '../../assets/minLogoImg.svg';
import vtexImg from '../../assets/vtexImg.svg';

function Localization() {
  return (
    <Container>
      <div>
        <h1>Localização</h1>
        <div className="border"></div>
        <p>Avenida Andrômeda, 2000. Bloco 6 e 8</p>
        <p>Alphavile SP</p>
        <p>brasil@corebiz.ag</p>
        <p>+55 11 3090 1039</p>
      </div>
      <div>
        <button>
          <img src={emailIcon} alt="email" />
          <p>ENTRE EM CONTATO</p>
        </button>
        <button>
          <img src={phoneIcon} alt="email" />
          <p>FALE COM O NOSSO<br />CONSULTOR ONLINE</p>
        </button>
      </div>
      <div className="min-logos">
        <div className="min-logo">
          <p>Created by</p>
          <img src={minLogoImg} alt="corebiz" />
        </div>
        <div className="min-logo">
          <p>Powered by</p>
          <img src={vtexImg} alt="vtex" />
        </div>
      </div>
    </Container>
  );
}

export default Localization;