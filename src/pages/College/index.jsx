import React, { useEffect } from "react";
import UniShowcase from "./../../components/UniShowcase/index";
import { useTranslation } from "react-i18next";
import { useDepartment } from "../../hooks/useDepartment";
import { useNavigate } from "react-router-dom";
import { Content } from "../Faculties/style";
import FacultyCart from "../../components/Faculties/FacultyCart";

const College = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data } = useDepartment("Texnikum");
  const { t, i18n } = useTranslation();
  const naviagte = useNavigate();

  return (
    <div>
      <UniShowcase title={t("College.title")} />
      <div className="root-container">
        <div className="root-wrapper">
          <Content data-aos="fade-up">
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
    </div>
  );
};

export default College;
