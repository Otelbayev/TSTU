import React from "react";
import { Container } from "./style";

const RamatovSlider = ({ prop: { name, img, position, bottom } }) => {
  return (
    <Container data-aos="zoom-in">
      <div className="item">
        <div className="item__content">
          <div className="slider-top">
            <img loading="lazy" src={img} alt="" />
            <div>
              <div className="slider-top__name">{name}</div>
              <div className="slider-top__position">{position}</div>
            </div>
          </div>
          <div className="slidet-bottom">{bottom}</div>
        </div>
      </div>
    </Container>
  );
};

export default RamatovSlider;
