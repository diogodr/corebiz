import { render } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import Carousel from 'react-elastic-carousel';
import sapatoImg from '../../assets/sapato.svg'
import starImg from '../../assets/star.svg'
import starOutlineImg from '../../assets/starOutline.svg'
import { api } from '../../services/api';

import { Container, Content } from './styles';

function Products() {
  const widthScreem = window.innerWidth;
  const [isMobile, setIsMobile] = useState(widthScreem < 768);

  const [products, setProducts] = useState([]);

  async function getProducts() {
    const response = await api.get('/products')
    setProducts(response.data);
    console.log("Response: ", products);
  }

  function renderStars(stars) {
    const response = [];
    for (let i = 0; i < 5; i++) {
      response.push(
        <img height="10" width="10" src={i < stars ? starImg : starOutlineImg} alt="Estrelas" />
      )
    }
    return response;
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container>
      <Content>
        <h1>Mais vendidos</h1>
        <div className="border"></div>
        <Carousel itemsToShow={isMobile ? 2 : 4}>
          {products.map(product => (
            <div className="carousel-item">
              <img src={product.imageUrl} alt="produto" />
              <p>{product.productName}</p>
              <div className="stars-container">
                {renderStars(product.stars)}
              </div>
              {product.listPrice ? (
                <p className="list-price">de {Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(product.listPrice / 100)}</p>
              ) : (
                <p style={{ color: '#fff' }}> - </p>
              )}
              <h2>{Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(product.price / 100)}</h2>
              {product.installments.map(installment => (
                <p>ou em {installment.quantity}x de {Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(installment.value / 100)}</p>
              ))}
              <button>COMPRAR</button>
            </div>
          ))}
        </Carousel>
      </Content>
    </Container>
  );
}

export default Products;