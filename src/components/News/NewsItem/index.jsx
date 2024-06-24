import React from "react";
import { Large, Btn } from "./style";
import { useLanguageContext } from "../../../context/LanguageContext";
import { getDate } from "./../../../utils/month";
import newcar from "../../../assets/New/newcar.png";

const NewsItem = ({ prop, onClick }) => {
  const { language } = useLanguageContext();
  return (
    <Large $img={prop?.img || newcar}>
      <div>
        <Large.Date>
          <span>
            {prop?.blog_category_?.title ||
              prop?.blog_category_translation_?.title}
          </span>
          <span>{getDate(prop?.event_date?.split("T")[0])}</span>
        </Large.Date>
        <Large.Title>{prop?.title}</Large.Title>
        <Btn onClick={onClick}>
          {language === "uz"
            ? "Batafsil"
            : language === "ru"
            ? "Подробнее"
            : "More"}
        </Btn>
      </div>
    </Large>
  );
};

export default NewsItem;
