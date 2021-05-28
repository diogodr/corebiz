import React from 'react';

import { Container } from './styles';
import logoImg from '../../assets/logo.svg'
import dotImg from '../../assets/dot.svg'
import searchIconImg from '../../assets/searchIcon.svg'
import personIconImg from '../../assets/personIcon.svg'
import carIconImg from '../../assets/carIcon.svg'

export function Header() {
  return (
    <Container >
      <div>
        <img className="logo" src={logoImg} alt="corebiz" />
        <img className="dot" src={dotImg} alt="corebiz" />
      </div>
      <nav>
        <div className="input-search">
          <input type="search" placeholder="O que está procurando?" />
          <img src={searchIconImg} alt="corebiz" />
        </div>
        <div className="my-account">
          <img src={personIconImg} alt="corebiz" />
          <p>Minha Conta</p>
        </div>
        <div className="buy-car">
          <img src={carIconImg} alt="corebiz" />
          <div>
            <p>1</p>
          </div>
        </div>
      </nav>
    </Container>
  );
}