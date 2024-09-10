import React from "react";
import UniShowcase from "./../../components/UniShowcase/index";
import { useTranslation } from "react-i18next";
import { Container } from "./style";
import UzHistory from "./uz-history";
import RuHistory from "./ru-history";
import EnHistory from "./en-history";

const History = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <UniShowcase title={t("history")} />
      <div className="root-container">
        <div className="root-wrapper">
          <Container>
            {i18n.language === "uz" ? (
              <UzHistory />
            ) : i18n.language === "ru" ? (
              <RuHistory />
            ) : (
              <EnHistory />
            )}
          </Container>
        </div>
      </div>
    </div>
  );
};

export default History;
