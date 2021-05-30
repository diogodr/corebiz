import React, { useState } from 'react';

import { Container, Content } from './styles';
import logoImg from '../../assets/logo.svg'
import searchIconImg from '../../assets/searchIcon.svg'
import personIconImg from '../../assets/personIcon.svg'
import carIconImg from '../../assets/carIcon.svg'
import { HeaderMobile } from './HeaderMobile'

export function Header() {
  const widthScreem = window.innerWidth;
  const [isMobile, setIsMobile] = useState(widthScreem < 700);
  return (
    <>
      {isMobile ? (
        <HeaderMobile />
      ) : (
        <Container >
          <Content>
            <img className="logo" src={logoImg} alt="corebiz" />
            <nav>
              <div className="input-search">
                <input type="text" placeholder="O que está procurando?" />
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
          </Content>
        </Container>
      )
      }
    </>

  );
}