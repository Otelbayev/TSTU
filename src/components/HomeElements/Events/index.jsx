import React from "react";
import LargeBanner from "../LargeBanner";
import NewsItem from "../NewsItem";
import { Title } from "../../Generics";
import { Layout } from "./style";
import { prop3, prop4, prop5 } from "../../../mock/homeProps";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useLanguageContext } from "../../../context/LanguageContext";

const Events = ({ data, type }) => {
  const { t } = useTranslation();
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const navigate = useNavigate();
  const { language } = useLanguageContext();
  return (
    <Layout className="root-container">
      <div className="root-wrapper">
        <Title title={t("events.title")} to="news">
          <div className="grid">
            <div className="grid__item first" data-aos="fade-right">
              <LargeBanner
                prop={prop3}
                onClick={() => navigate(`/${language}/blog/${data[0]?.id}`)}
                item={data && data[0]}
                type={type}
              />
              <LargeBanner
                prop={prop3}
                onClick={() => navigate(`/${language}/blog/${data[1]?.id}`)}
                item={data && data[1]}
                type={type}
              />
            </div>
            <div className="grid__item second" data-aos="fade-up">
              <LargeBanner
                prop={prop4}
                onClick={() => navigate(`/${language}/blog/${data[2]?.id}`)}
                item={data && data[2]}
                type={type}
              />
            </div>
            <div className="grid__news thrid" data-aos="fade-left">
              {data?.slice(3)?.map((e) => (
                <NewsItem item={e} key={e.id} prop={prop5} />
              ))}
            </div>
          </div>
        </Title>
      </div>
    </Layout>
  );
};

export default Events;
