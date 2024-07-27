import React from "react";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { Helmet } from "react-helmet-async";

const Uni = () => {
  return (
    <div style={{ height: "100dvh" }}>
      <Helmet>
        <title>TSTU | Admin</title>
      </Helmet>
      <Sidebar />
      <div style={{ height: "100%", overflow: "auto" }}>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Uni;
