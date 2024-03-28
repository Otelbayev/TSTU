import React from "react";
import { Content } from "./style";
import { NavLink } from "react-router-dom";

const KafedraCart = ({ prop, dataAos, $slider, onClick }) => {
  return (
    <Content data-aos={dataAos} onClick={onClick} $slider={$slider}>
      <img src={prop?.img} alt="" className="img" />
      <div className="flex-name">
        <NavLink className="name" to={prop?.path}>
          {prop?.name} {prop?.arrow && prop.arrow}
        </NavLink>
      </div>
    </Content>
  );
};

export default KafedraCart;
