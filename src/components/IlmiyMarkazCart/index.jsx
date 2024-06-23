import React from "react";
import { Contianer, Icons } from "./style";
import kafedra from "../../assets/images/kafedra.png";
import { useNavigate } from "react-router-dom";
import { useLanguageContext } from "../../context/LanguageContext";

const IlmiyMarkazCart = ({ $border, to, item, dataAos, style }) => {
  const navigate = useNavigate();
  const { language } = useLanguageContext();
  return (
    <Contianer
      $border={$border}
      data-aos={dataAos}
      onClick={() => navigate(`/${language}/${to}`)}
      style={style}
    >
      <div className="item">
        <img
          loading="lazy"
          src={item?.img || kafedra}
          alt=""
          className="item__img"
        />
        <div className="bottom-back">
          <div className="item__title">
            {item?.title || "Temir yo‘l transporti ilmiy tadqiqot markazi"}
          </div>
          <div className="item__p">
            {item?.description ||
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
