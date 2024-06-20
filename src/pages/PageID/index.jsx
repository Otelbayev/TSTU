import React, { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import { Container } from "./style";
import { Facebook } from "react-content-loader";

const PageID = () => {
  const { sendRequest, loading } = useAxios();
  const [data, setData] = useState([]);

  const id = window.location.pathname.split("/")[3];

  useEffect(() => {
    async function getData() {
      const response = await sendRequest({
        method: "get",
        url: `/api/page/sitegetbyidpage/${id}`,
      });
      setData(response.data);
    }
    getData();
  }, [window.location.pathname]);

  return (
    <Container className="root-container my-5">
      <div className="root-wrapper">
        {loading ? (
          <Facebook backgroundColor="lightgray" foregroundColor="#fff" />
        ) : (
          <div
            // data-aos="fade-up"
            dangerouslySetInnerHTML={{ __html: data?.text }}
          />
        )}
      </div>
    </Container>
  );
};

export default PageID;
