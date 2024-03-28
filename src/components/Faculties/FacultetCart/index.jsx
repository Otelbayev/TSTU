import React from "react";
import { Content } from "./style";

const FacultetCart = ({ prop, id, onClick }) => {
  return (
    <Content selected={id === prop.id ? true : false} onClick={onClick}>
      <div className="icon">
        <img src={id === prop.id ? prop.light : prop.icon} alt="" />
      </div>
      <div className="line"></div>
      <div className="title">{prop?.title}</div>
    </Content>
  );
};

export default FacultetCart;
