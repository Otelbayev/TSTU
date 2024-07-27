import React, { useEffect } from "react";
import FacultyCart from "../../components/Faculties/FacultyCart";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Content } from "../Faculties/style";
import { useDepartment } from "../../hooks/useDepartment";

const Faculties = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data } = useDepartment("Kafedra");

  const { t, i18n } = useTranslation();

  const naviagte = useNavigate();

  return (
    <div className="root-container">
      <div className="root-wrapper">
        <Content data-aos="fade-up">
          <div className="title">{t("faculties.kafedra")}</div>
          <Content.Body>
            {data?.map((item) => {
              return (
                <FacultyCart
                  key={item?.id}
                  item={item}
                  onClick={() =>
                    naviagte(
                      `${
                        i18n.language === "uz"
                          ? item?.id
                          : item?.departament_?.id
                      }`
                    )
                  }
                  type="kafedra"
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
