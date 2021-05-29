import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 213px;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: space-around;

  color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 386px;
  }

  div {
    h1 { 
      font-size: 20px;
    }
    .border {
      width: 44.94px;
      height: 0;
      border-bottom: 5px solid #FFFFFF;
      margin: 16px 0;
    }

    > p {
      font: 600;
      font-size: 12px;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 195px;
    height: 38px;
    background: #FFFFFF;
    border-radius: 5px;
    border: none;
    margin: 16px 0;

    img {
      margin-right: 12px;
    }
     p {
       font-weight: bold;
     }
  }

  .min-logos {
    display: flex;    
  }

  .min-logo {
    margin: 0 24px;
  }
`;

export const Content = styled.div`

`;