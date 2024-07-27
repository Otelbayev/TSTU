import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./Root";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Context from "./context";
import { HelmetProvider } from "react-helmet-async";
import "./i18n";
import "../public/fontawesome/css/all.min.css";
import { BrowserRouter } from "react-router-dom";
AOS.init({
  duration: 800,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <Context>
        <BrowserRouter>
          <Root />
        </BrowserRouter>
      </Context>
    </HelmetProvider>
  </React.StrictMode>
);
