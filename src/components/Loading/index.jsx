import React from "react";
import styled from "styled-components";
import loading from "../../Admin/assets/icons/trainloading.gif";

const Div = styled.div`
  width: 100%;
  height: ${({ $height }) => $height && "100dvh"};
  display: grid;
  place-items: center;
  margin: 50px 0;
  img {
    width: 400px;
    /* height: 100px; */
  }
`;
const Loading = ({ height }) => {
  return (
    <Div $height={height}>
      <img src={loading} alt="" />
    </Div>
  );
};

export default Loading;
