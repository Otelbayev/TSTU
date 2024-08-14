import styled from "styled-components";

export const Content = styled.div`
  .content {
    display: flex;
    align-items: stretch;
    justify-content: flex-start;
    cursor: pointer;
    transition: 0.3s;
    &__left {
      background: #cceeff80;
      border-right: 4px solid #fff;
      padding: 5px 10px;
      img {
        width: 70px;
        height: 70px;
        object-fit: cover;
      }
    }
    &__right {
      transition: 0.3s;
      background: #cceeff80;
      background: ${({ selected }) =>
        selected === true ? "var(--bgHover)" : "#cceeff80"};
      width: 100%;
      padding-left: 10px;
      &__title {
        transition: 0.3s;
        font-size: 18px;
        font-weight: 600;
        line-height: 85px;
        color: ${({ selected }) =>
          selected === true ? "#fff" : "var(--fakColor)"};
      }
    }
  }
  /* .left {
    background: #cceeff80;
  }
  .right {
    padding: 5px 16px;
    background: ${({ selected }) =>
    selected === true ? "var(--bgHover)" : "#cceeff80"};
    width: 100%;
    height: 100%;
  }
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
  } */
`;
