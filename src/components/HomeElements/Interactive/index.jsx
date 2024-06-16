import React from "react";
import InteractiveCart from "../InteractiveCart";
import { DarkSection, Icons, InteraktiveCarts } from "./style";
import { Title } from "../../Generics";
import { NavLink } from "react-router-dom";
import mackbook from "../../../assets/images/Macbook.png";
import iMac from "../../../assets/images/iMac.png";
import { prop6 } from "../../../mock/homeProps";

const Interactive = () => {
  return (
    <DarkSection className="root-container">
      <div className="root-wrapper">
        <Title
          $type="dark"
          title="Interaktiv xizmatlar"
          button="Barchasini ko‘rish"
        >
          <InteraktiveCarts data-aos="fade-up">
            <div className="first">
              <div className="first__left">
                <Icons.Int4 />
                <NavLink
                  to="/interactive-services"
                  className="first__left__title"
                >
                  Universitet interaktiv xizmatlaridan unumli foydalaning!
                  <Icons.DarkArrow />
                </NavLink>
              </div>
              <div className="first__right">
                <img
                  loading="lazy"
                  src={mackbook}
                  alt=""
                  className="first__right__macbook"
                />
                <img
                  loading="lazy"
                  src={iMac}
                  alt=""
                  className="first__right__imac"
                />
              </div>
            </div>
            <div className="second">
              {prop6.map((e) => (
                <InteractiveCart aos={"zoom-in"} key={e?.id} prop={e} />
              ))}
            </div>
          </InteraktiveCarts>
        </Title>
      </div>
    </DarkSection>
  );
};

export default Interactive;
