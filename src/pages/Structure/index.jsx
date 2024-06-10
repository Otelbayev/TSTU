import React from "react";
import { Container } from "./styler";
import logo from "../../../public/logo2.png";

const Structure = () => {
  return (
    <Container className="root-container">
      <div className="root-wrapper">
        <div className="structure-top">
          <img loading="lazy" src={logo} className="structure-top__logo" />
          <div className="structure-top__title">
            Toshkent davlat transport universiteti tuzilmasi
          </div>
        </div>
        <div className="structute-content"></div>
      </div>
    </Container>
  );
};

export default Structure;
