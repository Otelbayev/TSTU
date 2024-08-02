import React from "react";
import styled from "styled-components";
import logo from "../../assets/icons/logo1.png";

const Div = styled.div`
  width: 100%;
  height: 100dvh;
  display: grid;
  place-items: center;
  background-color: var(--darkBg);
  img {
    width: 154px;
    height: 40px;
  }
`;
const Loading = () => {
  return (
    <Div>
      <img src={logo} alt="" />
    </Div>
  );
};

export default Loading;
