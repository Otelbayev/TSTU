import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Showcase from "../../components/Showcase";
import {
  About,
  News,
  Events,
  Interactive,
  Faculties,
  Talim,
  Faxriy,
  Talaba,
  Survery,
  Alumni,
} from "../../components/HomeElements";
import axios from "axios";
import { useLanguageContext } from "../../context/LanguageContext";

const HomePage = () => {
  const { language } = useLanguageContext();
  const [news, setNews] = useState([]);
  const [events, setEvents] = useState([]);

  const getAllFavoriteBlogs = async (language) => {
    const res = await axios.get(
      language === "uz"
        ? "/api/blogcontroller/sitegetallblog?favorite=true"
        : `/api/blogcontroller/sitegetallblogtranslation?language_code=${language}&favorite=true`
    );
    if (res.status === 200) {
      setNews(
        res.data
          ?.filter((item) => item?.blog_category_?.title === "yangilikar")
          ?.sort((a, b) => a?.position - b?.position)
      );
      setEvents(
        res.data
          ?.filter((item) => item?.blog_category_?.title === "tadbirlar")
          ?.sort((a, b) => a?.position - b?.position)
      );
    }
  };

  useEffect(() => {
    getAllFavoriteBlogs(language);
  }, [language]);

  return (
    <div style={{ overflow: "hidden" }}>
      <Header />
      <Showcase />
      <About />
      <News data={news} />
      <Events />
      <Interactive />
      <Faculties />
      <Talim />
      <Faxriy />
      <Talaba />
      <Survery />
      <Alumni />
      <Footer />
    </div>
  );
};

export default HomePage;
