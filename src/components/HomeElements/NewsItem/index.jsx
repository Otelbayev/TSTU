import React from "react";
import { News } from "./style";

const NewsItem = ({ prop: { day, month, year, where, title, link } }) => {
  return (
    <News>
      <div className="item-left">
        <div>{day}</div> <div className="dek">{month}</div>
      </div>
      <div className="item-center">
        <div className="item-center__title">{title}</div>
        <div className="item-center__subtitle">
          {month} {day}, {year} | {where}
        </div>
      </div>
      <div className="item-right">
        <a href="#" className="item-right__link">
          {link}
        </a>
      </div>
    </News>
  );
};

export default NewsItem;
