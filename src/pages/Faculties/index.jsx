import React, { useEffect } from "react";
import { Content } from "./style";
import FacultyCart from "../../components/Faculties/FacultyCart";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDepartment } from "../../hooks/useDepartment";
import { Pagination } from "antd";

const Faculties = () => {
  const naviagte = useNavigate();
  const { data, page, setPage } = useDepartment("Fakultet", true);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const pageChange = (e) => {
    setPage(e);
    const newUrl = `${window.location.pathname}?page=${e}`;
    window.history.replaceState(null, null, newUrl);
  };

  return (
    <div className="root-container">
      <div className="root-wrapper">
        <Content data-aos="fade-up">
          <div className="title">{t("faculties.all")}</div>
          <Content.Body>
            {data?.list?.map((item) => {
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
                />
              );
            })}
          </Content.Body>
          <div className="text-center mt-4">
            <Pagination
              total={data?.length}
              current={page}
              onChange={pageChange}
            />
          </div>
        </Content>
      </div>
    </div>
  );
};

export default Faculties;
