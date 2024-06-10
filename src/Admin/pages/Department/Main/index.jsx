import React, { useEffect, useRef, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import useAxios from "../../../../hooks/useAxios";
import Cookies from "js-cookie";
import DataTable from "./../../../components/DataTable";
import { useLanguageContext } from "./../../../../context/LanguageContext/index";
import Wrapper from "../../../components/Wrapper";

const Department = () => {
  const { sendRequest, loading, error } = useAxios();
  const [data, setData] = useState([]);
  const [isDelete, setIsDelete] = useState(null);
  const param = useParams();
  const { language } = useLanguageContext();

  const type = param?.type
    ? `${param.type[0].toUpperCase()}${param.type.slice(1)}`
    : "";

  useEffect(() => {
    async function fetchData() {
      const response = await sendRequest({
        method: "get",
        url: `/api/departament/getalldepartamenttype/${type}`,
        headers: {
          Authorization: `Bearer ${Cookies.get("_token")}`,
        },
      });
      response.status === 200 &&
        setData(response.data?.sort((a, b) => a.id - b.id));
    }
    fetchData();
  }, [isDelete, type]);

 

  return (
    <Wrapper
      title={type}
      create={true}
      path={`/${language}/admin/department/create`}
    >
      <DataTable
        data={data}
        loading={loading}
        error={error}
        del={"/api/departament/deletedepartament"}
        edit={"department/edit"}
        setIsDelete={setIsDelete}
        col={[
          { data: "id", title: "# " },
          { data: "title", title: "Title" },
          { data: "description", title: "Description" },
          { data: "departament_type_.type", title: "Type" },
          { data: "status_.status", title: "Status" },
        ]}
      />
    </Wrapper>
  );
};

export default Department;
