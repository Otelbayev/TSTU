import React, { useEffect } from "react";
import { Content } from "../Centers/style";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDepartment } from "../../hooks/useDepartment";
import { Title } from "../../components/Generics";

const Department = () => {
  const naviagte = useNavigate();
  const { t, i18n } = useTranslation();
  const { data, loading, error } = useDepartment("Bo'lim");

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
        <Title title={t("department.b")} $border="none" />
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

export default Department;
