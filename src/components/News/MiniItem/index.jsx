import React from "react";
import { Container } from "./style";

const MiniItem = ({ prop, onClick }) => {
  return (
    <Container>
      <div>
        <div className="mini-item-title" onClick={onClick}>
          {prop?.title}
        </div>
        <div className="mini-item-date">
          <span>{prop?.left}</span>
          <span>{prop?.right}</span>
        </div>
      </div>
    </Container>
  );
};

export default MiniItem;
