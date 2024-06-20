import React from "react";
import { News } from "./style";
import { getDate } from "./../../../utils/month";
import { NavLink } from "react-router-dom";
import { useLanguageContext } from "../../../context/LanguageContext";

const NewsItem = ({ item }) => {
  const date = getDate(item?.event_date?.split("T")[0]);
  const date1 = date?.split(",")[0]?.split(" ");
  const { language } = useLanguageContext();
  return (
    <News>
      <div className="item-left">
        <div>{date1[1]}</div> <div className="dek">{date1[0]}</div>
      </div>
      <div className="item-center">
        <div className="item-center__title">{item?.title}</div>
        <div className="item-center__subtitle">{date} | TSTU Universiteti</div>
      </div>
      <div className="item-right">
        <NavLink
          to={`/${language}/blog/${item?.id}`}
          className="item-right__link"
        >
          Batafsil
        </NavLink>
      </div>
    </News>
  );
};

export default NewsItem;
