import React from "react";
import { Content } from "./style";
import { NavLink } from "react-router-dom";
import kaf from "../../../assets/images/kafedra.png";

const KafedraCart = ({ prop, dataAos, $slider, onClick }) => {
  return (
    <Content data-aos={dataAos} onClick={onClick} $slider={$slider}>
      <img src={kaf} alt="" className="img" />
      <div className="flex-name">
        <NavLink className="name">
          {prop?.title} <i className="fa-solid fa-arrow-right"></i>
        </NavLink>
      </div>
    </Content>
  );
};

export default KafedraCart;
