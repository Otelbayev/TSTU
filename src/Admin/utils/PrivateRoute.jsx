import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import loadingGif from "../../assets/icons/loading.gif";
import { useLanguageContext } from "./../../context/LanguageContext/index";

const PrivateRoute = () => {
  const { loading, error, sendRequest } = useAxios();
  const token = Cookies.get("_token");
  const { language } = useLanguageContext();

  const getData = async () => {
    await sendRequest({
      method: "get",
      url: `/api/user/verification`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  useEffect(() => {
    if (token) {
      getData();
    }
  }, [token]);

  if (!token) {
    return <Navigate to={`/${language}/signin`} />;
  }

  return loading ? (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "calc(100vh - 115px)",
      }}
    >
      <img loading="lazy" style={{ width: "80px" }} src={loadingGif} alt="" />
    </div>
  ) : error ? (
    <Navigate to={`/${language}/signin`} />
  ) : (
    <Outlet />
  );
};

export default PrivateRoute;
