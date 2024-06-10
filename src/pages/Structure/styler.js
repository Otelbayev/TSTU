import styled from "styled-components";

export const Container = styled.div`
  margin: 50px 0;
  .structure-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;
    border-bottom: 2px solid var(--titleDark);
    &__logo {
      height: 60px;
    }
    &__title {
      font-size: 30px;
      font-weight: 700;
      text-transform: uppercase;
      color: var(--titleDark);
    }
  }
  .structute-content {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
    margin-top: 40px;
    &__item {
      border: 1px solid var(--minDate);
      text-align: center;
      padding: 5px;
      border-radius: 5px;
      cursor: pointer;
      transition: 0.3s;
      &:hover {
        transform: scale(1.05);
      }
    }
  }
`;
