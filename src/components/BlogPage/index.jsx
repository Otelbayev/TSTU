import React, { useEffect } from "react";
import { Title } from "../Generics";
import { Grid } from "../../pages/Blog/style";
import NewsCart from "../News/NewsCart";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { Pagination } from "antd";
import { Helmet } from "react-helmet";
import { useShowcaseTitleContext } from "../../context/ShowcaseTitleContext";
import { useBreadcrumbContext } from "../../context/BreadcrumbContext";

const BlogPage = ({ title, data, page, setPage, path }) => {
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const { setTitle } = useShowcaseTitleContext();

  const { setBreadcrumb } = useBreadcrumbContext();

  useEffect(() => {
    setTitle(t(title));
    setBreadcrumb([{ path, name: t(title) }]);
  }, [i18n.language]);

  const pageChange = (e) => {
    setPage(e);
    const queryParams = new URLSearchParams(location.search);
    queryParams.set("page", e);
    const newUrl = `${window.location.pathname}?${queryParams.toString()}`;
    window.history.replaceState(null, null, newUrl);
  };

  return (
    <div>
      <Helmet>
        <title>{t(title)}</title>
      </Helmet>

      <div className="root-container my-4">
        <div className="root-wrapper">
          <Grid>
            {data?.list?.map((e) => (
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
          <div className="d-flex justify-content-center">
            <Pagination
              total={data?.length}
              current={page}
              onChange={pageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
