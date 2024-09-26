import React, { useState, useEffect } from "react";
import Wrapper from "../../../components/Wrapper";
import DataTable from "../../../components/DataTable";
import useAxios from "../../../../hooks/useAxios";
import Cookies from "js-cookie";
import { useParams } from "react-router-dom";

const ConfirmComponent = ({ title, url, con }) => {
  const { loading, error, sendRequest } = useAxios();
  const [data, setData] = useState([]);
  const { id } = useParams();

  const getData = async () => {
    const res = await sendRequest({
      method: "GET",
      url: `${import.meta.env.VITE_BASE_URL_API}${url}/${id}`,
      headers: {
        Authorization: `Bearer ${Cookies.get("_token")}`,
      },
    });
    res.status === 200 && setData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const resolveTeacher = async (id) => {
    const res = await sendRequest({
      method: "POST",
      url: `${
        import.meta.env.VITE_BASE_URL_API
      }${con}/confirmed/${id}?confirm=true`,
      headers: {
        Authorization: `Bearer ${Cookies.get("_token")}`,
      },
    });

    console.log(res.data);
  };
  const rejectTeacher = (id) => {
    console.log(id);
  };

  return (
    <Wrapper title={title}>
      <DataTable
        data={data}
        loading={loading}
        error={error}
        confirm={true}
        rejectTeacher={rejectTeacher}
        resolveTeacher={resolveTeacher}
        col={[
          { data: "id", title: "#" },
          { data: "title", title: "Nomi" },
          { data: "description", title: "Tarif" },
          { data: "text", title: "Text" },
        ]}
      />
    </Wrapper>
  );
};

export default ConfirmComponent;
