import React, { useState } from "react";
import { Container } from "./style";
import icon from "../../../assets/icons/sidebar1.png";
import { NavLink } from "react-router-dom";
import { useLanguageContext } from "../../../context/LanguageContext";

const Content = ({ hover, setHover, title, desc, data }) => {
  const { language } = useLanguageContext();

  const res = data?.filter((e) => e?.high_menu);
  const res1 = data.filter((e) => !e.high_menu);

  return (
    <Container
      $hover={hover}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="left">
        <div className="left__top">
          <img src={icon} alt="" className="left__top__icon" />
          <div className="left__top__title">{title}</div>
        </div>
        <div className="left__desc">{desc}</div>
      </div>
      <div className="right">
        {res
          .sort((a, b) => a?.high_menu - b?.high_menu)
          .map((e) => {
            return (
              <div className="right__item">
                <div className="right__title">{e.title}</div>
                {res1
                  .filter((item) => item?.parent_id === e?.id)
                  .sort((a, b) => a?.position - b?.position)
                  .map((item) => (
                    <div key={item.id} className={"right__link"}>
                      <NavLink to={`/${language}/page/${item.id}`}>
                        {item.title}
                      </NavLink>
                    </div>
                  ))}
              </div>
            );
          })}
      </div>
    </Container>
  );
};

export default Content;


<div class="container">
  <div class="item">
    <div class="item-title">Title</div>
    <div className="item-link">link1</div>
    <div className="item-link">link2</div>
    <div className="item-link">link3</div>
    <div className="item-link">link4</div>
    <div className="item-link">link5</div>
  </div>
  <div class="item">
    <div class="item-title">Title</div>
    <div className="item-link">link1</div>
    <div className="item-link">link2</div>
    <div className="item-link">link3</div>
    <div className="item-link">link4</div>
    <div className="item-link">link5</div>
  </div>
  <div class="item">
    <div class="item-title">Title</div>
    <div className="item-link">link1</div>
    <div className="item-link">link2</div>
    <div className="item-link">link3</div>
    <div className="item-link">link4</div>
    <div className="item-link">link5</div>
  </div>
  <div class="item">
    <div class="item-title">Title</div>
    <div className="item-link">link1</div>
    <div className="item-link">link2</div>
    <div className="item-link">link3</div>
    <div className="item-link">link4</div>
    <div className="item-link">link5</div>
  </div>
  <div class="item">
    <div class="item-title">Title</div>
    <div className="item-link">link1</div>
    <div className="item-link">link2</div>
    <div className="item-link">link3</div>
    <div className="item-link">link4</div>
    <div className="item-link">link5</div>
  </div>
  <div class="item">
    <div class="item-title">Title</div>
    <div className="item-link">link1</div>
    <div className="item-link">link2</div>
    <div className="item-link">link3</div>
    <div className="item-link">link4</div>
    <div className="item-link">link5</div>
  </div>
  <div class="item">
    <div class="item-title">Title</div>
    <div className="item-link">link1</div>
    <div className="item-link">link2</div>
    <div className="item-link">link3</div>
    <div className="item-link">link4</div>
    <div className="item-link">link5</div>
  </div>
  
</div>