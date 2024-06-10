import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import DataTable from "./../../../../components/DataTable/index";
import useAxios from "../../../../../hooks/useAxios";
import Cookies from "js-cookie";
import { useLanguageContext } from "../../../../../context/LanguageContext";
import Wrapper from "../../../../components/Wrapper";

const Main = () => {
  const { sendRequest, loading, error } = useAxios();
  const { setCreateLang } = useLanguageContext();
  const [data, setData] = useState([]);
  const [isDelete, setIsDelete] = useState(false);

  useEffect(() => {
    async function getData() {
      const res = await sendRequest({
        method: "GET",
        url: "/api/language/getalllanguage",
        headers: {
          Authorization: `Bearer ${Cookies.get("_token")}`,
        },
      });

      if (res.status === 200) {
        setData(res?.data.sort((a, b) => a.id - b.id));
      }
    }

    getData();

    setCreateLang(Symbol("none"));
  }, [isDelete]);

  return (
    <Wrapper title="Language" create={true}>
      <DataTable
        data={data}
        loading={loading}
        error={error}
        del={"/api/language/deletelanguage"}
        edit={"language/edit"}
        setIsDelete={setIsDelete}
        col={[
          { data: "id", title: "# " },
          { data: "title", title: "Title" },
          { data: "description", title: "Description" },
          { data: "code", title: "Code" },
          { data: "status_.status", title: "Status" },
        ]}
      />
    </Wrapper>
  );
};

export default Main;
