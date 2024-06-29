import React from "react";
import { Large, Icons } from "./style";
import { getDate } from "../../../utils/month";

const LargeBanner = ({ onClick, item, type }) => {
  return (
    <Large
      $img={`/public/api/${
        item?.img_?.url || item?.img_translation_?.url
      }`}
      onClick={onClick}
    >
      <div>
        <Large.Date>
          {type === "news" && <span>TOP istalgani </span>}
          <span>
            {type === "events" && <i className="fa-solid fa-calendar-days"></i>}{" "}
            {(type === "news" || type === "events") &&
              `TSTU | ${getDate(item?.event_date?.split("T")[0])}`}
          </span>
          {type === "events" && (
            <span>
              <i className="fa-solid fa-user"></i> Pedagok
            </span>
          )}
        </Large.Date>
        <Large.Title className="bannner-title">
          {item?.title}
          <i
            className="fa-solid fa-arrow-right"
            style={{ color: "#fff", marginLeft: "5px" }}
          ></i>
          <div className="bottom"></div>
        </Large.Title>
        <Large.Desc className="bannner-desc">{item?.description}</Large.Desc>
      </div>
    </Large>
  );
};

export default LargeBanner;
