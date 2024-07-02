import React, { useEffect } from "react";
import { Container, Content } from "./style";
import email from "../../assets/icons/rectorEmail.png";
import phone from "../../assets/icons/rectorPhone.png";
import { NavLink } from "react-router-dom";
import { useLanguageContext } from "../../context/LanguageContext";

const RectorCart = ({ data }) => {
  const { language } = useLanguageContext();

  useEffect(() => {}, [language]);

  return (
    <Container>
      <Content className="content">
        <Content.Front>
          <img
            loading="lazy"
            src={`${import.meta.env.VITE_BASE_URL}/${
              data?.persons_?.img_?.url ||
              data?.persons_translation_?.persons_?.img_?.url
            }`}
            alt=""
          />
          <div className="position">
            {data?.persons_?.employee_type_?.title ||
              data?.persons_translation_?.persons_?.employee_type_?.title}{" "}
            , {data?.degree}
          </div>
          <div className="name">
            {data?.persons_?.firstName || data?.persons_translation_?.firstName}{" "}
            {data?.persons_?.lastName || data?.persons_translation_?.lastName}{" "}
            {data?.persons_?.fathers_name ||
              data?.persons_translation_?.fathers_name}
          </div>
        </Content.Front>
        <Content.Back>
          <img
            loading="lazy"
            src={`${import.meta.env.VITE_BASE_URL}/${
              data?.persons_?.img_?.url ||
              data?.persons_translation_?.persons_?.img_?.url
            }`}
            alt=""
          />
          <div className="position">
            {data?.persons_?.employee_type_?.title ||
              data?.persons_translation_?.persons_?.employee_type_?.title}{" "}
            , {data?.degree}
          </div>
          <div className="name">
            {data?.persons_?.firstName} {data?.persons_?.lastName}{" "}
            {data?.persons_?.fathers_name}
          </div>
          <div className="desc">{data?.desc}</div>
          <div className="wrap">
            <img loading="lazy" src={phone} alt="" />
            <div>
              <div className="phone">{data?.phone_number1}</div>
              <div className="phone">2</div>
            </div>
          </div>
          <div className="wrap">
            <img loading="lazy" src={email} alt="" />
            <div>
              <div className="phone">1</div>
              <div className="phone">1</div>
            </div>
          </div>
          <NavLink
            className={"btn btn-primary"}
            to={`/${language}/employee/${
              language === "uz" ? data?.id : data?.persons_data_id
            }`}
          >
            Batafsil
          </NavLink>
        </Content.Back>
      </Content>
    </Container>
  );
};

export default RectorCart;
