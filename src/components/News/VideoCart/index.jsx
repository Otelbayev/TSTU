import React from "react";
import { Content, Icon } from "./style";
import { NavLink } from "react-router-dom";
import { useLanguageContext } from "../../../context/LanguageContext";
import videoflag from "../../../assets/New/flags.png";

const VideoCart = ({ prop, dataAos, to, state }) => {
  const { language } = useLanguageContext();

  const [modal, setModal] = state || [null, () => {}];
  return (
    <Content data-aos={dataAos}>
      <div className="video-cart-left" onClick={() => setModal(!modal)}>
        <img loading="lazy" src={prop?.img || videoflag} alt="" />
        <Icon className="video-cart-icon" />
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
