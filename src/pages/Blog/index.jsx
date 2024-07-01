import React, { useEffect, useState } from "react";
import { Center, Content, Flex, Grid, Layout } from "./style";
import NewsItem from "../../components/News/NewsItem";
import { useNavigate } from "react-router-dom";
import MiniItem from "../../components/News/MiniItem";
import RadioButton from "../../components/RadioButton";
import { useId } from "../../hooks/useId";
import { Title } from "../../components/Generics";
import NewsCart from "../../components/News/NewsCart";
import VideoCart from "../../components/News/VideoCart";
import { useFrontBlogContext } from "./../../context/BlogContext/index";
import { useLanguageContext } from "../../context/LanguageContext";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { Pagination } from "antd";

const Blog = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { language } = useLanguageContext();

  const { news } = useFrontBlogContext();

  const [allData, setAllData] = useState([]);
  const [types, setTypes] = useState([]);
  const [page, setpage] = useState(1);

  const getData = async () => {
    const res = await axios.get(
      language === "uz"
        ? `/api/blogcontroller/sitegetallblog`
        : `/api/blogcontroller/sitegetallblogtranslation&language_code=${language}`
    );
    res.status === 200 && setAllData(res.data);
  };

  const getTypes = async () => {
    try {
      const res = await axios.get(
        language === "uz"
          ? "/api/blogcategorycontroller/sitegetallblogcategory"
          : `/api/blogcategorycontroller/sitegetallblogcategorytranslation?language_code=${language}`
      );
      res.status === 200 && setTypes(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, [language, page]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(9);

  const handlePageChange = (page, size) => {
    setCurrentPage(page);
    setPageSize(size);
  };

  const currentData = allData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="root-container">
      <div className="root-wrapper">
        <Content>
          <div className="title">{t("news.u")}</div>
          <Layout>
            <Layout.Item data-aos="fade-right">
              <NewsItem
                onClick={() =>
                  navigate(
                    `/${language}/blog/${
                      language === "uz" ? news[0]?.id : news[0]?.blog_id
                    }`
                  )
                }
                prop={news[0]}
              />
              <Layout.Second>
                {news.slice(1, 6).map((item) => (
                  <MiniItem
                    key={item.id}
                    prop={item}
                    onClick={() =>
                      navigate(
                        `/${language}/blog/${
                          language === "uz" ? item.id : item?.blog_id
                        }`
                      )
                    }
                  />
                ))}
              </Layout.Second>
            </Layout.Item>
            <Layout.Item data-aos="fade-left">
              <NewsItem
                onClick={() =>
                  navigate(
                    `/${language}/blog/${
                      language === "uz" ? news[0]?.id : news[0]?.blog_id
                    }`
                  )
                }
                prop={news[0]}
              />
              <Layout.Second>
                {news.slice(1, 6).map((item) => (
                  <MiniItem
                    key={item.id}
                    prop={item}
                    onClick={() =>
                      navigate(
                        `/${language}/blog/${
                          language === "uz" ? item.id : item?.blog_id
                        }`
                      )
                    }
                  />
                ))}
              </Layout.Second>
            </Layout.Item>
          </Layout>
          <Center>
            <RadioButton prop={types} dataAos="fade-left" />
          </Center>
          <Grid>
            {currentData.map((e) => (
              <NewsCart
                dataAos="zoom-in"
                onClick={() =>
                  navigate(
                    `/${language}/blog/${language === "uz" ? e.id : e?.blog_id}`
                  )
                }
                key={e.id}
                prop={e}
              />
            ))}
          </Grid>
          {allData?.length ? (
            <Pagination
              total={allData?.length}
              current={currentPage}
              pageSize={pageSize}
              onChange={handlePageChange}
              style={{ textAlign: "center", marginBottom: "20px" }}
            />
          ) : null}
          <Title title={t("news.t")} component={""}>
            <Flex>
              {/* <VideoCart dataAos={"zoom-in"} key={""} prop={""} to={``} /> */}
              <iframe
                width="100%"
                height="300px"
                src="https://www.youtube.com/embed/lQf1Xgr9kgk?si=I7Dyn1grGAkWS4T0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <iframe
                width="100%"
                height="300px"
                src="https://www.youtube.com/embed/UoG4D2vDEXE?si=rPdgPPgwFPQZGvzM"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </Flex>
          </Title>
        </Content>
      </div>
    </div>
  );
};

export default Blog;
