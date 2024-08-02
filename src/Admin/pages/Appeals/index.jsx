import React, { useState } from "react";
import useAxios from "./../../../hooks/useAxios";
import DataTable from "../../components/DataTable";
import Wrapper from "../../components/Wrapper";

const Appeals = () => {
  const { sendRequest, error, loading } = useAxios();
  const [data, setData] = useState([]);

  return (
    <Wrapper
      create={false}
      date={true}
      setData={setData}
      sendRequest={sendRequest}
      isDelete={""}
      url="/appealtorector/getallappealtorector"
    >
      <DataTable
        data={data}
        error={error}
        loading={loading}
        appeal={true}
        edit={"appeals"}
        col={[
          { data: "id", title: "# " },
          { data: "fio_", title: "FIO" },
          { data: "email", title: "Email" },
          { data: "telephone_number_one", title: "Phone" },
          { data: "created_at", title: "Created" },
          { data: "country_.title", title: "Country" },
        ]}
      />
    </Wrapper>
  );
};

export default Appeals;
