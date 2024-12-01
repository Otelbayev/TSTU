import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Container } from "./style";
import UzHistory from "./uz-history";
import RuHistory from "./ru-history";
import EnHistory from "./en-history";
import { Helmet } from "react-helmet";
import { useShowcaseTitleContext } from "../../context/ShowcaseTitleContext";
import { useBreadcrumbContext } from "../../context/BreadcrumbContext";

const History = () => {
  const { t, i18n } = useTranslation();
  const { setTitle } = useShowcaseTitleContext();
  const { setBreadcrumb } = useBreadcrumbContext();

  useEffect(() => {
    setTitle(t("history"));
    setBreadcrumb([{ path: "/history", name: t("history") }]);
  }, [i18n.language]);

  return (
    <div>
      <Helmet>
        <title>{t("history")}</title>
        <meta
          name="description"
          content={
            "Toshkent davlat transport universiteti 1931 yilda O’rta Osiyo temir yo’l transporti muhandislari instituti (SAZIIT) nomi ostida tashkil etilgan bo’lib, u o’z faoliyatini mutaxassislar – mexanikalar va operatorlarni tayyorlash bilan boshladi."
          }
        />
      </Helmet>
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
