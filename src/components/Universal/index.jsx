import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { UniversalSidebr } from "../Sidebar";
import { Outlet } from "react-router-dom";
import { Line } from "./style";
import UniShowcase from "../UniShowcase";
import Breadcrumb from "../Breadcrumb";

const Universal = ({ showcase, data }) => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Header $uni="true">
        <Line />
        <UniversalSidebr />
        <Breadcrumb breadcrumb={data?.breadcrumb} data={data} />
      </Header>
      {showcase && <UniShowcase data={data} />}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Universal;
