import React, { useEffect } from "react";
import { Content } from "./style";
import { prop6 } from "../../mock/homeProps";
import { InteractiveCart } from "../../components/HomeElements";
import axios from "axios";
import { useLanguageContext } from "../../context/LanguageContext";
import UniShowcase from "./../../components/UniShowcase/index";
import { useTranslation } from "react-i18next";

const InteractiveServices = () => {
  const { language } = useLanguageContext();
  const [data, setData] = React.useState([]);
  const getData = async () => {
    const res = await axios.get(
      language === "uz"
        ? "/api/interactiveservices/sitegetallinteractiveservices"
        : `/api/interactiveservices/sitegetallinteractiveservicestranslation?language_code=${language}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    res.status === 200 && setData(res.data);
  };

  const { t } = useTranslation();

  useEffect(() => {
    getData();
  }, [language]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <UniShowcase title={t("interactive.title")} />
      <div className="root-container">
        <div className="root-wrapper">
          <Content>
            {data.map((e) => (
              <InteractiveCart key={e.id} prop={e} no="no baby" />
            ))}
          </Content>
        </div>
      </div>
    </div>
  );
};

export default InteractiveServices;
