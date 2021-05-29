import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
`;

export const Content = styled.div`
  display: flex;  
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  width: 100%;

  img {
    margin-left: -2px;
    width: 100%;
    height: 100%;
    scroll-snap-align: start;
  }
`;