import React from "react";
import { Wrap } from "./style";
import darkArrow from "../../../assets/icons/arrow-dark.svg?react";
import styled from "styled-components";

const Icon = styled(darkArrow)`
  width: 20px;
  height: 20px;
  transform: translateY(4px);
`;

const Cart = ({ prop, onClick, item }) => {
  return (
    <Wrap>
      <Wrap.Img>
        <img loading="lazy" src={prop?.img} alt="" />
      </Wrap.Img>
      <Wrap.Content>
        <Wrap.Date>
          <span className="left">{prop?.left}</span>
          <span className="date">{item?.event_date?.split("T")[0]}</span>
        </Wrap.Date>
        <Wrap.Title onClick={onClick}>
          {item?.title}
          <div className="bottom"></div>
        </Wrap.Title>
      </Wrap.Content>
    </Wrap>
  );
};

export default Cart;
