import React, { useEffect, useState } from "react";
import { Container } from "./style";
import ads from "../../assets/images/ads.png";
import TopNews from "../../components/News/TopNews";
import { Title } from "../../components/Generics";
import VideoCart from "../../components/News/VideoCart";
import axios from "axios";
import { useParams } from "react-router-dom";
import { getDate } from "../../utils/month";
import { useTranslation } from "react-i18next";
import { useBlog } from "../../hooks/useBog";

const BlogID = () => {
  const { id } = useParams();
  const { data: news } = useBlog("Yangiliklar", true);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        i18n.language === "uz"
          ? `${
              import.meta.env.VITE_BASE_URL_API
            }/blogcontroller/sitegetbyidblog/${id}`
          : `${
              import.meta.env.VITE_BASE_URL_API
            }/blogcontroller/sitegetbyuzidblogtranslation/${id}?language_code=${
              i18n.language
            }`
      );
      if (res.status === 200) {
        setData(res.data);
      } else {
        setData([]);
      }
    };

    fetchData();
  }, [id, i18n.language]);

  return (
    <div className="root-container">
      <div className="root-wrapper">
        <Container>
          <div className="title">{data?.title}</div>
          <div className="news-date">
            <span>
              {getDate(data?.event_date?.split("T")[0])} -{" "}
              {getDate(data?.event_end_date?.split("T")[0])}
            </span>
            <span>
              {data?.blog_category_?.title ||
                data?.blog_category_translation_?.title}
            </span>
          </div>
          <div className="content">
            <div className="content__left">
              <img
                src={`${import.meta.env.VITE_BASE_URL_IMG}${
                  data?.img_?.url || data?.img_translation_?.url
                }`}
                style={{ width: "100%" }}
                alt=""
              />
              <div
                dangerouslySetInnerHTML={{ __html: data?.text }}
                data-aos="fade-up"
                className="my-5"
              />
            </div>
            <div className="content__right">
              <TopNews data={news} dataAos="fade-left" />
              {/* <img loading="lazy" src={ads} alt="" data-aos="fade-left" /> */}
            </div>
          </div>
          <Title title={t("news.t")} button={t("news.btn")} to={`blog`}>
            <div className="newsid-bottom">
              {news
                ?.filter((e) => e.id != id)
                ?.slice(0, 2)
                .map((e) => (
                  <VideoCart
                    dataAos={"zoom-in"}
                    key={e.id}
                    prop={e}
                    to={`blog/${i18n.language === "uz" ? e?.id : e?.blog_id}`}
                  />
                ))}
            </div>
          </Title>
        </Container>
      </div>
    </div>
  );
};

export default BlogID;
