import React from "react";
import { Wrap } from "./style";
import darkArrow from "../../../assets/icons/arrow-dark.svg?react";
import styled from "styled-components";
import { getDate } from "../../../utils/month";

const Icon = styled(darkArrow)`
  width: 20px;
  height: 20px;
  transform: translateY(4px);
`;

const Cart = ({ onClick, item }) => {
  return (
    <Wrap onClick={onClick}>
      <Wrap.Img>
        <img
          loading="lazy"
          src={`../../../../public/api/${
            item?.img_?.url || item?.img_translation_?.url
          }`}
          alt=""
        />
      </Wrap.Img>
      <Wrap.Content>
        <Wrap.Date>
          <span className="left">Ta'lim</span>
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
