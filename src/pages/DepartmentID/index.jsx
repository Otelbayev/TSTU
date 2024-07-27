import React, { useEffect, useState } from "react";
import UniShowcase from "./../../components/UniShowcase/index";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";

const DepartmentID = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const { i18n } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        i18n.language === "uz"
          ? `${
              import.meta.env.VITE_BASE_URL_API
            }/departament/sitegetbyiddepartament/${id}`
          : `${
              import.meta.env.VITE_BASE_URL_API
            }/departament/sitegetbyuziddepartamenttranslation/${id}?language_code=${
              i18n.language
            }`
      );
      if (res.status === 200) {
        setData(res.data);
      } else {
        setData([]);
      }
    };

    fetchData();
  }, [id, i18n.language]);

  return (
    <div>
      <UniShowcase
        title={Number(data?.title) ? data?.description : data?.title}
      />
      <div className="root-container my-3">
        <div className="root-wrapper">
          <h3>{data?.title}</h3>
          <img
            src={`${import.meta.env.VITE_BASE_URL_IMG}${data?.img_?.url}`}
            style={{ width: "100%" }}
            alt=""
          />
          <div
            dangerouslySetInnerHTML={{ __html: data?.text }}
            data-aos="fade-up"
            className="my-3"
          />
        </div>
      </div>
    </div>
  );
};

export default DepartmentID;
