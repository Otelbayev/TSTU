import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "../utils/router";
import Uni from "../components/Uni";
import PrivateRoute from "../utils/PrivateRoute";
import NotFound from "../pages/NotFound";

const Root = () => {
  return (
    <Routes>
      <Route element={<Uni />}>
        {routes.map(({ id, path, element, isPrivte }) =>
          isPrivte ? (
            <Route key={id} element={<PrivateRoute />}>
              <Route exact path={path} element={element} />
            </Route>
          ) : (
            <Route exact key={id} path={path} element={element} />
          )
        )}
      </Route>
      <Route path="*" exact element={<NotFound />} />
    </Routes>
  );
};

export default Root;
