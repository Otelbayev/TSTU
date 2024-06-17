import React, { useEffect } from "react";
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

  const getAllFavoriteBlogs = async (language) => {
    const res = await axios.get(
      language === "uz"
        ? "/api/blogcontroller/sitegetallblog?favorite=true"
        : `/api/blogcontroller/sitegetallblogtranslation?language_code=${language}&favorite=true`
    );
    console.log(res.data);
  };

  useEffect(() => {
    getAllFavoriteBlogs(language);
  }, [language]);

  return (
    <div style={{ overflow: "hidden" }}>
      <Header />
      <Showcase />
      <About />
      <News />
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
