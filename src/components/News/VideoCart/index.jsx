import React from "react";
import { Content } from "./style";
import { NavLink } from "react-router-dom";
import { useLanguageContext } from "../../../context/LanguageContext";

const VideoCart = ({ prop, dataAos, to }) => {
  const { language } = useLanguageContext();

  return (
    <Content data-aos={dataAos}>
      <div className="video-cart-left">
        <img
          loading="lazy"
          src={`/public/api/${
            prop?.img_?.url || prop?.img_translation_?.ur
          }`}
          alt=""
        />
      </div>
      <div className="video-cart-right">
        <div className="video-cart-right__date">
          <span>{prop?.left}</span>
          <span>{prop?.right}</span>
        </div>
        <div className="video-cart-right__title">{prop?.title}</div>
        <div className="video-cart-right__desc">{prop?.description}</div>
        <NavLink to={`/${language}/${to}`} className="video-cart-right__button">
          {language === "uz"
            ? "Batafsil"
            : language === "ru"
            ? "Подробнее"
            : "More"}
        </NavLink>
      </div>
    </Content>
  );
};

export default VideoCart;
