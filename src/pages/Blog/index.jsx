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
        ? `/api/blogcontroller/sitegetallblog?queryNum=10&pageNum=${page}`
        : `/api/blogcontroller/sitegetallblogtranslation?queryNum=10&pageNum=${page}&language_code=${language}`
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
    getTypes();
  }, [language]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  return (
    <div className="root-container">
      <div className="root-wrapper">
        <Content>
          <div className="title">{t("news.u")}</div>
          <Layout>
            <Layout.Item data-aos="fade-right">
              <NewsItem
                onClick={() => navigate(`/${language}/blog/${news[0]?.id}`)}
                prop={news[0]}
              />
              <Layout.Second>
                {news.slice(1, 6).map((item) => (
                  <MiniItem
                    key={item.id}
                    prop={item}
                    onClick={() => navigate(`/${language}/blog/${item.id}`)}
                  />
                ))}
              </Layout.Second>
            </Layout.Item>
            <Layout.Item data-aos="fade-left">
              <NewsItem
                onClick={() => navigate(`/${language}/blog/${news[0]?.id}`)}
                prop={news[0]}
              />
              <Layout.Second>
                {news.slice(1, 6).map((item) => (
                  <MiniItem
                    key={item.id}
                    prop={item}
                    onClick={() => navigate(`/${language}/blog/${item.id}`)}
                  />
                ))}
              </Layout.Second>
            </Layout.Item>
          </Layout>
          <Center>
            <RadioButton prop={types} dataAos="fade-left" />
          </Center>
          <Grid>
            {allData.map((e) => (
              <NewsCart
                dataAos="zoom-in"
                onClick={() => navigate(`/${language}/blog/${e.id}`)}
                key={e.id}
                prop={e}
              />
            ))}
          </Grid>
          <Title title={t("news.t")} component={""}>
            <Flex>
              <VideoCart dataAos={"zoom-in"} key={""} prop={""} to={``} />
            </Flex>
          </Title>
        </Content>
      </div>
    </div>
  );
};

export default Blog;
