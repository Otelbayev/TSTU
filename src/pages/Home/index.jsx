import React from "react";
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
import PageID from "../PageID";
import { oldPages } from "../../mock";

const HomePage = () => {
  const url = window.location.href;
  const urlObject = new URL(url);
  const params = new URLSearchParams(urlObject.search);

  if (params.get("p")) {
    return (
      <div>
        <Header uni="true" />
        <PageID oldID={oldPages[params.get("p")]} />
        <Footer />
      </div>
    );
  }
  return (
    <div style={{ overflow: "hidden" }}>
      <Header />
      <Showcase />
      <About />
      <News type="news" />
      <Events type="events" />
      <Interactive />
      <Faculties />
      <Talim />
      <Faxriy />
      <Talaba type="student" />
      <Survery />
      <Alumni />
      <Footer />
    </div>
  );
};

export default HomePage;
