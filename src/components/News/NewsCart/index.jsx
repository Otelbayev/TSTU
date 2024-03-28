import React from "react";
import { Content } from "./style";

const NewsCart = ({ prop, onClick, dataAos }) => {
  return (
    <Content onClick={onClick} data-aos={dataAos}>
      <img src={prop?.img} alt="" />
      <div className="news-cart-bottom">
        <div className="news-cart-bottom__mintitle">{prop?.mintitle}</div>
        <div className="news-cart-bottom__title">{prop?.title}</div>
        <div className="news-cart-bottom__date">
          <span>{prop?.left}</span>
          <span>{prop?.right}</span>
        </div>
      </div>
    </Content>
  );
};

export default NewsCart;
