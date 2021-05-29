import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  .rec.rec-arrow {
    display: none;
  }
  
  .rec.rec-carousel {
    background-color: #000;
  }

  .rec.rec-dot {
    margin-top: -50px;
    z-index: 20;
    height: 10px;
    width: 10px;
    background: #BDBDBD;
    box-shadow: none;

    @media (max-width: 768px) {
      margin-top: -35px;
      z-index: 20;
      height: 7px;
      width: 7px;
    }
  }

  .rec.rec-slider-container {
    margin: 0;
  }
  
  .rec.rec-dot_active {
    background: #F8475F;
    box-shadow: none;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;





