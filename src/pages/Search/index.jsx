import React, { useEffect, useState } from "react";
import { useSearchContext } from "./../../context/SearchContext/index";
import { useTranslation } from "react-i18next";
import useAxios from "./../../hooks/useAxios";
import Cookies from "js-cookie";
import Loading2 from "../../components/Loading2";
import { Result } from "antd";
import { NavLink } from "react-router-dom";

const Search = () => {
  const { value } = useSearchContext();
  const { i18n, t } = useTranslation();
  const [data, setData] = useState([]);

  const { loading, error, sendRequest } = useAxios();
  const getData = async (value) => {
    if (!value.trim()) {
      return;
    }
    try {
      const res = await sendRequest({
        method: "get",
        url:
          i18n.language === "uz"
            ? `${
                import.meta.env.VITE_BASE_URL_API
              }/Search/search?search_text=${value}`
            : `${import.meta.env.VITE_BASE_URL_API}/Search/search/${
                i18n.language
              }?search_text=${value}`,
        headers: {
          Authorization: `Bearer ${Cookies.get("_token")}`,
        },
      });

      if (res.status === 200) {
        setData(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData(value);
  }, [value, i18n.language]);

  if (loading) {
    return (
      <div className="mt-5">
        <Loading2 />
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-5">
        <Result
          status="500"
          title="500"
          subTitle="Sorry, something went wrong."
          style={{
            width: "100%",
          }}
        />
      </div>
    );
  }

  return (
    <div className="root-container">
      <div className="root-wrapper mt-3">
        <div className="mt-5">
          {data.map((e, index) => (
            <div key={index}>
              {e?.length !== 0 ? <div className="title">{e?.type}</div> : ""}
              {e?.query_list?.map((item) => (
                <div
                  key={item?.id}
                  className="mx-3 d-flex justify-content-between border border-left-0 border-right-0 p-2"
                >
                  <div>
                    {item?.title
                      ? item?.title
                      : `${item?.persons_?.fathers_name} ${item?.persons_?.firstName} ${item?.persons_?.lastName}`}
                  </div>
                  <NavLink>{t("Bdirections.btn")}</NavLink>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
