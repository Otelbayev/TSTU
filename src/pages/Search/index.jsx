import React, { useEffect, useState } from "react";
import { useSearchContext } from "./../../context/SearchContext/index";
import { useTranslation } from "react-i18next";
import useAxios from "./../../hooks/useAxios";
import Loading2 from "../../components/Loading2";
import { Result } from "antd";
import { NavLink } from "react-router-dom";

const Search = () => {
  const { value, setIsOpen } = useSearchContext();
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
          Authorization: `Bearer ${import.meta.env.VITE_CAPCHA_TOKEN}`,
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

  const toNavigate = (
    type,
    id,
    blog_id,
    departament_id,
    persons_data_id,
    page_id
  ) => {
    if (type === "Bloglar" || type === "Blogs") {
      return (
        <NavLink
          to={`/${i18n.language}/blog/${i18n.language === "uz" ? id : blog_id}`}
          onClick={() => setIsOpen(false)}
        >
          {t("Bdirections.btn")}
        </NavLink>
      );
    } else if (type === "Departaments" || type === "Bo'limlar") {
      return (
        <NavLink
          to={`/${i18n.language}/department/${
            i18n.language === "uz" ? id : departament_id
          }`}
          onClick={() => setIsOpen(false)}
        >
          {t("Bdirections.btn")}
        </NavLink>
      );
    } else if (type === "Employees" || type === "Xodimlar") {
      return (
        <NavLink
          to={`/${i18n.language}/employee/${
            i18n.language === "uz" ? id : persons_data_id
          }`}
          onClick={() => setIsOpen(false)}
        >
          {t("Bdirections.btn")}
        </NavLink>
      );
    } else if (type === "Pages" || type === "Pagelar") {
      return (
        <NavLink
          to={`/${i18n.language}/page/${i18n.language === "uz" ? id : page_id}`}
          onClick={() => setIsOpen(false)}
        >
          {t("Bdirections.btn")}
        </NavLink>
      );
    }
  };

  return (
    <div className="root-container">
      <div className="root-wrapper mt-3">
        <div className="mt-5">
          {data.map((e, index) => {
            return (
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
                    {toNavigate(
                      e.type,
                      item?.id,
                      item?.blog_id,
                      item?.departament_id,
                      item?.persons_data_id,
                      item?.page_id
                    )}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Search;
