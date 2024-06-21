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
import { useFrontBlogContext } from "../../context/BlogContext";

const HomePage = () => {
  const { news, events, student } = useFrontBlogContext();

  return (
    <div style={{ overflow: "hidden" }}>
      <Header />
      <Showcase />
      <About />
      <News data={news} type="news" />
      <Events data={news} type="events" />
      <Interactive />
      <Faculties />
      <Talim />
      <Faxriy />
      <Talaba data={news} type="student" />
      <Survery />
      <Alumni />
      <Footer />
    </div>
  );
};

export default HomePage;
