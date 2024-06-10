import React, { useEffect, useRef, useState } from "react";
import useAxios from "./../../../hooks/useAxios";
import Cookies from "js-cookie";
import { NavLink } from "react-router-dom";
import DataTable from "../../components/DataTable";
import loadingGif from "../../../assets/icons/loading.gif";
import Wrapper from "../../components/Wrapper";

const Appeals = () => {
  const [data, setData] = useState([]);
  const { sendRequest, error, loading } = useAxios();
  const tableRef = useRef(null);
  const dataTableInstance = useRef(null);

  useEffect(() => {
    async function fetchData() {
      const response = await sendRequest({
        method: "get",
        url: "/api/appealtorector/getallappealtorector",
        headers: {
          Authorization: `Bearer ${Cookies.get("_token")}`,
        },
      });

      response.status === 200 && setData(response.data.reverse());
    }

    fetchData();
  }, []);

  return (
    <Wrapper>
      <form onSubmit={(e) => e.preventDefault()} style={{ paddingBottom: 10 }}>
        <div className="row">
          <div className="col-sm-3"> </div>
          <div className="col-sm-3">
            <input
              type="date"
              className="form-control"
              name="subday"
              id="subday"
              defaultValue="2024-03-17"
            />
          </div>
          <div className="col-sm-3">
            <input
              type="date"
              className="form-control"
              name="today"
              id="today"
              defaultValue="2024-04-16"
            />
          </div>
          <div className="col-sm-3">
            <button
              type="submit"
              className="btn btn-primary"
              id="refresh"
              style={{ width: "100%" }}
            >
              Jadvalni Yanagilash
            </button>
          </div>
        </div>
      </form>
      <div className="col-sm-12">
        <DataTable
          data={data}
          error={error}
          loading={loading}
          del={"/api/blogcontroller/deleteblog"}
          edit={"blogs/edit"}
          // setIsDelete={setIsDelete}
          col={[
            { data: "id", title: "# " },
            { data: "fio_", title: "FIO" },
            { data: "email", title: "Email" },
            { data: "telephone_number_one", title: "Phone" },
            { data: "created_at", title: "Created" },
            { data: "country_.title", title: "Country" },
            { data: "status_.status", title: "Status" },
          ]}
        />
      </div>
    </Wrapper>
  );
};

export default Appeals;
