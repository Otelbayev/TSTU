import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: ${({ selected }) =>
    selected === true ? "var(--bgHover)" : "#cceeff80"};
  padding: 5px 16px;
  gap: 15px;
  cursor: pointer;
  transition: 0.3s;
  .title {
    transition: 0.3s;
    font-size: 18px;
    font-weight: 600;
    line-height: 27px;
    color: ${({ selected }) =>
      selected === true ? "#fff" : "var(--fakColor)"};
  }
  img {
    width: 70px;
    height: 70px;
    object-fit: cover;
  }
  .line {
    width: 2px;
    height: 40px;
    background: #fff;
  }
`;
