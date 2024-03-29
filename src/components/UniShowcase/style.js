import styled, { keyframes } from "styled-components";
import uniShow from "../../assets/images/uniShow.png";
import mobile from "../../assets/images/mobileback.png";

const anim = keyframes`
  from {
    background-size: 150% 150%;
  } 
  to{
    background-size: 100% 100%;
  }
`;

export const Container = styled.div`
  background: url(${uniShow});
  background-repeat: no-repeat;
  background-size: contain;
  min-height: 350px;
  background-size: 100% 100%;
  animation: ${anim};
  animation-duration: 5s;
  @media screen and (max-width: 900px) {
    min-height: 250px;
    background: url(${mobile});
    background-repeat: no-repeat;
    background-size: cover;
  }
  @media screen and (max-width: 650px) {
    min-height: 200px;
  }
`;

Container.Title = styled.div`
  color: var(--white);
  font-size: 70px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  width: 80%;

  @media screen and (max-width: 950px) {
    font-size: 50px;
  }
  @media screen and (max-width: 650px) {
    font-size: 30px;
  }
`;
