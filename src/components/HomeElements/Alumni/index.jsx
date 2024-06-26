import React from "react";
import { Title } from "../../Generics";
import { Ramatov } from "./style";
import Slider from "react-slick";
import RamatovSlider from "../RamatovSlider";
import { prop10 } from "../../../mock/homeProps";
import ramatova from "../../../assets/images/ramatova.jpg";
import { useTranslation } from "react-i18next";
import { useFrontPersonContext } from "../../../context/PersonContext";

const ramatovSetting = {
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1150,
      settings: {
        slidesToShow: 3,
      },
    },
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

const Alumni = () => {
  const { t } = useTranslation();

  const { faxriyBitiruvchi } = useFrontPersonContext();

  return (
    <div>
      <div className="root-container">
        <div className="root-wrapper mt-4 mb-4">
          <Title
            title={t("alumni.title")}
            button={t("alumni.btn")}
            subtitle={t("alumni.desc")}
            to="honorary"
            $type={"light"}
          />
        </div>
      </div>

      <Ramatov>
        <div className="root-container">
          <div className="root-wrapper" data-aos="fade-up">
            <div className="content">
              <img
                loading="lazy"
                src={ramatova}
                alt=""
                className="content__img"
              />
              <div className="content__name">
                {faxriyBitiruvchi[0]?.persons_?.firstName}{" "}
                {faxriyBitiruvchi[0]?.persons_?.lastName}{" "}
                {faxriyBitiruvchi[0]?.persons_?.fathers_name}
              </div>
              <div className="content__sub">
                {faxriyBitiruvchi[0]?.degree ||
                  "Oʻzbekiston Bosh vazirining birinchi oʻrinbosari"}
              </div>
              <div className="content__p">
                {faxriyBitiruvchi[0]?.experience_json ||
                  "1984-yildan 1988-yilgacha Toshkent temir yoʻl muhandislari institutida tahsil olgan."}
              </div>
            </div>
          </div>
        </div>
        <Slider className="slider" {...ramatovSetting}>
          {faxriyBitiruvchi?.map((e) => (
            <RamatovSlider key={e.id} prop={e} />
          ))}
        </Slider>
      </Ramatov>
    </div>
  );
};

export default Alumni;
