import React from "react";
import { Container } from "./style";
import { Title } from "../../Generics";
import Slider from "react-slick";
import KafedraCart from "../KafedraCart";
import { sliderProp } from "../../../mock/homeProps";

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
  return (
    <Container className="root-container">
      <div className="root-wrapper">
        <Title
          title="Ta’lim"
          subtitle={
            "Fikr agar yaxshi tarbiyat topsa, Xanjar, olmosday bo’lur o’tkir."
          }
          button="Barchasini ko‘rish"
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
