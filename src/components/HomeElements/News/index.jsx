import React from "react";
import { Title } from "../../Generics";
import { Layout } from "./style";
import { prop1, prop2 } from "../../../mock/homeProps";
import LargeBanner from "../LargeBanner";
import Cart from "../Cart";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useLanguageContext } from "../../../context/LanguageContext";

const News = ({ data, type }) => {
  const { t } = useTranslation();

  const getAos = (index) => {
    switch (index) {
      case 0:
        return "fade-right";
      case 1:
        return "fade-left";
      case 2:
        return "fade-left";
      case 3:
        return "fade-right";
      case 4:
        return "fade-right";
      case 5:
        return "fade-left";
    }
  };

  const navigate = useNavigate();
  const { language } = useLanguageContext();

  return (
    <Layout className="root-container">
      <div className="root-wrapper">
        <Title title={t("news.title")} button={t("news.btn")} to="blog">
          <div className="flex">
            {data?.slice(0, 6)?.map((item, index) => (
              <div
                className={`flex__item${index + 1}`}
                data-aos={getAos(index)}
                key={item?.id}
              >
                {index === 0 || index === 5 ? (
                  <LargeBanner
                    onClick={() => navigate(`/${language}/blog/${item?.id}`)}
                    item={item}
                    prop={prop1}
                    type={type}
                  />
                ) : (
                  <Cart
                    item={item}
                    prop={prop2}
                    onClick={() => navigate(`/${language}/blog/${item?.id}`)}
                  />
                )}
              </div>
            ))}
          </div>
        </Title>
      </div>
    </Layout>
  );
};

export default News;
