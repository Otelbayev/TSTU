import React, { useEffect } from "react";
import { Content } from "./style";
import { InteractiveCart } from "../../components/HomeElements";
import axios from "axios";
import UniShowcase from "./../../components/UniShowcase/index";
import { useTranslation } from "react-i18next";

const InteractiveServices = () => {
  const { t, i18n } = useTranslation();

  const [data, setData] = React.useState([]);
  const getData = async () => {
    const res = await axios.get(
      i18n.language === "uz"
        ? `${
            import.meta.env.VITE_BASE_URL_API
          }/interactiveservices/sitegetallinteractiveservices`
        : `${
            import.meta.env.VITE_BASE_URL_API
          }/interactiveservices/sitegetallinteractiveservicestranslation?language_code=${
            i18n.language
          }`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    res.status === 200 && setData(res.data);
  };

  useEffect(() => {
    getData();
  }, [i18n.language]);

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
