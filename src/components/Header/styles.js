import styled from "styled-components";

export const Container = styled.div`
  height: 80px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 340px;
  width: 100%;

  @media (max-width: 1340px) {
    margin: 0 140px;
  }

  .logo {
    width: 170.14px;
    height: 41px;
    margin: 0 30px; 
  }

  nav {
    display: flex;
    width: 100%;
    max-width: 760px;
    margin-right: 30px;

    .input-search {
      display: flex;
      border-bottom: 1px solid #7A7A7A;
      margin-right: 44px;
      width: 100%;

      input {
        width: 100%;
        border: none;
        width: 100%;
      }
    }

    .my-account {
      display: flex;
      align-items: center;
      p {
        margin-left: 6px;
        color: #7A7A7A;
        white-space: nowrap;
      }
    }

    .buy-car {
      margin-left: 21px;
      display: flex;
      align-items: center;

      div {
        margin-left: 5px;
        display: flex;
        align-items: center;
        justify-content: center;

        width: 14px;
        height: 14px;
        padding: 2px;
        background-color: #F8475F;
        border-radius: 50%;
      }

      p {
        font-size: 10px;
        color: #fff;
      }
    }
  }
`;