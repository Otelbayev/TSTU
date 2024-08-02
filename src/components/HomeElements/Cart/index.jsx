import React from "react";
import { Wrap } from "./style";
import { getDate } from "../../../utils/month";

const Cart = ({ onClick, item }) => {
  return (
    <Wrap onClick={onClick}>
      <Wrap.Img>
        <img
          loading="lazy"
          src={`${import.meta.env.VITE_BASE_URL_IMG}${
            item?.img_?.url || item?.img_translation_?.url
          }`}
          alt=""
        />
      </Wrap.Img>
      <Wrap.Content>
        <Wrap.Date>
          <span className="left">
            {item?.blog_category_?.title ||
              item?.blog_category_translation_?.title}{" "}
          </span>
          <span className="date">
            TSTU | {getDate(item?.event_date?.split("T")[0])}
          </span>
        </Wrap.Date>
        <Wrap.Title onClick={onClick}>
          {item?.title}
          <i className="fa-solid fa-arrow-right icon"></i>
          <div className="bottom"></div>
        </Wrap.Title>
      </Wrap.Content>
    </Wrap>
  );
};

export default Cart;
