import React from "react";
import { Container } from "./style";

const FacultyCart = ({ item, onClick }) => {
  return (
    <Container
      onClick={onClick}
      $bg={`../../../../public/api/${item?.img_?.url}`}
    >
      <div className="card">
        <div className="card-front">
          <img
            loading="lazy"
            src={`../../../../public/api/${item?.img_icon_?.url}`}
          />
          <p className="card-title">{item?.title}</p>
        </div>
        <div className="card-back">
          <p className="card-title">{item?.title}</p>
        </div>
      </div>
    </Container>
  );
};

export default FacultyCart;
