import React, { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import { Container } from "./style";
import { Facebook } from "react-content-loader";
import UniShowcase from "./../../components/UniShowcase/index";
import { useLanguageContext } from "./../../context/LanguageContext/index";
import { useParams } from "react-router-dom";

const PageID = () => {
  const { sendRequest, loading } = useAxios();
  const [data, setData] = useState([]);

  const { language } = useLanguageContext();
  const { id } = useParams();

  useEffect(() => {
    async function getData() {
      const response = await sendRequest({
        method: "get",
        url:
          language === "uz"
            ? `/api/page/sitegetbyidpage/${id}`
            : `/api/page/sitegetbyuzidpagetranslation/${id}?language_code=${language}`,
      });
      setData(response.data);
    }
    getData();
  }, [id, language]);

  return (
    <div>
      <UniShowcase title={data?.title} />
      <Container className="root-container my-5">
        <div className="root-wrapper">
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
