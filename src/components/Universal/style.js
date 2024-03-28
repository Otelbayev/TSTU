import styled from "styled-components";

export const Line = styled.div`
  background: var(--titleLight);
  height: 2px;
  margin: 20px 0;
  @media (max-width: 1000px) {
    display: none;
  }
`;
