import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Content } from "./style";
import { useLanguageContext } from "../../../context/LanguageContext";

const DekanCart = ({ data }) => {
  const naviagte = useNavigate();
  const { language } = useLanguageContext();
  return (
    <Content data-aos="zoom-in">
      <Content.Img
        onClick={() => naviagte(`/${language}/employee/${data?.id}`)}
        loading="lazy"
        src={`../../../../public/api/${data?.persons_?.img_?.url}`}
      />
      <Content.Name
        onClick={() => naviagte(`/${language}/employee/${data?.id}`)}
      >
        {data?.persons_?.firstName} {data?.persons_?.lastName}{" "}
        {data?.persons_?.fathers_name}
      </Content.Name>
      <Content.Position>
        {data?.persons_?.employee_type_?.title ||
          data?.persons_?.employee_type_translation?.title}
      </Content.Position>
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
