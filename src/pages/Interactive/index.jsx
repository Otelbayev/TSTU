import React, { useEffect, useState } from "react";
import { Content } from "./style";
import { InteractiveCart } from "../../components/HomeElements";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import Loading2 from "../../components/Loading2";
import Error from "../../components/Error";
import { useShowcaseTitleContext } from "../../context/ShowcaseTitleContext";
import { useBreadcrumbContext } from "../../context/BreadcrumbContext";

const InteractiveServices = () => {
  const { t, i18n } = useTranslation();
  const { setTitle } = useShowcaseTitleContext();
  const { setBreadcrumb } = useBreadcrumbContext();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const getData = async () => {
    try {
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
      if (res.status === 200) {
        setData(res.data);
        setLoading(false);
      }
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
    setBreadcrumb([
      { name: t("interactive.title"), path: "/interactive-services" },
    ]);
  }, [i18n.language]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTitle(t("interactive.title"));
  }, [data]);

  if (loading) {
    return <Loading2 />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div>
      <Helmet>
        <title>{t("interactive.title")}</title>
      </Helmet>
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