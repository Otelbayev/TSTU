import React, { useState } from "react";
import { Title } from "../../Generics";
import IlmiyMarkazCart from "../../IlmiyMarkazCart";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { DarkSection } from "./style";
import { useTranslation } from "react-i18next";

const Survery = () => {
  const { t } = useTranslation();

  const [counterOn, setCounterOn] = useState(false);
  let ilm = [1, 2, 3, 4];
  return (
    <DarkSection className="root-container">
      <div className="root-wrapper">
        <Title
          $type="dark"
          title={t("survery.title")}
          button={t("survery.btn")}
          to="centers"
        >
          <div>
            <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              <div data-aos="fade-up" className="tadqiqot">
                <div className="tadqiqot__item ">
                  <div className="mobile-flex">
                    <div className="tadqiqot__item__title">Ilmiy markazlar</div>
                    <div className="tadqiqot__item__count">
                      {counterOn && <CountUp end={12} duration={2} />} ta
                    </div>
                  </div>
                  <div className="tadqiqot__item__p">
                    Lorem ipsum dolor sit amet consectetur. Odio mattis lorem
                    adipiscing cursus in
                  </div>
                </div>
                <div className="tadqiqot__item ">
                  <div className="mobile-flex">
                    <div className="tadqiqot__item__title">Kutubxona</div>
                    <div className="tadqiqot__item__count">
                      {counterOn && <CountUp end={12} duration={2} />} ta
                    </div>
                  </div>
                  <div className="tadqiqot__item__p">
                    Lorem ipsum dolor sit amet consectetur. Odio mattis lorem
                    adipiscing cursus in
                  </div>
                </div>
                <div className="tadqiqot__item ">
                  <div className="mobile-flex">
                    <div className="tadqiqot__item__title">Kitoblar</div>
                    <div className="tadqiqot__item__count">
                      {counterOn && <CountUp end={12} duration={2} />} ta
                    </div>
                  </div>
                  <div className="tadqiqot__item__p">
                    Lorem ipsum dolor sit amet consectetur. Odio mattis lorem
                    adipiscing cursus in
                  </div>
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
          to="centers"
        >
          <div className="markaz">
            {ilm.map((e) => (
              <IlmiyMarkazCart
                dataAos={"zoom-in"}
                key={e}
                to={`scientific-center/${e}`}
              />
            ))}
          </div>
        </Title>
      </div>
    </DarkSection>
  );
};

export default Survery;
