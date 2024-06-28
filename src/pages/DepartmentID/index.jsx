import React, { useEffect, useState } from "react";
import UniShowcase from "./../../components/UniShowcase/index";
import { useParams } from "react-router-dom";
import { useLanguageContext } from "../../context/LanguageContext";
import axios from "axios";
import img from "../../assets/images/ilmiy.png";

const DepartmentID = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const { language } = useLanguageContext();

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        language === "uz"
          ? `/api/departament/sitegetbyiddepartament/${id}`
          : `/api/departament/sitegetbyuziddepartamenttranslation/${id}?language_code=${language}`
      );
      if (res.status === 200) {
        setData(res.data);
      } else {
        setData([]);
      }
    };

    fetchData();
  }, [id, language]);


  return (
    <div>
      <UniShowcase title={data?.title} />
      <div className="root-container my-3">
        <div className="root-wrapper">
          <h3>{data?.title}</h3>
          <img src={img} className="w-80" alt="" />
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
