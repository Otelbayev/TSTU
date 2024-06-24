import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";

const Universal = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Header uni={true} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Universal;
