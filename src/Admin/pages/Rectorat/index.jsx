import React, { useEffect, useState } from "react";
import Wrapper from "../../components/Wrapper";
import DataTable from "../../components/DataTable";
import useAxios from "../../../hooks/useAxios";

const Rectorat = () => {
  const [data, setData] = useState([]);
  const { sendRequest, loading, error } = useAxios();

  return (
    <Wrapper title="Rektorat" create={true}>
      <DataTable
        data={data}
        loading={loading}
        error={error}
        edit={"rectorat/edit"}
        col={[{ data: "id", title: "# " }]}
      />
    </Wrapper>
  );
};

export default Rectorat;
