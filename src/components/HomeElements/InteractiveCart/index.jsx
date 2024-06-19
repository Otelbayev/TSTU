import React from "react";
import { Wrap } from "./style";
import { NavLink } from "react-router-dom";
import intIcon1 from "../../../assets/icons/intIcon1.svg";

const InteractiveCart = ({ prop }) => {
  return (
    <Wrap data-aos={"zoom-in"}>
      <img src={intIcon1} alt="" />
      <NavLink className={"title"} to={`${prop?.url_}`} target="_blank">
        {prop?.title} <i className="fa-solid fa-arrow-right"></i>
      </NavLink>
    </Wrap>
  );
};

export default InteractiveCart;
