import React, { useState } from "react";
import { Title } from "../../Generics";
import IlmiyMarkazCart from "../../IlmiyMarkazCart";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { DarkSection } from "./style";
import { useTranslation } from "react-i18next";
import { useFrontDepartmentContext } from "../../../context/DepartmentContext";
import { useLanguageContext } from "../../../context/LanguageContext";

const Survery = () => {
  const { t } = useTranslation();
  const { favoMarkaz } = useFrontDepartmentContext();
  const [counterOn, setCounterOn] = useState(false);
  const { language } = useLanguageContext();

  return (
    <DarkSection className="root-container">
      <div className="root-wrapper">
        <Title
          $type="dark"
          title={t("survery.title")}
          button={t("survery.btn")}
          to="scientific-center"
        >
          <div>
            <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              <div data-aos="fade-up" className="tadqiqot">
                <div className="tadqiqot__item ">
                  <div className="mobile-flex">
                    <div className="tadqiqot__item__title">
                      {t("survery.1")}
                    </div>
                    <div className="tadqiqot__item__count">
                      {counterOn && <CountUp end={12} duration={2} />}
                    </div>
                  </div>
                  <div className="tadqiqot__item__p">{t("survery.markaz")}</div>
                </div>
                <div className="tadqiqot__item ">
                  <div className="mobile-flex">
                    <div className="tadqiqot__item__title">
                      {t("survery.2")}
                    </div>
                    <div className="tadqiqot__item__count">
                      {counterOn && <CountUp end={12} duration={2} />}
                    </div>
                  </div>
                  <div className="tadqiqot__item__p">
                    {t("survery.kutubxona")}
                  </div>
                </div>
                <div className="tadqiqot__item ">
                  <div className="mobile-flex">
                    <div className="tadqiqot__item__title">
                      {t("survery.3")}
                    </div>
                    <div className="tadqiqot__item__count">
                      {counterOn && <CountUp end={12} duration={2} />}
                    </div>
                  </div>
                  <div className="tadqiqot__item__p">{t("survery.kitob")}</div>
                </div>
              </div>
            </ScrollTrigger>
          </div>
        </Title>
        <Title
          $type="dark"
          title={t("centers.title")}
          button={t("centers.btn")}
          subtitle={t("centers.desc")}
          to="scientific-center"
        >
          <div className="markaz">
            {favoMarkaz
              ?.sort((a, b) => a.position - b.position)
              ?.slice(0, 4)
              ?.map((e) => (
                <IlmiyMarkazCart
                  dataAos={"zoom-in"}
                  key={e.id}
                  to={`department/${e?.id}`}
                  item={e}
                />
              ))}
          </div>
        </Title>
      </div>
    </DarkSection>
  );
};

export default Survery;
