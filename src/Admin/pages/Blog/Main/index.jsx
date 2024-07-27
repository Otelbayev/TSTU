import React, { useEffect, useRef, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import useAxios from "../../../../hooks/useAxios";
import Cookies from "js-cookie";
import DataTable from "../../../components/DataTable";
import Wrapper from "../../../components/Wrapper";

const Pages = () => {
  const { sendRequest, loading, error } = useAxios();
  const [data, setData] = useState([]);
  const [isDelete, setIsDelete] = useState(false);
  const { type } = useParams();

  return (
    <Wrapper
      title={"Blog"}
      date={true}
      create={true}
      type={type}
      setData={setData}
      sendRequest={sendRequest}
      isDelete={isDelete}
      url="/blogcontroller/getallblog"
    >
      <DataTable
        data={data}
        error={error}
        loading={loading}
        del={`${import.meta.env.VITE_BASE_URL_API}/blogcontroller/deleteblog`}
        edit={"blogs/edit"}
        setIsDelete={setIsDelete}
        col={[
          { data: "id", title: "# " },
          { data: "title", title: "Title" },
          { data: "title_short", title: "Short Title" },
          { data: "blog_category_.title", title: "Katigoriya" },
          { data: "status_.status", title: "Status" },
        ]}
      />
    </Wrapper>
  );
};

export default Pages;
