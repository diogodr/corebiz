import React, { useState } from 'react';
import Carousel from 'react-elastic-carousel';
import sapatoImg from '../../assets/sapato.svg'
import starsImg from '../../assets/starsImg.svg'

import { Container, Content } from './styles';


function Products() {
  const widthScreem = window.innerWidth;
  const [isMobile, setIsMobile] = useState(widthScreem < 768);
  return (
    <Container>
      <Content>
        <h1>Mais vendidos</h1>
        <div className="border"></div>
        {isMobile ? (
          <Carousel itemsToShow={2}>
            <div className="carousel-item">
              <img src={sapatoImg} alt="sapato" />
              <p>SAPATO FLOATER PRETO</p>
              <img src={starsImg} alt="" />
              <h2>por R$ 259,90</h2>
              <p>ou em 9x de R$ 28,87</p>
              <button>COMPRAR</button>
            </div>
            <div className="carousel-item">
              <img src={sapatoImg} alt="sapato" />
              <p>SAPATO FLOATER PRETO</p>
              <img src={starsImg} alt="" />
              <h2>por R$ 259,90</h2>
              <p>ou em 9x de R$ 28,87</p>
              <button>COMPRAR</button>
            </div>
            <div className="carousel-item">
              <img src={sapatoImg} alt="sapato" />
              <p>SAPATO FLOATER PRETO</p>
              <img src={starsImg} alt="" />
              <h2>por R$ 259,90</h2>
              <p>ou em 9x de R$ 28,87</p>
              <button>COMPRAR</button>
            </div>
            <div className="carousel-item">
              <img src={sapatoImg} alt="sapato" />
              <p>SAPATO FLOATER PRETO</p>
              <img src={starsImg} alt="" />
              <h2>por R$ 259,90</h2>
              <p>ou em 9x de R$ 28,87</p>
              <button>COMPRAR</button>
            </div>
            <div className="carousel-item">
              <img src={sapatoImg} alt="sapato" />
              <p>SAPATO FLOATER PRETO</p>
              <img src={starsImg} alt="" />
              <h2>por R$ 259,90</h2>
              <p>ou em 9x de R$ 28,87</p>
              <button>COMPRAR</button>
            </div>
            <div className="carousel-item">
              <img src={sapatoImg} alt="sapato" />
              <p>SAPATO FLOATER PRETO</p>
              <img src={starsImg} alt="" />
              <h2>por R$ 259,90</h2>
              <p>ou em 9x de R$ 28,87</p>
              <button>COMPRAR</button>
            </div>
            <div className="carousel-item">
              <img src={sapatoImg} alt="sapato" />
              <p>SAPATO FLOATER PRETO</p>
              <img src={starsImg} alt="" />
              <h2>por R$ 259,90</h2>
              <p>ou em 9x de R$ 28,87</p>
              <button>COMPRAR</button>
            </div>
            <div className="carousel-item">
              <img src={sapatoImg} alt="sapato" />
              <p>SAPATO FLOATER PRETO</p>
              <img src={starsImg} alt="" />
              <h2>por R$ 259,90</h2>
              <p>ou em 9x de R$ 28,87</p>
              <button>COMPRAR</button>
            </div>
          </Carousel>
        ) : (
          <Carousel itemsToShow={4}>
            <div className="carousel-item">
              <img src={sapatoImg} alt="sapato" />
              <p>SAPATO FLOATER PRETO</p>
              <img src={starsImg} alt="" />
              <h2>por R$ 259,90</h2>
              <p>ou em 9x de R$ 28,87</p>
              <button>COMPRAR</button>
            </div>
            <div className="carousel-item">
              <img src={sapatoImg} alt="sapato" />
              <p>SAPATO FLOATER PRETO</p>
              <img src={starsImg} alt="" />
              <h2>por R$ 259,90</h2>
              <p>ou em 9x de R$ 28,87</p>
              <button>COMPRAR</button>
            </div>
            <div className="carousel-item">
              <img src={sapatoImg} alt="sapato" />
              <p>SAPATO FLOATER PRETO</p>
              <img src={starsImg} alt="" />
              <h2>por R$ 259,90</h2>
              <p>ou em 9x de R$ 28,87</p>
              <button>COMPRAR</button>
            </div>
            <div className="carousel-item">
              <img src={sapatoImg} alt="sapato" />
              <p>SAPATO FLOATER PRETO</p>
              <img src={starsImg} alt="" />
              <h2>por R$ 259,90</h2>
              <p>ou em 9x de R$ 28,87</p>
              <button>COMPRAR</button>
            </div>
            <div className="carousel-item">
              <img src={sapatoImg} alt="sapato" />
              <p>SAPATO FLOATER PRETO</p>
              <img src={starsImg} alt="" />
              <h2>por R$ 259,90</h2>
              <p>ou em 9x de R$ 28,87</p>
              <button>COMPRAR</button>
            </div>
            <div className="carousel-item">
              <img src={sapatoImg} alt="sapato" />
              <p>SAPATO FLOATER PRETO</p>
              <img src={starsImg} alt="" />
              <h2>por R$ 259,90</h2>
              <p>ou em 9x de R$ 28,87</p>
              <button>COMPRAR</button>
            </div>
            <div className="carousel-item">
              <img src={sapatoImg} alt="sapato" />
              <p>SAPATO FLOATER PRETO</p>
              <img src={starsImg} alt="" />
              <h2>por R$ 259,90</h2>
              <p>ou em 9x de R$ 28,87</p>
              <button>COMPRAR</button>
            </div>
            <div className="carousel-item">
              <img src={sapatoImg} alt="sapato" />
              <p>SAPATO FLOATER PRETO</p>
              <img src={starsImg} alt="" />
              <h2>por R$ 259,90</h2>
              <p>ou em 9x de R$ 28,87</p>
              <button>COMPRAR</button>
            </div>
          </Carousel>
        )}

      </Content>
    </Container>
  );
}

export default Products;