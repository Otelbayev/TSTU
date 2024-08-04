import { useEffect, useState } from "react";
import { Input, Select } from "../../../components/Generics";
import Cookies from "js-cookie";
import DataTable from "../../../components/DataTable";
import useAxios from "../../../../hooks/useAxios";
import { useDateContext } from "../../../context/DateContext";

const AllTeacher = () => {
  const { loading, error, sendRequest } = useAxios();

  const { old_year, setOldYear } = useDateContext();
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await sendRequest({
      method: "get",
      url: `${
        import.meta.env.VITE_BASE_URL_API
      }/documentteacher110setcontroller/getalldocumentteacher110setadmin`,
      headers: {
        Authorization: `Bearer ${Cookies.get("_token")}`,
      },
      params: {
        oldYear: old_year,
        newYear: Number(old_year) + 1,
      },
    });

    res.status === 200 && setData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="content-wrapper wrapper-min-height">
        <section className="content pt-5">
          <div className="container-fluid">
            <section className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <div className="row">
                      <h4>O'quv yili:</h4>
                      <Select
                        value={old_year}
                        options={[
                          { value: 2020, label: "2020/2021" },
                          { value: 2021, label: "2021/2022" },
                          { value: 2022, label: "2022/2023" },
                          { value: 2023, label: "2023/2024" },
                          { value: 2024, label: "2024/2025" },
                          { value: 2025, label: "2025/2026" },
                          { value: 2026, label: "2026/2027" },
                          { value: 2027, label: "2027/2028" },
                          { value: 2028, label: "2028/2029" },
                          { value: 2029, label: "2029/2030" },
                          { value: 2030, label: "2030/2031" },
                        ]}
                        className={"col-md-3"}
                        onChange={(e) => {
                          setOldYear(e);
                          getData();
                        }}
                      />
                    </div>
                  </div>
                  <div className="card-body">
                    <DataTable
                      data={data}
                      loading={loading}
                      error={error}
                      col={[
                        { data: "id", title: "# " },
                        {
                          title: "FISH",
                          render: function (data, type, row) {
                            return `${row?.firstName} ${row?.fathers_name}`;
                          },
                        },
                      ]}
                      appeal={true}
                      edit={"teacher-110"}
                    />
                  </div>
                  <div className="card-footer clearfix">
                    <ul className="pagination pagination-sm m-0 float-right"></ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AllTeacher;
