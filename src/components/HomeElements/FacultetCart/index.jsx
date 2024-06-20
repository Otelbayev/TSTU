import React from "react";
import { Content } from "./style";
import facIcon from "../../../assets/Faculties/facItem.svg";
import facIcon2 from "../../../assets/Faculties/faclight.svg";

const FacultetCart = ({ prop, id, onClick }) => {
  return (
    <Content selected={id === prop?.id ? true : false} onClick={onClick}>
      <div className="icon">
        <img loading="lazy" src={id === prop?.id ? facIcon2 : facIcon} alt="" />
      </div>
      <div className="line"></div>
      <div className="title">{prop?.title}</div>
    </Content>
  );
};

export default FacultetCart;
