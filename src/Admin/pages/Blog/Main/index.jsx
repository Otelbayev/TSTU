import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import useAxios from "../../../../hooks/useAxios";
import Cookies from "js-cookie";
import DataTable from "../../../components/DataTable";
import Wrapper from "../../../components/Wrapper";

const Pages = () => {
  const { sendRequest, loading, error } = useAxios();
  const [data, setData] = useState([]);
  const [isDelete, setIsDelete] = useState(false);

  const getData = async () => {
    try {
      const response = await sendRequest({
        method: "get",
        url: "/api/blogcontroller/getallblog",
        headers: {
          Authorization: `Bearer ${Cookies.get("_token")}`,
        },
      });
      setData(response?.data.sort((a, b) => a.id - b.id));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [isDelete]);


  return (
    <Wrapper title={"Blog"} create={true}>
      <DataTable
        data={data}
        error={error}
        loading={loading}
        del={"/api/blogcontroller/deleteblog"}
        edit={"blogs/edit"}
        setIsDelete={setIsDelete}
        col={[
          { data: "id", title: "# " },
          { data: "title", title: "Title" },
          { data: "title_short", title: "Short Title" },
          { data: "description", title: "Description" },
          { data: "status_.status", title: "Status" },
        ]}
      />
    </Wrapper>
  );
};

export default Pages;
