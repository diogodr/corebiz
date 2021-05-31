import React, { useContext, useEffect, useState } from 'react';
import Carousel from 'react-elastic-carousel';
import starImg from '../../assets/star.svg'
import starOutlineImg from '../../assets/starOutline.svg'
import { api } from '../../services/api';
import { CounterCartContext } from '../hooks/useItems';
import { useWindowSize } from '../hooks/useWindowSize';

import { Container, Content } from './styles';

function Products() {
  const [count, setCount] = useContext(CounterCartContext);
  const [selectedProduct, setSelectedProduct] = useState();
  const [products, setProducts] = useState([]);

  const [width] = useWindowSize();

  const [isMobile, setIsMobile] = useState(width < 768)

  useEffect(() => {
    setIsMobile(width < 768);
  }, [width]);

  function handleSelectedDiv(id) {
    setSelectedProduct(id);
    console.log(selectedProduct)
  }

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

  function handleBuy() {
    setCount(count + 1)
  }

  function formatCurrency(price) {
    return Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(price / 100)
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
            <div key={product.productId} className={product.productId === selectedProduct ? "active-carousel-item" : "carousel-item"}>
              <img onClick={() => handleSelectedDiv(product.productId)} src={product.imageUrl} alt="produto" />
              <p> {product.productName}</p>
              <div className="stars-container">
                {renderStars(product.stars)}
              </div>
              {product.listPrice && (<p className="list-price">de {formatCurrency(product.listPrice)}</p>)}
              <h2>{formatCurrency(product.price)}</h2>
              {product.installments.map(installment => (
                <p key={installment.quantity}>ou em {installment.quantity}x de {formatCurrency(installment.value)}</p>
              ))}
              {product.productId === selectedProduct && <button onClick={handleBuy}>COMPRAR</button>}
            </div>
          ))}
        </Carousel>
      </Content >
    </Container >
  );
}

export default Products;