import React, { Suspense, lazy, useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { navbar, noshowcase, routes } from "../utils/navbar";
import Universal from "../components/Universal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loading from "../components/Loading";
const HomePage = lazy(() => import("../pages/Home"));
import Admin from "../Admin";
import Loading2 from "../components/Loading2";
import { useTranslation } from "react-i18next";

const Root = () => {
  const url = window.location.href;
  const urlObject = new URL(url);

  const { i18n } = useTranslation();

  const navigate = useNavigate();

  useEffect(() => {
    if (
      window.location.pathname !== "/" &&
      window.location.pathname.split("/")[1] !== i18n.language
    ) {
      navigate(`${i18n.language}${window.location.pathname}`);
    }
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Loading />}>
            <HomePage />
          </Suspense>
        }
      />
      <Route
        path="/uz"
        element={
          <Navigate to={`/${urlObject?.search ? urlObject?.search : ""}`} />
        }
      />
      {routes.map(({ id, path, element }) => (
        <Route
          key={id}
          path={`/:lang/${path}`}
          element={
            <Suspense fallback={<Loading height={true} />}>{element}</Suspense>
          }
        />
      ))}
      <Route element={<Universal />}>
        {navbar.map((item) => (
          <Route
            key={item.id}
            path={`/:lang/${item.path}`}
            element={
              <Suspense fallback={<Loading2 />}>{item.element}</Suspense>
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
              <Suspense fallback={<Loading2 />}>{item.element}</Suspense>
            }
          />
        ))}
      </Route>
      <Route path={"/:lang/admin/*"} element={<Admin />} />
    </Routes>
  );
};

export default Root;
