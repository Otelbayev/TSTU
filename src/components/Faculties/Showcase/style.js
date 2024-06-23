import styled from "styled-components";
import { Button } from "../../../components/Generics";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100dvh - 70px);
  background-image: ${({ $bg }) => `url(${$bg})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

`;

export const Content = styled.div`
  text-align: center;
`;
Content.Title = styled.div`
  color: var(--white);
  text-align: center;
  text-shadow: 0px 4px 46px rgba(0, 0, 0, 0.25);
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

Content.Btn = styled(Button)`
  padding: 8px 20px;
  font-family: "Inter";
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  color: var(--white);
  margin-top: 50px;
`;
