import styled from "styled-components";
import { Button } from "../../../components/Generics";

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
  height: calc(100dvh - 75px);

  img {
    position: absolute;
    top: 0;

    /* bottom: 0; */
    width: 100%;
    height: 100%;
  }
`;

export const Content = styled.div`
  text-align: center;
`;
Content.Title = styled.div`
  color: var(--white);
  text-align: center;
  text-shadow: 0px 4px 46px rgba(0, 0, 0, 0.25);
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

Content.Btn = styled(Button)`
  padding: 8px 30px;
  font-family: "Inter";
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: -0.2px;
  color: var(--white);
  margin-top: 12px;
`;
