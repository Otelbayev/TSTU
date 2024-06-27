import styled, { css } from "styled-components";
import bg from "../../assets/images/employe-bg.png";

const scrollStyle = css`
  &::-webkit-scrollbar {
    width: 4px;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-track {
    background: #d2d2d2;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--bgHover);
  }
`;

export const Container = styled.div`
  background: url(${bg});
  .employee {
    height: 100dvh;
    overflow: hidden;
    display: flex;
    &__first-item {
      height: 100dvh;
      overflow: hidden;
      background: #fff;
      padding: 25px;
      width: 30%;
    }
    &__second-item {
      background: #fff;
      margin: 20px;
      width: 70%;
      overflow-y: auto;
      overflow-x: hidden;
      padding: 15px;
      ${scrollStyle}
    }
  }

  @media (max-width: 1000px) {
    .employee {
      &__first-item {
      }
      &__second-item {
        margin: 10px;
      }
    }
  }
`;
