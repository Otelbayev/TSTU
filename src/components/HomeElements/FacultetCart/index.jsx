import React from "react";
import { Content } from "./style";

const FacultetCart = ({ prop, id, onClick }) => {
  return (
    <Content selected={id === prop?.id ? true : false} onClick={onClick}>
      <div className="content">
        <div className="content__left">
          <img
            loading="lazy"
            src={`${import.meta.env.VITE_BASE_URL_IMG}${prop?.img_icon_?.url}`}
            alt=""
          />
        </div>
        <div className="content__right">
          <div className="content__right__title">{prop?.title}</div>
        </div>
      </div>
    </Content>
  );
};

export default FacultetCart;
