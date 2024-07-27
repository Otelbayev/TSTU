import React from "react";
import { Container } from "./styler";
import logo from "../../../public/logo2.png";
import { useTranslation } from "react-i18next";

const Structure = () => {
  const { t } = useTranslation();
  return (
    <Container className="root-container">
      <div className="root-wrapper">
        <div className="structure-top">
          <img loading="lazy" src={logo} className="structure-top__logo" />
          <div className="structure-top__title">{t("structure")}</div>
        </div>
        <div className="structute-content"></div>
      </div>
    </Container>
  );
};

export default Structure;
