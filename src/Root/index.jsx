import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { navbar, routes } from "../utils/navbar";
import Universal from "../components/Universal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        {navbar.map((item) => (
          <Route key={item.id} element={<Universal data={item} />}>
            <Route path={item.path} element={item.element} />
          </Route>
        ))}
        {routes.map(({ id, path, element }) => (
          <Route key={id} path={path} element={element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
