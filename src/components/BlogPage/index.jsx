import React from "react";
import { Title } from "../Generics";
import { Grid } from "../../pages/Blog/style";
import NewsCart from "../News/NewsCart";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import UniShowcase from "../UniShowcase";

const BlogPage = ({ title, data }) => {
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div>
      <UniShowcase title={t(title)} />
      <div className="root-container my-4">
        <div className="root-wrapper">
          {/* <Title title={t(title)} $border="none" /> */}
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

export default BlogPage;
