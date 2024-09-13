import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-image: ${({ $bg }) => `url(${$bg})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  filter: ${({ isLoaded }) => (isLoaded ? "blur(0px)" : "blur(2px)")};
  transition: filter 0.5s ease-in-out;
  z-index: -1;

  @media screen and (max-width: 1000px) {
    height: calc(100vh - 112px);
  }
  @media screen and (max-width: 500px) {
    height: calc(100vh - 100px);
    background-image: ${({ $bgmob }) => `url(${$bgmob})`};
  }
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
  h1 {
    font-size: 60px;
    font-weight: 600;
    color: #fff;
    margin-bottom: 10px;
    font-family: "Times New Roman", Times, serif;
  }
  @media screen and (max-width: 900px) {
    padding: 0 70px;
  }
`;

export const TitleImg = styled.img`
  width: 100%;
  height: auto;
  display: ${({ display }) => (display === "desktop" ? "block" : "none")};
  @media (max-width: 650px) {
    display: ${({ display }) => (display === "mobile" ? "block" : "none")};
    width: 400px;
  }
  @media (max-width: 450px) {
    display: ${({ display }) => (display === "mobile" ? "block" : "none")};
    width: 350px;
  }
`;

export const Title = styled.h1`
  font-size: 80px !important;
  letter-spacing: 2px;
  white-space: nowrap;
  @media (max-width: 1200px) {
    font-size: 60px !important;
  }
  @media (max-width: 850px) {
    font-size: 50px !important;
    white-space: normal;
    text-align: center;
  }
`;
