import React from "react";
import { Content } from "./style";
import flag from "../../../assets/New/flag.png";
import { getDate } from "../../../utils/month";
const NewsCart = ({ prop, onClick, dataAos }) => {
  return (
    <Content onClick={onClick} data-aos={dataAos}>
      <img loading="lazy" src={prop?.img || flag} alt="" />
      <div className="news-cart-bottom">
        <div className="news-cart-bottom__mintitle">
          {prop?.blog_category_?.title ||
            prop?.blog_category_translation_?.title}
        </div>
        <div className="news-cart-bottom__title">{prop?.title}</div>
        <div className="news-cart-bottom__date">
          <span>
            {prop?.blog_category_?.title ||
              prop?.blog_category_translation_?.title}
          </span>
          <span>{getDate(prop?.event_date?.split("T")[0])}</span>
        </div>
      </div>
    </Content>
  );
};

export default NewsCart;
