import React, { useState } from "react";
import { Content, Icon } from "./style";

const VideoCart = ({ prop, dataAos, onClick, state }) => {
  const [modal, setModal] = state || [null, () => {}];
  return (
    <Content data-aos={dataAos}>
      <div className="video-cart-left" onClick={() => setModal(!modal)}>
        <img src={prop?.img} alt="" />
        <Icon className="video-cart-icon" />
      </div>
      <div className="video-cart-right">
        <div className="video-cart-right__date">
          <span>{prop?.left}</span>
          <span>{prop?.right}</span>
        </div>
        <div className="video-cart-right__title">{prop?.title}</div>
        <div className="video-cart-right__desc">{prop?.desc}</div>
        <button className="video-cart-right__button" onClick={onClick}>
          Batafsil
        </button>
      </div>
    </Content>
  );
};

export default VideoCart;
