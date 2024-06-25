import React from "react";
import { Container, Content } from "./style";
import fak from "../../../assets/icons/fakdark.png";

const FacultyCart = ({ item, onClick }) => {
  return (
    <Container onClick={onClick}>
      <div class="card">
        <div class="card-front">
          <img loading="lazy" src={item?.url || fak} />
          <p className="card-title">{item?.title}</p>
        </div>
        <div class="card-back">
          <p className="card-title">{item?.title}</p>
        </div>
      </div>
    </Container>
  );
};

export default FacultyCart;
