import React from "react";
import { Container, Content } from "./style";

const FacultyCart = ({ img, title, back, onClick }) => {
  return (
    <Container onClick={onClick}>
      <Content>
        <Content.Front>
          <Content.Icon src={img} />
          <Content.Title>{title}</Content.Title>
        </Content.Front>
        <Content.Back>
          <img src={back} alt="" />
          <Content.MinTitle>{title}</Content.MinTitle>
        </Content.Back>
      </Content>
    </Container>
  );
};

export default FacultyCart;
