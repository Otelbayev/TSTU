import React from "react";
import { Contianer } from "./style";
import { Icons } from "../../pages/Home/style";
import kafedra from "../../assets/images/kafedra.png";

const IlmiyMarkazCart = ({ img, title, p, $border, onClick, dataAos }) => {
  return (
    <Contianer $border={$border} data-aos={dataAos}>
      <div className="item" onClick={onClick}>
        <img src={img || kafedra} alt="" className="item__img" />
        <div className="bottom-back">
          <div className="item__title">
            {title || "Temir yo‘l transporti ilmiy tadqiqot markazi"}
          </div>
          <div className="item__p">
            {p ||
              "Markaz professor-o‘qituvchilarning ilmiy-texnikaviy faoliyatinatijalarini tijoratlashtirishning samarali....."}
          </div>
        </div>
        <div className="item__button">
          Ko‘proq malumot olish <Icons.LightArrow />
        </div>
      </div>
    </Contianer>
  );
};

export default IlmiyMarkazCart;
