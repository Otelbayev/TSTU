import React from "react";
import { Container } from "./style";
import img from "../../../../public/logo.png";

const RamatovSlider = ({ prop }) => {
  return (
    <Container data-aos="zoom-in">
      <div className="item">
        <div className="item__content">
          <div className="slider-top">
            <img
              loading="lazy"
              src={`${img.split("logo")[0]}api/${prop?.persons_?.img_?.url}`}
              alt=""
            />
            <div>
              <div className="slider-top__name">
                {prop?.persons_?.firstName} {prop?.persons_?.lastName}{" "}
                {prop?.persons_?.fathers_name}
              </div>
              <div className="slider-top__position">
                {prop?.degree ||
                  "Oʻzbekiston Bosh vazirining birinchi oʻrinbosari"}
              </div>
            </div>
          </div>
          <div className="slidet-bottom">
            {prop?.experience_json ||
              "1984-yildan 1988-yilgacha Toshkent temir yoʻl muhandislari institutida tahsil olgan."}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RamatovSlider;
