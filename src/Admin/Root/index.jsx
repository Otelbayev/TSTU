import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "../utils/router";
import Uni from "../components/Uni";
import PrivateRoute from "../utils/PrivateRoute";
import NotFound from "../pages/NotFound";
import File from "../pages/Appeals/File";
import AdminContext from "../context";
import Loading from "../components/Loading";

const Root = () => {
  return (
    <AdminContext>
      <Routes>
        <Route element={<Uni />}>
          {routes.map(({ id, path, element, isPrivte }) =>
            isPrivte ? (
              <Route key={id} element={<PrivateRoute />}>
                <Route
                  path={path}
                  element={
                    <Suspense fallback={<Loading />}>{element}</Suspense>
                  }
                />
              </Route>
            ) : (
              <Route
                key={id}
                path={path}
                element={<Suspense fallback={<Loading />}>{element}</Suspense>}
              />
            )
          )}
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/appeals/:id" element={<File />} />
        </Route>
        <Route path="*" exact element={<NotFound />} />
      </Routes>
    </AdminContext>
  );
};

export default Root;
