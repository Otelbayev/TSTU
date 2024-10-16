import React from "react";
import { Title } from "../../Generics";
import { Layout } from "./style";
import LargeBanner from "../LargeBanner";
import Cart from "../Cart";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useBlog } from "../../../hooks/useBog";

const News = ({ type }) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const handleNavigation = (id) => {
    navigate(`/${i18n.language}/blog/${id}`);
  };

  const { data: d1 } = useBlog("Yangiliklar", true, false);
  const { data: d2 } = useBlog("Xalqaro hamkorlik", true, false);
  const { data: d3 } = useBlog("Dissertatsiya ishi muhokamasi", true, false);

  const sortData = (data) => {
    return data?.sort((a, b) => b?.id - a?.id);
  };

  const data1 = sortData(d1?.list);
  const data2 = sortData(d2?.list);
  const data3 = sortData(d3?.list);

  return (
    <Layout className="root-container">
      <div className="root-wrapper">
        <Title title={t("news.title")} button={t("news.btn")} to="blog">
          <div className="grid">
            <div data-aos="fade-up" className="grid__item1">
              <LargeBanner
                item={data1 && data1[0]}
                type={type}
                onClick={() =>
                  handleNavigation(
                    i18n.language === "uz" ? data1[0]?.id : data1[0]?.blog_id
                  )
                }
              />
            </div>
            <div data-aos="fade-up" className="grid__item2">
              <Cart
                item={data1 && (data1[1] ? data1[1] : data2 && data2[2])}
                type={type}
                onClick={() =>
                  handleNavigation(
                    i18n.language === "uz" ? data1[1]?.id : data1[1]?.blog_id
                  )
                }
              />
            </div>
            <div data-aos="fade-up" className="grid__item3">
              <Cart
                item={data2 && data2[0]}
                type={type}
                onClick={() =>
                  handleNavigation(
                    i18n.language === "uz" ? data2[0]?.id : data2[0]?.blog_id
                  )
                }
              />
            </div>
            <div data-aos="fade-up" className="grid__item4">
              <Cart
                item={data2 && data2[1]}
                type={type}
                onClick={() =>
                  handleNavigation(
                    i18n.language === "uz" ? data2[1]?.id : data2[1]?.blog_id
                  )
                }
              />
            </div>
            <div data-aos="fade-up" className="grid__item5">
              <Cart
                item={data3 && data3[0]}
                type={type}
                onClick={() =>
                  handleNavigation(
                    i18n.language === "uz" ? data3[0]?.id : data3[0]?.blog_id
                  )
                }
              />
            </div>
            <div data-aos="fade-up" className="grid__item6">
              <LargeBanner
                item={data3 && data3[1]}
                type={type}
                onClick={() =>
                  handleNavigation(
                    i18n.language === "uz" ? data3[1]?.id : data3[1]?.blog_id
                  )
                }
              />
            </div>
          </div>
        </Title>
      </div>
    </Layout>
  );
};

export default News;
