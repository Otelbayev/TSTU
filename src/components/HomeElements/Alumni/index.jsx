import React from "react";
import { Title } from "../../Generics";
import { Ramatov } from "./style";
import Slider from "react-slick";
import RamatovSlider from "../RamatovSlider";
import { prop10 } from "../../../mock/homeProps";
import ramatova from "../../../assets/images/ramatova.jpg";
import { useTranslation } from "react-i18next";

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
                Ramatov Ochilboy Jumaniyazovich
              </div>
              <div className="content__sub">
                O‘zbekiston Bosh vazirini birinchi o‘rinbosar
              </div>
              <div className="content__p">
                Lorem ipsum dolor sit amet consectetur. Ullamcorper platea eu
                vel enim ultrices lectus odio malesuada euismod. Amet dolor eu
                vitae gravida fermentum lectus ut rutrum etiam. Diam ut dui a
                mauris non aenean fermentum. Ultrices nisi pellentesque eu
                tortor posuere in tellus congue. Adipiscing a neque eget aliquam
                egestas arcu pharetra amet. Etiam vel tincidunt quis porta massa
                vitae scelerisque pellentesque sem. At purus nec ante commodo
                venenatis hac. Dui ultrices vitae pulvinar in. Proin pretium
                nullam orci massa lectus interdum nisl.
              </div>
            </div>
          </div>
        </div>
        <Slider className="slider" {...ramatovSetting}>
          {prop10.map((e) => (
            <RamatovSlider key={e.id} prop={e} />
          ))}
        </Slider>
      </Ramatov>
    </div>
  );
};

export default Alumni;
