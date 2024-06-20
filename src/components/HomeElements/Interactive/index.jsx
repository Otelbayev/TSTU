import React, { useEffect, useState } from "react";
import InteractiveCart from "../InteractiveCart";
import { DarkSection, Icons, InteraktiveCarts } from "./style";
import { Title } from "../../Generics";
import { NavLink } from "react-router-dom";
import mackbook from "../../../assets/images/Macbook.png";
import iMac from "../../../assets/images/iMac.png";
import { useTranslation } from "react-i18next";
import { useLanguageContext } from "../../../context/LanguageContext";
import axios from "axios";

const Interactive = () => {
  const { t } = useTranslation();
  const { language } = useLanguageContext();
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await axios.get(
      language === "uz"
        ? "/api/interactiveservices/sitegetallinteractiveservices?favorite=true"
        : `/api/interactiveservices/sitegetallinteractiveservicestranslation?language_code=${language}&favorite=true`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    res.status === 200 && setData(res.data);
  };

  useEffect(() => {
    getData();
  }, [language]);

  return (
    <DarkSection className="root-container">
      <div className="root-wrapper">
        <Title
          $type="dark"
          title={t("interactive.title")}
          button={t("interactive.btn")}
          to="interactive-services"
        >
          <InteraktiveCarts data-aos="fade-up">
            <div className="first">
              <div className="first__left">
                <Icons.Int4 />
                <NavLink
                  to={`${language}/interactive-services`}
                  className="first__left__title"
                >
                  {t("interactive.desc")}
                  <Icons.DarkArrow />
                </NavLink>
              </div>
              <div className="first__right">
                <img
                  loading="lazy"
                  src={mackbook}
                  alt=""
                  className="first__right__macbook"
                />
                <img
                  loading="lazy"
                  src={iMac}
                  alt=""
                  className="first__right__imac"
                />
              </div>
            </div>
            <div className="second">
              {data.slice(0, 4).map((e) => (
                <InteractiveCart aos={"zoom-in"} key={e?.id} prop={e} />
              ))}
            </div>
          </InteraktiveCarts>
        </Title>
      </div>
    </DarkSection>
  );
};

export default Interactive;
