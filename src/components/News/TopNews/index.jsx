import React from "react";
import { Container } from "./style";
import { NavLink } from "react-router-dom";

const TopNews = ({ dataAos }) => {
  return (
    <Container data-aos={dataAos}>
      <div className="contnet">
        <div className="content__title">TOP Yangilik</div>
        <div className="content__wrap">
          <NavLink className="content__wrap__item">
            Men may be 2.5 times more likely to die from COVID-19 than women
          </NavLink>
          <NavLink className="content__wrap__item">
            Men may be 2.5 times more likely to die from COVID-19 than women
          </NavLink>
          <NavLink className="content__wrap__item">
            Men may be 2.5 times more likely to die from COVID-19 than women
          </NavLink>
          <NavLink className="content__wrap__item">
            Men may be 2.5 times more likely to die from COVID-19 than women
          </NavLink>
          <NavLink className="content__wrap__item">
            Men may be 2.5 times more likely to die from COVID-19 than women
          </NavLink>
        </div>
        <button className="content__btn">See More</button>
      </div>
    </Container>
  );
};

export default TopNews;
