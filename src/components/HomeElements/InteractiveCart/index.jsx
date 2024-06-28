import React from "react";
import { Wrap } from "./style";
import { NavLink } from "react-router-dom";

const InteractiveCart = ({ prop, no }) => {
  return (
    <Wrap data-aos={!no && "zoom-in"}>
      <img
        src={`../../../../public/api/${
          prop?.icon_?.url || prop?.icon_translation_?.url
        }`}
        alt=""
      />
      <NavLink className={"title"} to={`${prop?.url_}`} target="_blank">
        {prop?.title} <i className="fa-solid fa-arrow-right"></i>
      </NavLink>
    </Wrap>
  );
};

export default InteractiveCart;
