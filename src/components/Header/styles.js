import styled from "styled-components";

export const Container = styled.div`
  height: 80px;
  background-color: #fff;

  display: flex;
  align-items: center;
  justify-content: space-around;

  .logo {
    width: 170.14px;
    height: 41px;
  }

  .dot {
    width: 9.05px;
    height: 9.08px;
  }

  nav {
    display: flex;

    .input-search {
      border-bottom: 1px solid #7A7A7A;
      margin-right: 44px;
      width: 100%;

      input {
        width: 100%;
        border: none;      
        width: 718px;

        @media (max-width: 1600px) {
          width: 518px;
        }

        @media (max-width: 1280px) {
          width: 318px;
        }
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