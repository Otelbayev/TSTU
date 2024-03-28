import React from "react";
import { Large, Btn } from "./style";

const NewsItem = ({ prop, onClick }) => {
  return (
    <Large $img={prop?.img}>
      <div>
        <Large.Date>
          <span>
            {prop?.leftIcon && prop?.leftIcon} {prop?.left}
          </span>
          <span>
            {prop?.rightIcon && prop?.rightIcon} {prop?.right}
          </span>
        </Large.Date>
        <Large.Title>{prop?.title}</Large.Title>
        <Btn onClick={onClick}>{prop?.button}</Btn>
      </div>
    </Large>
  );
};

export default NewsItem;
