import React, { useEffect, useState } from "react";
import { Center, Content, Flex, Grid, Layout } from "./style";
import NewsItem from "../../components/News/NewsItem";
import { useNavigate } from "react-router-dom";
import MiniItem from "../../components/News/MiniItem";
import RadioButton from "../../components/RadioButton";
import { Title } from "../../components/Generics";
import NewsCart from "../../components/News/NewsCart";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { Pagination } from "antd";
import { useBlog } from "../../hooks/useBog";

const Blog = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const [allData, setAllData] = useState([]);
  const [types, setTypes] = useState([]);
  const [page, setpage] = useState(1);

  const getData = async () => {
    const res = await axios.get(
      i18n.language === "uz"
        ? `${import.meta.env.VITE_BASE_URL_API}/blogcontroller/sitegetallblog`
        : `${
            import.meta.env.VITE_BASE_URL_API
          }/blogcontroller/sitegetallblogtranslation&language_code=${
            i18n.language
          }`
    );
    res.status === 200 && setAllData(res.data.list);
  };

  useEffect(() => {
    getData();
  }, [i18n.language, page]);

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
                    `/${i18n.language}/blog/${
                      i18n.language === "uz"
                        ? allData[0]?.id
                        : allData[0]?.blog_id
                    }`
                  )
                }
                prop={allData?.length ? allData[0] : []}
              />
              <Layout.Second>
                {allData?.slice(1, 5).map((item) => (
                  <MiniItem
                    key={item.id}
                    prop={item}
                    onClick={() =>
                      navigate(
                        `/${i18n.language}/blog/${
                          i18n.language === "uz" ? item.id : item?.blog_id
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
                    `/${i18n.language}/blog/${
                      i18n.language === "uz"
                        ? allData[6]?.id
                        : allData[6]?.blog_id
                    }`
                  )
                }
                prop={allData?.length ? allData[6] : []}
              />
              <Layout.Second>
                {allData?.slice(7, 11).map((item) => (
                  <MiniItem
                    key={item.id}
                    prop={item}
                    onClick={() =>
                      navigate(
                        `/${i18n.language}/blog/${
                          i18n.language === "uz" ? item.id : item?.blog_id
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
