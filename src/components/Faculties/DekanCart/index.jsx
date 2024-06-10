import React from "react";
import { NavLink } from "react-router-dom";
import { Content } from "./style";

const DekanCart = ({ name, position, links, img }) => {
  return (
    <Content data-aos="zoom-in">
      <Content.Img loading="lazy" src={img || "none"} />
      <Content.Name>{name || "none"}</Content.Name>
      <Content.Position>{position || "none"}</Content.Position>
      <Content.Media>
        <NavLink to={`/${links && links[0]}`}>
          <Content.Facebook />
        </NavLink>
        <NavLink to={`/${links && links[0]}`}>
          <Content.Whatsup />
        </NavLink>
        <NavLink to={`/${links && links[0]}`}>
          <Content.Instagram />
        </NavLink>
      </Content.Media>
    </Content>
  );
};

export default DekanCart;
