import React, { useEffect } from "react";
import UniShowcase from "./../../components/UniShowcase/index";
import { useTranslation } from "react-i18next";
import { Grid } from "../Blog/style";
import NewsCart from "../../components/News/NewsCart";
import { useNavigate } from "react-router-dom";
import { useBlog } from "./../../hooks/useBog";

const StudentLife = () => {
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data, loading, error } = useBlog("Talaba hayoti", false);

  if (loading) {
    return <h1 className="text-center">Loading...</h1>;
  }

  if (!loading && error) {
    return <h1 className="text-center">Error!</h1>;
  }

  return (
    <div>
      <UniShowcase title={t("student.title")} />
      <div className="root-container">
        <div className="root-wrapper">
          <Grid>
            {data?.map((e) => (
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
