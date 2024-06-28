import React, { memo } from "react";
import { Title } from "../../Generics";
import { Layout } from "./style";
import LargeBanner from "../LargeBanner";
import Cart from "../Cart";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useLanguageContext } from "../../../context/LanguageContext";

const News = ({ data, type }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { language } = useLanguageContext();

  const handleNavigation = (id) => {
    navigate(`/${language}/blog/${id}`);
  };

  return (
    <Layout className="root-container">
      <div className="root-wrapper">
        <Title title={t("news.title")} button={t("news.btn")} to="blog">
          <div className="grid">
            {data.slice(0, 6).map((item, index) => {
              const Component = index === 0 || index === 5 ? LargeBanner : Cart;
              const gridClass = `grid__item${index + 1}`;

              return (
                <div className={gridClass} key={item?.id}>
                  <Component
                    item={item}
                    type={type}
                    onClick={() => handleNavigation(item?.id)}
                  />
                </div>
              );
            })}
          </div>
        </Title>
      </div>
    </Layout>
  );
};

export default memo(News);
