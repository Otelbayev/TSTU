import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import DataTable from "../../components/DataTable";
import Wrapper from "../../components/Wrapper";
import useAxios from "../../../hooks/useAxios";

const Portfolio = () => {
  const { sendRequest, loading, error } = useAxios();
  const [data, setData] = useState([]);
  const [isDelete, setIsDelete] = useState(false);

  const _userDetails = JSON.parse(Cookies.get("_userDetails"));

  const getData = async () => {
    try {
      const response = await sendRequest({
        method: "get",
        url: `${
          import.meta.env.VITE_BASE_URL_API
        }/personportfolio/getallpersonportfoliosite?person_data_id=${
          _userDetails.id
        }`,
        headers: {
          Authorization: `Bearer ${Cookies.get("_token")}`,
        },
      });
      setData(response?.data.sort((a, b) => a.id - b.id));
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, [isDelete]);

  return (
    <Wrapper title="Portfolio" create={true}>
      <DataTable
        data={data}
        loading={loading}
        error={error}
        del={`${
          import.meta.env.VITE_BASE_URL_API
        }/personportfolio/deletepersonportfolio`}
        edit={"portfolio/edit"}
        setIsDelete={setIsDelete}
        col={[
          { data: "id", title: "# " },
          { data: "title", title: "Title" },
          { data: "description", title: "description" },
          { data: "status_.name", title: "status" },
        ]}
      />
    </Wrapper>
  );
};

export default Portfolio;
