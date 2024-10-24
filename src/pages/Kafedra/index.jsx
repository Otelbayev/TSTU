import React, { useEffect } from "react";
import FacultyCart from "../../components/Faculties/FacultyCart";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Content } from "../Faculties/style";
import { useDepartment } from "../../hooks/useDepartment";
import { Pagination } from "antd";
import Loading2 from "../../components/Loading2";
import { Helmet } from "react-helmet";

const Faculties = () => {
  const { data, page, setPage, loading } = useDepartment("Kafedra", true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const { t, i18n } = useTranslation();

  const naviagte = useNavigate();

  const pageChange = (a) => {
    setPage(a);
    const newUrl = `${window.location.pathname}?page=${a}`;
    window.history.replaceState(null, null, newUrl);
  };

  if (loading) {
    return <Loading2 />;
  }

  return (
    <div>
      <Helmet>
        <title>{t("faculties.kafedra")}</title>
      </Helmet>
      <div className="root-container">
        <div className="root-wrapper">
          <Content data-aos="fade-up">
            <div className="title">{t("faculties.kafedra")}</div>
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
                    type="kafedra"
                  />
                );
              })}
            </Content.Body>
            <div className="d-flex justify-content-center mt-4">
              <Pagination
                total={data?.length}
                current={page}
                onChange={pageChange}
              />
            </div>
          </Content>
        </div>
      </div>
    </div>
  );
};

export default Faculties;
