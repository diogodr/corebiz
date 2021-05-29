import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 146px ;
  background-color: #F2F2F2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: 276px;
  }

  h1 {
    font-size: 21px;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      width: 287px;
    }
  }

  form {
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }
    
    input {
      margin-right: 8px;
      border: none;
      width: 280px;
      padding-left: 8px;
      height: 48px;
      border-radius: 5px;

      @media (max-width: 768px) {
        margin-bottom: 8px;
      }
    }

    button {
      border: none;
      width: 140px;
      height: 48px;
      background-color: #000;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
      border-radius: 5px;

      @media (max-width: 768px) {
        width: 288px;
      }
    }
  }
`;