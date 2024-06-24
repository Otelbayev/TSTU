import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useLanguageContext } from "./../../../../context/LanguageContext/index";
import DataTable from "../../../components/DataTable";
import useAxios from "../../../../hooks/useAxios";
import Cookies from "js-cookie";
import Wrapper from "../../../components/Wrapper";

const Main = () => {
  const { language } = useLanguageContext();
  const { sendRequest, loading, error } = useAxios();
  const [isDelete, setIsDelete] = useState(false);
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await sendRequest({
      method: "GET",
      url: "/api/persondata/getallpersondata",
      headers: {
        Authorization: `Bearer ${Cookies.get("_token")}`,
      },
    });

    res.status === 200 && setData(res?.data.sort((a, b) => a.id - b.id));
  };

  useEffect(() => {
    getData();
  }, [isDelete]);

  return (
    <Wrapper
      title="Employee"
      create={true}
      path={`/${language}/admin/employee/create`}
    >
      <DataTable
        data={data}
        loading={loading}
        error={error}
        del={"/api/persondata/deletepersondata"}
        edit={"employee/edit"}
        setIsDelete={setIsDelete}
        col={[
          { data: "id", title: "# " },
          {
            data: null,
            title: "FISH",
            render: function (data, type, row) {
              return `${row.persons_?.firstName} ${row.persons_?.lastName} ${row.persons_?.fathers_name}`;
            },
          },
          {
            data: "persons_.departament_.title",
            title: "Bo'lim",
          },
          { data: "status_.status", title: "Status" },
        ]}
      />
    </Wrapper>
  );
};

export default Main;
