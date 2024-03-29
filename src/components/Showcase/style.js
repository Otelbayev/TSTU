import styled from "styled-components";

export const Container = styled.div`
  height: calc(100dvh - 50px);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Img = styled.img`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  object-fit: cover;
`;

export const Wrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 110px;
  @media screen and (max-width: 900px) {
    padding: 0 70px;
  }
`;

export const Title = styled.img`
  max-width: 900px;
  width: 100%;
  display: ${({ display }) => (display === "desktop" ? "block" : "none")};
  @media (max-width: 650px) {
    display: ${({ display }) => (display === "mobile" ? "block" : "none")};
  }
`;
