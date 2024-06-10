import styled from "styled-components";

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 75px;
  row-gap: 45px;
  padding: 60px 0;
  @media (max-width: 1100px) {
    gap: 20px;
  }
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
