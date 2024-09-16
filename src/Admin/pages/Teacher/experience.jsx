import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import DataTable from "../../components/DataTable";
import Wrapper from "../../components/Wrapper";
import useAxios from "../../../hooks/useAxios";

const Experiance = () => {
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
        }/personscientificactivity/getallpersonscientificactivitysite?person_data_id=${
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
    <Wrapper title="Tadjriba" create={true}>
      <DataTable
        data={data}
        loading={loading}
        error={error}
        del={`${
          import.meta.env.VITE_BASE_URL_API
        }/personscientificactivity/deletepersonscientificactivity`}
        edit={"experience/edit"}
        setIsDelete={setIsDelete}
        col={[
          { data: "id", title: "# " },
          {
            data: null,
            title: "Sana",
            render: function (data) {
              return `${data.since_when} - ${data.until_when}`;
            },
          },
          { data: "whom", title: "whom" },
          { data: "where", title: "where" },
        ]}
      />
    </Wrapper>
  );
};

export default Experiance;
