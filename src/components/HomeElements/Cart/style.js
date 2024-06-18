import styled from "styled-components";
import icon from "../../../assets/icons/arrow-dark.svg";

export const Wrap = styled.div`
  border-radius: 4px;
  border: 1px solid var(--date);
  background: var(--titleLight);
  height: 100%;
  @media (max-width: 650px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

Wrap.Img = styled.div`
  overflow: hidden;
  height: 60%;
  img {
    width: 100%;
    height: 100%;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    transition: transform 0.3s;
    &:hover {
      transform: scale(1.1);
    }
  }
  @media (max-width: 650px) {
    width: 45%;
    height: 100%;
  }
`;

Wrap.Content = styled.div`
  background: #fff;
  padding: 5px 18px;
  @media (max-width: 650px) {
    padding: 20px;
  }
`;

Wrap.Date = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .left {
    color: var(--bgHover);
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
  }
  .date {
    color: var(--minDate);
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
  }
`;

Wrap.Title = styled.div`
  color: #01426f;
  font-weight: 700;
  font-size: 20px;
  display: inline-block;
  border: 1px solid red;
  &::after {
    content: url(${icon});
    display: inline-block;
  }
`;
