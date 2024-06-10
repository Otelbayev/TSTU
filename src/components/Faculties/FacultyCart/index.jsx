import React from "react";
import { Container, Content } from "./style";

const FacultyCart = ({ img, title, back, onClick }) => {
  return (
    <Container onClick={onClick}>
      <Content>
        <Content.Front>
          <Content.Icon loading="lazy" src={img} />
          <Content.Title>{title}</Content.Title>
        </Content.Front>
      </Content>
    </Container>
  );
};

export default FacultyCart;
