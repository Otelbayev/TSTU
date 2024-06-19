import styled from "styled-components";

export const Layout = styled.div`
  margin: 40px 0 20px;
  .flex {
    display: grid;
    margin: 20px 0;
    grid-template-rows: auto;
    gap: 10px;
    &__item1 {
      grid-column: 1/3;
    }
    &__item2 {
      grid-column: 3/4;
    }
    &__item3 {
      grid-column: 4/5;
    }
    &__item4 {
      grid-column: 1/2;
    }
    &__item5 {
      grid-column: 2/3;
    }
    &__item6 {
      grid-column: 3/5;
    }
    @media (max-width: 900px) {
      grid-template-rows: repeat(3, auto);
      &__item1 {
        grid-column: 1/2;
      }
      &__item2 {
        grid-column: 2/3;
      }
      &__item3 {
        grid-column: 1/2;
      }
      &__item4 {
        grid-column: 2/3;
      }
      &__item5 {
        grid-column: 1/2;
      }
      &__item6 {
        grid-column: 2/3;
      }
    }
    @media (max-width: 650px) {
      grid-template-rows: 300px auto auto 300px auto auto;
      &__item1 {
        grid-column: 1/2;
        order: 1;
      }
      &__item2 {
        grid-column: 1/2;
        order: 2;
      }
      &__item3 {
        grid-column: 1/2;
        order: 3;
      }
      &__item4 {
        grid-column: 1/2;
        order: 6;
      }
      &__item5 {
        grid-column: 1/2;
        order: 5;
      }
      &__item6 {
        grid-column: 1/2;
        order: 4;
      }
    }
  }
`;
