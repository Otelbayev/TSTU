import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Grid } from "../Blog/style";
import NewsCart from "../../components/News/NewsCart";
import { useNavigate } from "react-router-dom";
import { useBlog } from "./../../hooks/useBog";
import Loading2 from "../../components/Loading2";
import { Helmet } from "react-helmet";
import { useShowcaseTitleContext } from "../../context/ShowcaseTitleContext";
import { useBreadcrumbContext } from "../../context/BreadcrumbContext";

const StudentLife = () => {
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();
  const { setTitle } = useShowcaseTitleContext();
  const { setBreadcrumb } = useBreadcrumbContext();

  const { data, loading, error } = useBlog("Talaba hayoti", false, true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTitle(t("student.title"));
    setBreadcrumb([{ path: "/student-life", name: t("student.title") }]);
  }, [data]);

  if (loading) {
    return <Loading2 />;
  }

  if (!loading && error) {
    return <h1 className="text-center">Xatolik!</h1>;
  }

  return (
    <div>
      <Helmet>
        <title>{t("student.title")}</title>
      </Helmet>
      <div className="root-container">
        <div className="root-wrapper">
          <Grid>
            {data.list?.map((e) => (
              <NewsCart
                dataAos="zoom-in"
                onClick={() =>
                  navigate(
                    `/${i18n.language}/blog/${
                      i18n.language === "uz" ? e.id : e?.blog_id
                    }`
                  )
                }
                key={e.id}
                prop={e}
              />
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default StudentLife;
