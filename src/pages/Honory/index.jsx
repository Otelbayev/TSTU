import React, { useEffect, useState } from "react";
import UniShowcase from "../../components/UniShowcase";
import { useTranslation } from "react-i18next";
import { useLanguageContext } from "../../context/LanguageContext";
import img from "../../assets/images/ilmiy.png";
import { Content, Item } from "./style";
import { useNavigate } from "react-router-dom";

const Honory = () => {
  const { t } = useTranslation();
  const { language } = useLanguageContext();
  const navigate = useNavigate();

  const [faxriy, setFaxriy] = useState([]);

  useEffect(() => {
    fetch(
      language === "uz"
        ? `/api/persondata/sitegetallpersondata?employee_type=Faxriy%20professor`
        : `/api/persondata/sitegetallpersondatatranslation?language_code=${language}&employee_type=Faxriy%20professor`
    )
      .then((res) => res.json())
      .then((res) => setFaxriy(res));
  }, [language]);

  return (
    <div>
      <UniShowcase title={t("honory.title")} />
      <div className="root-container">
        <div className="root-wrapper">
          <Content>
            <div className="content">
              {faxriy?.map((e, index) => (
                <Item id={index} className={"content__item"}>
                  <img src={`` || img} alt="" className="content__item__img" />
                  <div className="content__item__data">
                    <div className="content__item__data__fio">
                      {e?.persons_?.firstName} {e?.persons_?.firstName}{" "}
                      {e?.persons_?.firstName}
                    </div>
                    <div className="content__item__data__position">
                      {e?.degree || "position"}
                    </div>
                    <ul className="content__item__data__ul">
                      {e?.experience_json?.split(";").map((e, index) => (
                        <li key={index}>{e}.</li>
                      ))}{" "}
                    </ul>
                    <button
                      className="btn btn-primary"
                      onClick={() => navigate(`/${language}/employee/${e.id}`)}
                    >
                      Batafsil
                    </button>
                  </div>
                </Item>
              ))}
            </div>
          </Content>
        </div>
      </div>
    </div>
  );
};

export default Honory;
