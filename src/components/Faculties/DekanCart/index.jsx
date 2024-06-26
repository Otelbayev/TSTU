import React from "react";
import { NavLink } from "react-router-dom";
import { Content } from "./style";

const DekanCart = ({ data }) => {
  return (
    <Content data-aos="zoom-in">
      <Content.Img loading="lazy" src={data?.img_?.url || "none"} />
      <Content.Name>
        {data?.persons_?.firstName} {data?.persons_?.lastName}{" "}
        {data?.persons_?.fathers_name}
      </Content.Name>
      <Content.Position>{data?.degree || "Position"}</Content.Position>
      <Content.Media>
        <NavLink>
          <Content.Facebook />
        </NavLink>
        <NavLink>
          <Content.Whatsup />
        </NavLink>
        <NavLink>
          <Content.Instagram />
        </NavLink>
      </Content.Media>
    </Content>
  );
};

export default DekanCart;
