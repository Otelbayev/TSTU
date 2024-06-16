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

const HomePage = () => {
 
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
