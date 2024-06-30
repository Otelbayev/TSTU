import styled from "styled-components";

export const Container = styled.div`
  height: 500px;
  perspective: 1000px;
  &:hover .content {
    transform: rotateY(180deg);
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
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
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  padding: 30px;
  border-radius: 9px;
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
