import { useEffect, useState } from "react";
import { Input } from "../../../components/Generics";
import Cookies from "js-cookie";
import DataTable from "../../../components/DataTable";
import useAxios from "../../../../hooks/useAxios";
import { useDateContext } from "../../../context/DateContext";

const AllTeacher = () => {
  const { loading, error, sendRequest } = useAxios();

  const { old_year, setOldYear } = useDateContext();
  const [data, setData] = useState([]);

  const onDateSubmit = () => {};

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
                    <form className="row" onSubmit={onDateSubmit}>
                      <div className="col-md-2">
                        <h2>O'quv yili:</h2>
                      </div>
                      <Input
                        value={old_year}
                        onChange={(e) => setOldYear(e.target.value)}
                        className="form-group col-md-2"
                        type="number"
                        min={2020}
                      />
                      <Input
                        value={Number(old_year) + 1}
                        disabled={true}
                        className="form-group col-md-2"
                      />
                      <div className="col-md-2">
                        <button className="btn btn-primary" type="submit">
                          Yangilash
                        </button>
                      </div>
                    </form>
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
