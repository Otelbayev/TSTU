import styled from "styled-components";

export const Content = styled.div`
  padding: 50px 0 20px;
  position: relative;
  .video-cart-video {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    display: ${({ $modal }) => ($modal === "true" ? "flex" : "none")};
    align-items: center;
    justify-content: center;
    overflow: auto;
    cursor: pointer;
    &::-webkit-scrollbar {
      display: none;
    }
    video {
      width: fit-content;
      height: fit-content;
      max-width: 80%;
      max-height: 80%;
      border-radius: 3px;
      z-index: 12;
    }
    &__bg {
      position: absolute;
      top: 0;
      left: 0;
      background: transparent;
      width: 100%;
      height: 100%;
    }
  }
`;

export const Layout = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 30px 0;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

Layout.Item = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  @media (max-width: 1000px) {
    flex-direction: column;
    width: 100%;
  }
`;

Layout.Second = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
  @media (max-width: 700px) {
    flex-direction: column;
    /* align-items: flex-start; */
  }
`;

export const Grid = styled.div`
  padding: 20px 0 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 15px;
  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }
  @media (max-width: 530px) {
    grid-template-columns: 1fr;
    grid-gap: 5px;
  }
`;

export const Flex = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  padding: 40px 0;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;
