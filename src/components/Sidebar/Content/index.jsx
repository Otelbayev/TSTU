import React, { useState } from "react";
import { Container } from "./style";
import icon from "../../../assets/icons/sidebar1.png";
import { NavLink } from "react-router-dom";
import { useLanguageContext } from "../../../context/LanguageContext";

const Content = ({ hover, setHover, title, desc, data, id }) => {
  const { language } = useLanguageContext();

  const res = data?.filter((e) => e?.high_menu);
  const res1 = data?.filter((e) => !e.high_menu);

  const setNavigate = (type, id, link) => {
    switch (type) {
      case "Link":
        return `${link}`;
      case "Blog":
        return `/${language}/blog/${id}`;
      case "Page":
        return id ? `/${language}/page/${id}` : `/${language}/${link}`;
      case "Faculty":
        return id ? `/${language}/department/${id}` : `/${language}/faculty`;
      case "Kafedra":
        return id ? `/${language}/department/${id}` : `/${language}/kafedra`;
      case "Department":
        return `/${language}/department/${id}`;

      case "Havola":
        return `${link}`;
      case "Blog":
        return `/${language}/blog/${id}`;
      case "Sahifa":
        return id ? `/${language}/page/${id}` : `/${language}/${link}`;
      case "Fakultet":
        return id ? `/${language}/department/${id}` : `/${language}/faculty`;
      case "Bo'lim":
        return `/${language}/department/${id}`;
    }
  };

  return (
    <Container
      $hover={hover}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {title && (
        <div className="left">
          <div className="left__top">
            <img src={icon} alt="" className="left__top__icon" />
            <div className="left__top__title">{title}</div>
          </div>
          <div className="left__desc">{desc}</div>
        </div>
      )}
      <div className="right">
        {res?.length ? (
          res
            .sort((a, b) => a?.high_menu - b?.high_menu)
            .map((e) => {
              return (
                <div key={e.id} className="right__item">
                  <div className="right__title">{e.title}</div>
                  {res1
                    ?.filter((item) => item?.parent_id === e?.id)
                    ?.sort((a, b) => a?.position - b?.position)
                    ?.map((item) => (
                      <div key={item.id} className={"right__link"}>
                        <NavLink
                          onClick={() => setHover(false)}
                          to={setNavigate(
                            item?.menu_type_?.title ||
                              item?.menu_type_translation_?.menu_type_?.title,
                            item?.blog_?.id ||
                              item?.blog_translation_?.blog_id ||
                              item?.departament_?.id ||
                              item?.departament_translation_?.departament_id ||
                              item?.page_?.id ||
                              item?.page_translation_?.page_id,
                            item?.link_
                          )}
                          target={item?.link_ ? "_blank" : "_self"}
                        >
                          {item?.title}
                        </NavLink>
                      </div>
                    ))}
                </div>
              );
            })
        ) : (
          <div className="right__item">
            {res1
              ?.filter((item) => item?.parent_id === id || id === "alldata")
              ?.sort((a, b) => a?.position - b?.position)
              ?.map((item) => (
                <div key={item.id} className={"right__link"}>
                  <NavLink
                    onClick={() => setHover(false)}
                    to={setNavigate(
                      item?.menu_type_?.title ||
                        item?.menu_type_translation_?.menu_type_?.title,
                      item?.blog_?.id ||
                        item?.blog_translation_?.blog_id ||
                        item?.departament_?.id ||
                        item?.departament_translation_?.departament_id ||
                        item?.page_?.id ||
                        item?.page_translation_?.page_id,
                      item?.link_
                    )}
                    target={item?.link_ ? "_blank" : "_self"}
                  >
                    {item?.title}
                  </NavLink>
                </div>
              ))}
          </div>
        )}
      </div>
    </Container>
  );
};

export default Content;
