import React from "react";
import { Container } from "./style";
import { Title } from "../../Generics";
import Slider from "react-slick";
import KafedraCart from "../KafedraCart";
import { sliderProp } from "../../../mock/homeProps";
import { useTranslation } from "react-i18next";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Talim = () => {
  const { t } = useTranslation();
  return (
    <Container className="root-container">
      <div className="root-wrapper">
        <Title
          title={t("talim.title")}
          subtitle={t("talim.desc")}
          button={t("talim.btn")}
        >
          <div data-aos="fade-up">
            <Slider className="slider" {...settings}>
              {sliderProp.map((e) => (
                <div className="slider__item" key={e.id}>
                  <KafedraCart $slider={"true"} prop={e} />
                </div>
              ))}
            </Slider>
          </div>
        </Title>
      </div>
    </Container>
  );
};

export default Talim;
