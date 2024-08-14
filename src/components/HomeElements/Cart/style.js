import styled from "styled-components";

export const Wrap = styled.div`
  cursor: pointer;
  height: 100%;
  background: #fff;
  border-radius: 4px;
  border: 1px solid var(--date);
  background: var(--titleLight);
  @media (max-width: 650px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  overflow: hidden;
`;

Wrap.Img = styled.div`
  height: 60%;
  overflow: hidden;
  background: ${({ src }) => `url(${src})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: 0.3s;
  @media (max-width: 650px) {
    width: 45%;
    height: 100%;
  }
`;

Wrap.Content = styled.div`
  overflow: hidden;
  background: #fff;
  padding: 5px 18px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media (max-width: 650px) {
    padding: 20px;
    width: 55%;
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
    white-space: nowrap;
  }
`;

Wrap.Title = styled.span`
  color: var(--titleDark);
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  .icon {
    margin-left: 5px;
  }
`;
