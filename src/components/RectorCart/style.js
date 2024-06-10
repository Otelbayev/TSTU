import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 500px;
`;

export const Content = styled.div`
  position: absolute;
  transform-style: preserve-3d;
  width: 100%;
  height: 100%;
  transition: all 0.5s ease;
  .position {
    color: var(--date);
    text-align: center;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .name {
    color: var(--titleDark);
    text-align: center;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
    padding: 5px 0;
  }
  &:hover {
    transform: rotateY(180deg);
  }
`;

Content.Front = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 9px;
  border: 1px solid #cecece;
  img {
    width: 100%;
    height: 75%;
  }
`;

Content.Back = styled.div`
  padding: 30px;
  position: absolute;
  border-radius: 9px;
  width: 100%;
  height: 100%;
  border: 1px solid #007aff;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  text-align: center;
  img {
    border-radius: 50%;
    width: 120px;
    height: 120px;
  }
  .desc {
    color: var(--date);
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .wrap {
    display: flex;
    align-items: center;
    text-align: start;
    margin: 20px;
    gap: 10px;
    img {
      width: 40px;
      height: 40px;
    }
    .phone {
      color: var(--date);
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px; /* 160% */
    }
  }
`;
