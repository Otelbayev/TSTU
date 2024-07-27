import React from "react";
import { Content } from "./style";

const FacultetCart = ({ prop, id, onClick }) => {
  return (
    <Content selected={id === prop?.id ? true : false} onClick={onClick}>
      <div className="icon">
        <img
          loading="lazy"
          src={`${import.meta.env.VITE_BASE_URL_IMG}${prop?.img_icon_?.url}`}
          alt=""
        />
      </div>
      <div className="line"></div>
      <div className="title">{prop?.title}</div>
    </Content>
  );
};

export default FacultetCart;
