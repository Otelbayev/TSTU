import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 3px;
  transition: 0.3s;
  opacity: ${({ $hover }) => ($hover ? "1" : "0")};
  visibility: ${({ $hover }) => ($hover ? "visible" : "hidden")};
  display: flex;
  gap: 50px;
  .left {
    width: 25%;
    &__top {
      display: flex;
      align-items: center;
      gap: 15px;
      &__icon {
        width: 30px;
        height: 30px;
      }
      &__title {
        color: #01426f;
        font-weight: 600;
        font-size: 20px;
      }
    }
    &__desc {
      padding-top: 30px;
      font-size: 16px;
      font-weight: 600;
      color: #004d82b8;
    }
  }
  .right {
    width: 75%;
    display: flex;
    gap: 5px;
    &__item {
      /* height: 350px; */
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
    }
    &__title {
      font-weight: 600;
      font-size: 14px;
      color: #a6a6a6;
      margin: 5px 0;
    }
    &__link {
      a {
        display: block;
        transition: 0.3s;
        border-radius: 2px;
        padding: 0px 8px;
        margin-left: 5px;
        border-bottom: 1px solid #ededed;
        font-weight: 600;
        font-size: 14px;
        color: #004e7d;
        &:hover {
          background-color: #ededed;
        }
      }
    }
  }
`;
