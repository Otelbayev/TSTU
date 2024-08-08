import styled from "styled-components";

export const Content = styled.div`
  padding: 50px 0 20px;
  position: relative;
`;

export const Layout = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 30px 0;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

Layout.Item = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
  @media (max-width: 1000px) {
    flex-direction: column;
    width: 100%;
  }
`;

Layout.Second = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
  .radio {
    padding: 10px 0;
    font-size: 16px;
    color: var(--titleDark);
  }
  @media (max-width: 700px) {
    flex-direction: column;
    /* align-items: flex-start; */
  }
`;

export const Grid = styled.div`
  padding: 20px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 15px;
  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }
  @media (max-width: 530px) {
    grid-template-columns: 1fr;
    grid-gap: 5px;
    padding: 0 20px;
  }
`;

export const Flex = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  padding: 40px 0;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;
