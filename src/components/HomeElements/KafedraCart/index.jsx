import React from "react";
import { Content } from "./style";
import { NavLink } from "react-router-dom";

const KafedraCart = ({ prop, dataAos, $slider, onClick }) => {
  return (
    <Content data-aos={dataAos} onClick={onClick} $slider={$slider}>
      <img
        src={`${import.meta.env.VITE_BASE_URL}/${
          prop?.img_?.url || prop?.img_translation_?.url
        }`}
        alt=""
        className="img"
      />
      <div className="flex-name">
        <NavLink className="name">
          {prop?.title} <i className="fa-solid fa-arrow-right"></i>
        </NavLink>
      </div>
    </Content>
  );
};

export default KafedraCart;
