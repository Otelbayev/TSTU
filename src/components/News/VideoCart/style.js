import styled from "styled-components";
import play from "../../../assets/New/player.svg?react";

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  .video-cart-left {
    position: relative;
    cursor: pointer;
    img {
      width: 287.5px;
      height: 249px;
    }
    &:hover {
      .video-cart-icon {
        transform: translate(-50%, -50%) scale(1.4);
      }
    }
  }
  .video-cart-right {
    &__date {
      display: flex;
      align-items: center;
      gap: 15px;
      color: var(--minDate);
    }
    &__title {
      color: var(--titleDark);
      font-size: 18px;
      font-weight: 700;
      padding: 5px 0;
    }
    &__desc {
      font-size: 16px;
      font-weight: 400;
      color: #808080;
    }
    &__button {
      background: transparent;
      border: none;
      font-size: 16px;
      font-weight: 500;
      cursor: pointer;
      color: var(--titleDark);
    }
  }
  .video-cart-video {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: red;
  }
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Icon = styled(play)`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 0.4s;
`;
