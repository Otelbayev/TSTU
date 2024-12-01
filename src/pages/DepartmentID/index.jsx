import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import HtmlContentRenderer from "../../components/HtmlContentRenderer";
import { useShowcaseTitleContext } from "../../context/ShowcaseTitleContext";
import { useBreadcrumbContext } from "../../context/BreadcrumbContext";

const DepartmentID = () => {
  const [data, setData] = useState({});
  const { setTitle } = useShowcaseTitleContext();
  const { id } = useParams();
  const { i18n, t } = useTranslation();

  const { setBreadcrumb } = useBreadcrumbContext();
  useEffect(() => {
    window.scrollTo(0, 0);
    setTitle(Number(data?.title) ? data?.description : data?.title);

    const parentPath = getParentPath(
      data.departament_type_?.type ||
        data.departament_type_translation_?.departament_type_?.type
    );

    setBreadcrumb([
      parentPath,
      {
        name: Number(data?.title) ? data?.description : data?.title,
        path: `/department/${id}`,
      },
    ]);
  }, [data]);

  const getParentPath = (type) => {
    switch (type) {
      case "Ilmiy markaz":
        return { path: "/scientific-center", name: t("centers.title") };
      case "Bo'lim":
        return { name: t("department.b"), path: "/department" };
      case "Texnikum":
        return { path: "/college", name: t("College.title") };
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        i18n.language === "uz"
          ? `${
              import.meta.env.VITE_BASE_URL_API
            }/departament/sitegetbyiddepartament/${id}`
          : `${
              import.meta.env.VITE_BASE_URL_API
            }/departament/sitegetbyuziddepartamenttranslation/${id}?language_code=${
              i18n.language
            }`
      );
      if (res.status === 200) {
        setData(res.data);
      } else {
        setData([]);
      }
    };

    fetchData();
  }, [id, i18n.language]);

  return (
    <div>
      <Helmet>
        <title>{data?.title}</title>
        <meta name="description" content={data?.description} />
      </Helmet>

      <div className="root-container my-3">
        <div className="root-wrapper">
          <h3>{data?.title}</h3>
          <img
            loading="lazy"
            src={`${import.meta.env.VITE_BASE_URL_IMG}${data?.img_?.url}`}
            style={{
              width: "100%",
            }}
            alt=""
          />

          <HtmlContentRenderer htmlContent={`${data?.text}`} />
        </div>
      </div>
    </div>
  );
};

export default DepartmentID;
