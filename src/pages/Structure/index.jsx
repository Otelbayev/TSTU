import React, { useEffect, useState } from "react";
import { Container } from "./styler";
import logo from "../../../public/logo2.png";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Structure = () => {
  const { t, i18n } = useTranslation();
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      i18n.language === "uz"
        ? `${
            import.meta.env.VITE_BASE_URL_API
          }/departament/structuredepartament`
        : `${
            import.meta.env.VITE_BASE_URL_API
          }/departament/structuredepartamenttranslation?language_code=${
            i18n.language
          }`
    )
      .then((res) => res.json())
      .then((res) => setData(res.filter((e) => !Number(e.title))));
  }, [i18n.language]);

  return (
    <Container className="root-container">
      <div className="root-wrapper">
        <div className="structure-top">
          <img loading="lazy" src={logo} className="structure-top__logo" />
          <div className="structure-top__title">{t("structure")}</div>
        </div>
        <div className="str">
          {data.map((e) => (
            <div
              className="str-item"
              onClick={() => navigate(`/${i18n.language}/department/${e.id}`)}
              key={e.id}
            >
              {e.title}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Structure;
