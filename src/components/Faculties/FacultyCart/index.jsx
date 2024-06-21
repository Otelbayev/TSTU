import React from "react";
import { Container, Content } from "./style";
import fak from "../../../assets/icons/fakdark.png";

const FacultyCart = ({ item, onClick }) => {
  return (
    <Container onClick={onClick}>
      <Content>
        <Content.Front>
          <Content.Icon loading="lazy" src={item?.url || fak} />
          <Content.Title>{item?.title}</Content.Title>
        </Content.Front>
      </Content>
    </Container>
  );
};

export default FacultyCart;
