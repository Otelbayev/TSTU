import styled from "styled-components";
import lightArrow from "../../../assets/icons/arrow-light.svg?react";

export const Icons = styled.div``;
Icons.LightArrow = styled(lightArrow)``;

export const Large = styled.div`
  background: ${({ $img }) => `url(${$img})`};
  transition: 0.3s;
  border-radius: 4px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  cursor: pointer;
  transition: transform 0.3s ease;
  overflow: hidden;
  &:hover {
    .bannner-title {
      .bottom {
        opacity: 1;
      }
    }
    & > div {
      height: 60%;
      .bannner-desc {
        display: block;
      }
    }
  }

  & > div {
    transition: 0.3s;
    height: 45%;
    display: flex;
    flex-direction: column;
    justify-content: end;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    left: 0;
    bottom: 0;
    width: 100%;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(9, 0, 41, 0.7) 50%,
      rgba(9, 0, 41, 1) 100%
    );
    padding: 20px;
    gap: 5px;

    .bannner-desc {
      display: none;
    }
  }

  @media (max-width: 700px) {
    min-height: 250px;
  }

  @media (max-width: 600px) {
    & > div {
      padding: 8px;
    }
  }
`;

Large.Date = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding-bottom: 5px;
  color: var(--titleLight);
  font-weight: 400;
  font-size: 15px;
  span {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  @media (max-width: 600px) {
    font-size: 14px;
    gap: 5px;
    span {
      gap: 3px;
    }
  }
`;
Large.Title = styled.div`
  font-size: 19px;
  font-style: normal;
  width: fit-content;
  font-weight: 700;
  display: flex;
  align-items: center;
  color: var(--titleLight);
  position: relative;
  z-index: 1;
  cursor: pointer;
  display: inline-block;
  .bottom {
    transition: 0.3s;
    position: absolute;
    bottom: 4px;
    height: 8px;
    width: 100%;
    background: var(--btnBg);
    transform: skew(-30deg);
    z-index: -5;
    opacity: 0;
  }
`;

Large.Desc = styled.div`
  font-family: "Poppins";
  color: #fdfdfd;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: -0.03em;
  text-align: left;
`;
