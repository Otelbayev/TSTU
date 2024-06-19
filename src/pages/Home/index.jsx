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
  const [student, setStudent] = useState([]);

  const categorizeAndSortBlogs = (blogs, categoryTitles) => {
    return blogs
      .filter((item) =>
        categoryTitles.some(
          (title) =>
            item?.blog_category_?.title === title ||
            item?.blog_category_translation_?.title === title
        )
      )
      .sort((a, b) => a?.position - b?.position);
  };

  const getAllFavoriteBlogs = async (language) => {
    try {
      const url =
        language === "uz"
          ? "/api/blogcontroller/sitegetallblog?favorite=true"
          : `/api/blogcontroller/sitegetallblogtranslation?language_code=${language}&favorite=true`;

      const res = await axios.get(url);

      if (res.status === 200) {
        const data = res.data;
        const categories = [
          { stateSetter: setNews, titles: ["yangilikar", "news", "новости"] },
          {
            stateSetter: setEvents,
            titles: ["tadbirlar", "events", "события"],
          },
          {
            stateSetter: setStudent,
            titles: ["talaba hayoti", "student life", "cтуденческая жизнь"],
          },
        ];

        categories.forEach(({ stateSetter, titles }) => {
          stateSetter(categorizeAndSortBlogs(data, titles));
        });
      }
    } catch (error) {
      console.error("Failed to fetch favorite blogs:", error);
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
      <News data={news} type="news" />
      <Events data={events} type="events" />
      <Interactive />
      <Faculties />
      <Talim />
      <Faxriy />
      <Talaba data={student} type="student" />
      <Survery />
      <Alumni />
      <Footer />
    </div>
  );
};

export default HomePage;
