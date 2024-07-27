import React from "react";
import LargeBanner from "../LargeBanner";
import NewsItem from "../NewsItem";
import { Title } from "../../Generics";
import { Layout } from "./style";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useBlog } from "../../../hooks/useBog";

const Events = ({ type }) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const { data, loading, error } = useBlog("Xalqaro hamkorlik", true);

  const d1 = data?.sort((a, b) => b.id - a.id);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error?.message}</div>;

  return (
    <Layout className="root-container">
      <div className="root-wrapper">
        <Title title={t("events.title")} to="news">
          <div className="grid">
            <div className="grid__item first" data-aos="fade-right">
              <LargeBanner
                onClick={() =>
                  navigate(
                    `/${i18n.language}/blog/${
                      i18n.language === "uz" ? d1[0]?.id : d1[0]?.blog_id
                    }`
                  )
                }
                item={d1 && d1[0]}
                type={type}
              />
              <LargeBanner
                onClick={() =>
                  navigate(
                    `/${i18n.language}/blog/${
                      i18n.language === "uz" ? d1[1]?.id : d1[1]?.blog_id
                    }`
                  )
                }
                item={d1 && d1[1]}
                type={type}
              />
            </div>
            <div className="grid__item second" data-aos="fade-up">
              <LargeBanner
                onClick={() =>
                  navigate(
                    `/${i18n.language}/blog/${
                      i18n.language === "uz" ? d1[2]?.id : d1[2]?.blog_id
                    }`
                  )
                }
                item={d1 && d1[2]}
                type={type}
              />
            </div>
            <div className="grid__news thrid" data-aos="fade-left">
              {d1?.slice(3)?.map((e) => (
                <NewsItem item={e} key={e.id} />
              ))}
            </div>
          </div>
        </Title>
      </div>
    </Layout>
  );
};

export default Events;
