import React, { useEffect } from "react";
import { Content } from "./style";
import { useNavigate } from "react-router-dom";
import { Title } from "../../components/Generics";
import { useTranslation } from "react-i18next";
import { useDepartment } from "./../../hooks/useDepartment";

const Centers = () => {
  const naviagte = useNavigate();
  const { t, i18n } = useTranslation();
  const { data, loading, error } = useDepartment("Markaz");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) {
    return <h1 className="text-center">Loading...</h1>;
  }

  if (!loading && error) {
    return <h1 className="text-center">Error!</h1>;
  }

  return (
    <div className="root-container">
      <div className="root-wrapper">
        <Title title={t("centers.centers")} $border="none" />
        <Content data-aos="fade-up">
          {data?.map((e) => (
            <Content.Item
              key={e.id}
              onClick={() =>
                naviagte(
                  `/${i18n.language}/department/${
                    i18n.language === "uz" ? e?.id : e?.departament_?.id
                  }`
                )
              }
            >
              <Content.Img
                loading="lazy"
                src={`${import.meta.env.VITE_BASE_URL_IMG}${
                  e?.img_?.url || e?.img_translation_?.url
                }`}
              />
              <Content.Title>{e?.title}</Content.Title>
            </Content.Item>
          ))}
        </Content>
      </div>
    </div>
  );
};

export default Centers;
