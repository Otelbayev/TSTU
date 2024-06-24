import React, { useEffect, useState } from "react";
import { Container } from "./style";
import car from "../../assets/New/car.png";
import ads from "../../assets/New/ads.png";
import TopNews from "../../components/News/TopNews";
import { Title } from "../../components/Generics";
import { useId } from "../../hooks/useId";
import videoflag from "../../assets/New/flags.png";
import VideoCart from "../../components/News/VideoCart";
import axios from "axios";
import { useLanguageContext } from "../../context/LanguageContext";
import { useParams } from "react-router-dom";
import { getDate } from "../../utils/month";
import { useFrontBlogContext } from "../../context/BlogContext";

const BlogID = () => {
  const { id } = useParams();
  const { language } = useLanguageContext();
  const { news } = useFrontBlogContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        language === "uz"
          ? `/api/blogcontroller/sitegetbyidblog/${id}`
          : `/api/blogcontroller/sitegetbyuzidblogtranslation/${id}?language_code=${language}`
      );
      if (res.status === 200) {
        setData(res.data);
      } else {
        setData([]);
      }
    };

    fetchData();
  }, [id, language]);

  console.log(data);

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
              <div
                dangerouslySetInnerHTML={{ __html: data?.text }}
                data-aos="fade-up"
                className="my-5"
              />
            </div>
            <div className="content__right">
              <TopNews dataAos="fade-left" />
              <img loading="lazy" src={ads} alt="" data-aos="fade-left" />
            </div>
          </div>
          <Title
            title="Universitet yangiliklari"
            button="Barchasini ko‘rish"
            to={`blog`}
          >
            <div className="newsid-bottom">
              {news
                ?.filter((e) => e.id != id)
                ?.slice(0, 2)
                .map((e) => (
                  <VideoCart
                    dataAos={"zoom-in"}
                    key={e.id}
                    prop={e}
                    to={`blog/${e.id}`}
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
