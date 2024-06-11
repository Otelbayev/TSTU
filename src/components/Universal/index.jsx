import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";
import UniShowcase from "../UniShowcase";

const Universal = ({ showcase, data }) => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Header uni={true} />
      {showcase && <UniShowcase data={data} />}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Universal;
