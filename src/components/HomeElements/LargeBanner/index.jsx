import React from "react";
import { Large } from "./style";
import { Icons } from "../../../pages/Home/style";

const LargeBanner = ({ prop, onClick }) => {
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
        <Large.Title onClick={onClick}>
          {prop?.title} <Icons.LightArrow />
          <div className="bottom"></div>
        </Large.Title>
        <Large.Desc>{prop?.desc}</Large.Desc>
      </div>
    </Large>
  );
};

export default LargeBanner;
