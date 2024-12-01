import React, { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import { Container } from "./style";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import img from "../../assets/images/noimg.jpg";
import { Helmet } from "react-helmet";
import Loading2 from "../../components/Loading2";
import HtmlContentRenderer from "../../components/HtmlContentRenderer";
import { Image } from "antd";
import { FaRegEye } from "react-icons/fa";
import { useShowcaseTitleContext } from "../../context/ShowcaseTitleContext";

const PageID = ({ oldID }) => {
  const { sendRequest, loading } = useAxios();
  const [data, setData] = useState([]);
  const { setTitle } = useShowcaseTitleContext();

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
    setTitle(data.title);
  }, [data]);

  return (
    <div>
      <Helmet>
        <title>{data?.title}</title>
        <meta name="description" content={data?.title} />
      </Helmet>

      <Container className="root-container my-5">
        <div className="root-wrapper">
          <div className="page-header">
            {data?.img_?.url || data?.img_translation_?.url ? (
              <Image
                preview={{
                  mask: (
                    <span
                      style={{
                        fontSize: "16px",
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        gap: "3px",
                      }}
                    >
                      <FaRegEye size={"15px"} /> Ko'rish
                    </span>
                  ),
                }}
                loading="lazy"
                src={`${import.meta.env.VITE_BASE_URL_IMG}${
                  data?.img_?.url || data?.img_translation_?.url
                }`}
                alt=""
              />
            ) : (
              <Image
                preview={{
                  mask: (
                    <span
                      style={{
                        fontSize: "16px",
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        gap: "3px",
                      }}
                    >
                      <FaRegEye size={"15px"} /> Ko'rish
                    </span>
                  ),
                }}
                loading="lazy"
                src={img}
              />
            )}

            <div>
              <div className="line"></div>
              <div className="page-title">{data?.title}</div>
            </div>
          </div>
          {loading ? (
            <Loading2 />
          ) : (
            <HtmlContentRenderer htmlContent={`${data?.text}`} />
          )}
        </div>
      </Container>
    </div>
  );
};

export default PageID;
