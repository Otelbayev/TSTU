import React, { useEffect } from "react";
import UniShowcase from "./../../components/UniShowcase/index";
import { useTranslation } from "react-i18next";

const History = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation();

  return (
    <div>
      <UniShowcase title={t("history")} />
      <div className="root-container">
        <div className="root-wrapper"></div>
      </div>
    </div>
  );
};

export default History;
