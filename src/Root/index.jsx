import React, { Suspense, lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { navbar, noshowcase, routes } from "../utils/navbar";
import Universal from "../components/Universal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loading from "../components/Loading";
const HomePage = lazy(() => import("../pages/Home"));
import Admin from "../Admin";

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <HomePage />
            </Suspense>
          }
        />
        <Route path="/uz" element={<Navigate to="/" />} />
        {routes.map(({ id, path, element }) => (
          <Route
            key={id}
            path={`/:lang/${path}`}
            element={
              <Suspense fallback={<Loading height={true} />}>
                {element}
              </Suspense>
            }
          />
        ))}
        <Route element={<Universal />}>
          {navbar.map((item) => (
            <Route
              key={item.id}
              path={`/:lang/${item.path}`}
              element={
                <Suspense fallback={<h1>Loading...</h1>}>
                  {item.element}
                </Suspense>
              }
            />
          ))}
        </Route>
        <Route element={<Universal />}>
          {noshowcase.map((item) => (
            <Route
              key={item.id}
              path={`/:lang/${item.path}`}
              element={
                <Suspense fallback={<h1>Loading...</h1>}>
                  {item.element}
                </Suspense>
              }
            />
          ))}
        </Route>
        <Route path={"/:lang/admin/*"} element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
