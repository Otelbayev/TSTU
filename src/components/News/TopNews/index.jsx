import React from "react";
import { Container } from "./style";
import { NavLink } from "react-router-dom";
import { useLanguageContext } from "../../../context/LanguageContext";

const TopNews = ({ dataAos, data }) => {
  const { language } = useLanguageContext();

  return (
    <Container data-aos={dataAos}>
      <div className="contnet">
        <div className="content__title">TOP Yangilik</div>
        <div className="content__wrap">
          {data?.slice(0, 10).map((e) => (
            <NavLink
              className="content__wrap__item"
              to={`/${language}/blog/${e?.id}`}
              key={e?.id}
            >
              {e?.title}
            </NavLink>
          ))}
        </div>
        <NavLink className="content__btn" to={`/${language}/blog`}>
          See More
        </NavLink>
      </div>
    </Container>
  );
};

export default TopNews;
