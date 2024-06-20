import React from "react";
import { Contianer, Icons } from "./style";
import kafedra from "../../assets/images/kafedra.png";
import { useNavigate } from "react-router-dom";
import { useLanguageContext } from "../../context/LanguageContext";

const IlmiyMarkazCart = ({ img, title, p, $border, to, dataAos }) => {
  const navigate = useNavigate();
  const { language } = useLanguageContext();
  return (
    <Contianer
      $border={$border}
      data-aos={dataAos}
      onClick={() => navigate(`/${language}/${to}`)}
    >
      <div className="item">
        <img loading="lazy" src={img || kafedra} alt="" className="item__img" />
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
