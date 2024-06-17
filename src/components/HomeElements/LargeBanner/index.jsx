import React from "react";
import { Large, Icons } from "./style";

const LargeBanner = ({ prop, onClick, item }) => {
  console.log(item);
  return (
    <Large $img={prop?.img}>
      <div>
        <Large.Date>
          <span>
            {prop?.leftIcon && prop?.leftIcon} {prop?.left}
          </span>
          <span>
            {prop?.rightIcon && prop?.rightIcon}
            {item?.event_date?.split("T")[0]}
          </span>
        </Large.Date>
        <Large.Title onClick={onClick}>
          {item?.title} <Icons.LightArrow />
          <div className="bottom"></div>
        </Large.Title>
        <Large.Desc>{item?.description}</Large.Desc>
      </div>
    </Large>
  );
};

export default LargeBanner;
