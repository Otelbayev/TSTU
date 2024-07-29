import React, { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import { Container } from "./style";
import { Facebook } from "react-content-loader";
import UniShowcase from "./../../components/UniShowcase/index";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import img from "../../assets/images/noimg.jpg";

const PageID = ({ oldID }) => {
  const { sendRequest, loading } = useAxios();
  const [data, setData] = useState([]);

  const { i18n } = useTranslation();
  const { id } = useParams();

  useEffect(() => {
    async function getData() {
      const response = await sendRequest({
        method: "get",
        url:
          i18n.language === "uz"
            ? `${import.meta.env.VITE_BASE_URL_API}/page/sitegetbyidpage/${
                id || oldID
              }`
            : `${
                import.meta.env.VITE_BASE_URL_API
              }/page/sitegetbyuzidpagetranslation/${
                id || oldID
              }?language_code=${i18n.language}`,
      });
      setData(response.data);
    }
    getData();
  }, [id, i18n.language, oldID]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <UniShowcase title={data?.title} />
      <Container className="root-container my-5">
        <div className="root-wrapper">
          <div className="page-header">
            {data?.img_?.url || data?.img_translation_?.url ? (
              <img
                src={`${import.meta.env.VITE_BASE_URL_IMG}${
                  data?.img_?.url || data?.img_translation_?.url
                }`}
                alt=""
              />
            ) : (
              <img src={img} />
            )}

            <div>
              <div className="line"></div>
              <div className="page-title">{data?.title}</div>
            </div>
          </div>
          {loading ? (
            <Facebook backgroundColor="lightgray" foregroundColor="#fff" />
          ) : (
            <div
              data-aos="fade-up"
              dangerouslySetInnerHTML={{ __html: data?.text }}
            />
          )}
        </div>
      </Container>
    </div>
  );
};

export default PageID;
