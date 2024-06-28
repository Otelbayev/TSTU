import React, { useEffect } from "react";
import { Content } from "./style";
import FacultyCart from "../../components/Faculties/FacultyCart";
import { useNavigate } from "react-router-dom";
import { useFrontDepartmentContext } from "./../../context/DepartmentContext";
import { useTranslation } from "react-i18next";
import { useLanguageContext } from "../../context/LanguageContext";

const Faculties = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { faculties } = useFrontDepartmentContext();

  const { t } = useTranslation();

  const { language } = useLanguageContext();

  const naviagte = useNavigate();

  return (
    <div className="root-container">
      <div className="root-wrapper">
        <Content data-aos="fade-up">
          <div className="title">{t("faculties.all")}</div>
          <Content.Body>
            {faculties?.map((item) => {
              return (
                <FacultyCart
                  key={item?.id}
                  item={item}
                  onClick={() =>
                    naviagte(
                      `${language === "uz" ? item?.id : item?.departament_?.id}`
                    )
                  }
                />
              );
            })}
          </Content.Body>
        </Content>
      </div>
    </div>
  );
};

export default Faculties;
