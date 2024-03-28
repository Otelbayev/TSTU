import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router-dom";
import useAxios from "../../hooks/useAxios";

const PrivateRoute = () => {
  const { loading, error, sendRequest } = useAxios();
  const token = Cookies.get("_token");

  const getData = async () => {
    await sendRequest({
      method: "get",
      url: `/api/user/verification/${token}`,
    });
  };

  useEffect(() => {
    if (token) {
      getData();
    }
  }, [token]);

  if (!token) {
    return <Navigate to="/signin" />;
  }

  return loading ? (
    <h1>loading...</h1>
  ) : error ? (
    <Navigate to="/signin" />
  ) : (
    <Outlet />
  );
};

export default PrivateRoute;
