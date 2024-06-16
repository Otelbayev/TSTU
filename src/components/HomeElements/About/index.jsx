import React, { useState } from "react";
import { Container, Icons } from "./style";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  const [counterOn, setCounterOn] = useState(false);
  return (
    <Container className="root-container">
      <div className="wrapper about" data-aos="fade-up">
        <div className="about__title">{t("about.title")}</div>
        <div className="about__desc">{t("about.desc")}</div>
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <div className="about__boxes">
            <div className="about__boxes__box">
              <Icons.Icon1 />
              <div className="about__boxes__box__count">
                {counterOn && <CountUp end={18700} duration={2} />}+
              </div>
              <div className="about__boxes__box__min">talabalar soni</div>
            </div>
            <div className="about__boxes__box">
              <Icons.Icon2 />
              <div className="about__boxes__box__count">
                {counterOn && <CountUp end={11900} duration={2} />}+
              </div>
              <div className="about__boxes__box__min">professorlar</div>
            </div>
            <div className="about__boxes__box">
              <Icons.Icon3 />
              <div className="about__boxes__box__count">
                {counterOn && <CountUp end={140} duration={2} />}+
              </div>
              <div className="about__boxes__box__min">doktorantlar</div>
            </div>
            <div className="about__boxes__box">
              <Icons.Icon4 />
              <div className="about__boxes__box__count">
                {counterOn && <CountUp end={57} duration={2} />}
              </div>
              <div className="about__boxes__box__min">talim yo’nalishlari</div>
            </div>
            <div className="about__boxes__box">
              <Icons.Icon5 />
              <div className="about__boxes__box__count">
                {counterOn && <CountUp end={12} duration={2} />}
              </div>
              <div className="about__boxes__box__min">qo’shma talim</div>
            </div>
            <div className="about__boxes__box">
              <Icons.Icon6 />
              <div className="about__boxes__box__count">
                {counterOn && <CountUp end={9} duration={2} />}
              </div>
              <div className="about__boxes__box__min">fakultetlar</div>
            </div>
          </div>
        </ScrollTrigger>
      </div>
    </Container>
  );
};

export default About;
