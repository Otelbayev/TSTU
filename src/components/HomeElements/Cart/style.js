import styled from "styled-components";

export const Wrap = styled.div`
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid var(--date);
  background: var(--titleLight);
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
  display: flex;
  flex-direction: column;
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

Wrap.Title = styled.span`
  color: var(--titleDark);
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  padding: 10px 0;
  .icon {
    margin-left: 5px;
  }
`;
