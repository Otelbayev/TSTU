import React from "react";
import { Icon, Wrap } from "./style";
import { NavLink } from "react-router-dom";

const InteractiveCart = ({ prop }) => {
  return (
    <Wrap data-aos={"zoom-in"}>
      <div>{prop?.icon}</div>
      <NavLink className={"title"} to={prop?.link}>
        {prop?.title} <Icon />
      </NavLink>
    </Wrap>
  );
};

export default InteractiveCart;
