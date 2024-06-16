import React from "react";
import LargeBanner from "../LargeBanner";
import NewsItem from "../NewsItem";
import { Title } from "../../Generics";
import { Layout } from "./style";
import { prop3, prop4, prop5 } from "../../../mock/homeProps";
import { useTranslation } from "react-i18next";

const Events = () => {
  const { t } = useTranslation();
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <Layout className="root-container">
      <div className="root-wrapper">
        <Title title={t("events.title")} button={t("events.btn")} to="news">
          <div className="grid">
            <div className="grid__item first" data-aos="fade-right">
              <LargeBanner
                prop={prop3}
                onClick={() => navigate("/announcement/id")}
              />
              <LargeBanner
                prop={prop3}
                onClick={() => navigate("/announcement/id")}
              />
            </div>
            <div className="grid__item second" data-aos="fade-up">
              <LargeBanner
                prop={prop4}
                onClick={() => navigate("/announcement/id")}
              />
            </div>
            <div className="grid__news thrid" data-aos="fade-left">
              {arr.map((e) => (
                <NewsItem key={e} prop={prop5} />
              ))}
            </div>
          </div>
        </Title>
      </div>
    </Layout>
  );
};

export default Events;
