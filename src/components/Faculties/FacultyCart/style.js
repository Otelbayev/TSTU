import styled from "styled-components";

export const Container = styled.div`
  perspective: 1000px;
  height: 250px;

  .card {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.6s;
  }

  &:hover .card {
    transform: rotateY(180deg);
  }

  .card-front,
  .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #cecece;
    border-radius: 3px;
    cursor: pointer;
  }
  .card-title {
    color: var(--titleDark);
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
    padding: 16px;
    z-index: 2;
  }

  .card-front {
    background-color: #fff;
    transition: 0.3s;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 19px 16px;
    img {
      width: 64px;
    }
  }

  .card-back {
    transform: rotateY(180deg);
    background-image: ${({ $bg }) => `url(${$bg})`};

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    align-items: end;
    p {
      color: #fff;
    }
    &::after {
      content: "";
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.3);
      border-radius: 3px;
    }
  }

  .card-back img {
    max-width: 100%;
    max-height: 100%;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
`;

Content.Front = styled.div`
  cursor: pointer;
  transition: 0.3s;
  width: 100%;
  height: 100%;
  border-radius: 3px;
  border: 1px solid #cecece;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 19px 16px;
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
`;
Content.Title = styled.div`
  color: var(--titleDark);
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  padding: 16px;
`;
Content.Icon = styled.img`
  width: 64px;
`;
