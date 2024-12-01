import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDepartment } from "../../hooks/useDepartment";
import { useNavigate } from "react-router-dom";
import { Content } from "../Faculties/style";
import FacultyCart from "../../components/Faculties/FacultyCart";
import Loading2 from "../../components/Loading2";
import { Pagination } from "antd";
import { Helmet } from "react-helmet";
import { useShowcaseTitleContext } from "../../context/ShowcaseTitleContext";
import { useBreadcrumbContext } from "../../context/BreadcrumbContext";

const College = () => {
  const { data, loading, error, page, setPage } = useDepartment(
    "Texnikum",
    true
  );
  const { t, i18n } = useTranslation();
  const naviagte = useNavigate();
  const { setTitle } = useShowcaseTitleContext();

  const { setBreadcrumb } = useBreadcrumbContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  useEffect(() => {
    setTitle(t("College.title"));
    setBreadcrumb([{ path: "/college", name: t("College.title") }]);
  }, [data]);

  const pageChange = (e) => {
    setPage(e);
    const newUrl = `${window.location.pathname}?page=${e}`;
    window.history.replaceState(null, null, newUrl);
  };

  if (loading) {
    return <Loading2 />;
  }

  if (!loading && error) {
    return <h1 className="text-center">Xatolik!</h1>;
  }

  return (
    <div>
      <Helmet>
        <title>{t("Collage.title")}</title>
      </Helmet>

      <div className="root-container">
        <div className="root-wrapper">
          <Content data-aos="fade-up">
            <Content.Body>
              {data?.list?.map((item) => {
                return (
                  <FacultyCart
                    key={item?.id}
                    item={item}
                    onClick={() =>
                      naviagte(
                        `/department/${
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

export default College;
