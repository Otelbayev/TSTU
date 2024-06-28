import React, { useEffect, useState } from "react";
import { Content } from "../Centers/style";

import center from "../../assets/images/center.jpg";
import { NavLink } from "react-router-dom";
import { useLanguageContext } from "./../../context/LanguageContext/index";

const Department = () => {
  const [data, setData] = useState([]);
  const { language } = useLanguageContext();

  useEffect(() => {
    fetch(
      language === "uz"
        ? "/api/departament/getalldepartamenttypesite/Bo%27lim"
        : `/api/departament/getalldepartamenttranslationtypesite/Bo%27lim?language_code=${language}`
    )
      .then((res) => res.json())
      .then((res) => setData(res));
  }, [language]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="root-container">
      <div className="root-wrapper">
        <Content>
          {data.map((item) => (
            <NavLink
              to={item?.id}
              key={item?.id}
              style={{ textDecoration: "none" }}
            >
              <Content.Item>
                <Content.Img
                  loading="lazy"
                  src={item?.img_?.url || item?.img_translation_?.url}
                />
                <Content.Title>{item?.title}</Content.Title>
                <Content.P>{item?.description}</Content.P>
              </Content.Item>
            </NavLink>
          ))}
        </Content>
      </div>
    </div>
  );
};

export default Department;
