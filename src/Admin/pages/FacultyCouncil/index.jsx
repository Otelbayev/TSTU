import { useEffect, useState } from "react";
import { Select } from "../../components/Generics";
import Cookies from "js-cookie";
import DataTable from "../../components/DataTable";
import useAxios from "../../../hooks/useAxios";
import { useDateContext } from "../../context/DateContext";
import { studyYears } from "../../utils/mock";
import DownloadFile from "./../../components/file-download";

const FacultyCouncil = () => {
  const { loading, error, sendRequest } = useAxios();

  const { old_year, setOldYear } = useDateContext();
  const [data, setData] = useState([]);

  const getData = async (old_year) => {
    const res = await sendRequest({
      method: "get",
      url: `${
        import.meta.env.VITE_BASE_URL_API
      }/documentteacher110setcontroller/getalldocumentteacher110setfacultycouncil`,
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
    getData(old_year);
  }, [old_year]);

  return (
    <div>
      <div className="content-wrapper wrapper-min-height">
        <section className="content pt-5">
          <div className="container-fluid">
            <section className="content-header">
              <h1>Pedagog xodimlarning o‘quv yilidagi faoliyatini baholash</h1>
            </section>
            <section className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <div className="row">
                      <div className="col-6 d-flex gap-5">
                        <h4 className="py-2 ">O'quv yili:</h4>
                        <Select
                          value={old_year}
                          options={studyYears}
                          className={"py-2 mx-2"}
                          onChange={(e) => {
                            setOldYear(e);
                          }} 
                        />
                      </div>
                      <div className="text-right col-6">
                        <DownloadFile />
                      </div>
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
                        { data: "id", title: "Ball" },
                      ]}
                      appeal={true}
                      edit={"faculty-council"}
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

export default FacultyCouncil;
