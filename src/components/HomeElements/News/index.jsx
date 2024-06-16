import React from "react";
import { Title } from "../../Generics";
import { Layout } from "./style";
import { prop1, prop2 } from "../../../mock/homeProps";
import LargeBanner from "../LargeBanner";
import Cart from "../Cart";
import { useTranslation } from "react-i18next";

const News = () => {
  const { t } = useTranslation();
  return (
    <Layout className="root-container">
      <div className="root-wrapper">
        <Title title={t("news.title")} button={t("news.btn")} to="news">
          <div className="flex">
            <div className="flex__item1" data-aos="fade-right">
              <LargeBanner prop={prop1} />
            </div>
            <div className="flex__item2" data-aos="fade-left">
              <Cart prop={prop2} />
            </div>
            <div className="flex__item3" data-aos="fade-left">
              <Cart prop={prop2} />
            </div>
            <div className="flex__item4" data-aos="fade-right">
              <Cart prop={prop2} />
            </div>
            <div className="flex__item5" data-aos="fade-right">
              <Cart prop={prop2} />
            </div>
            <div className="flex__item6" data-aos="fade-left">
              <LargeBanner prop={prop1} />
            </div>
          </div>
        </Title>
      </div>
    </Layout>
  );
};

export default News;
