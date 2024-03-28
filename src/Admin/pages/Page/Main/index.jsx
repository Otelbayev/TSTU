import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Actions from "../../../components/Actions";
import useAxios from "../../../../hooks/useAxios";
import Cookies from "js-cookie";
import Search from "../../../components/Search";
import Show from "../../../components/Show";
import Count from "../../../components/Count";
import Pagination from "../../../components/Pagination";

const Pages = () => {
  const { sendRequest } = useAxios();
  const [data, setData] = useState([]);
  const [isDelete, setIsDelete] = useState(false);

  const getData = async () => {
    try {
      const response = await sendRequest({
        method: "get",
        url: "/api/page/getallpage",
        headers: {
          Authorization: `Bearer ${Cookies.get("_token")}`,
        },
      });
      setData(response?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [isDelete]);

  return (
    <div>
      <div className="content-wrapper wrapper-min-height">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Страницы</h1>
              </div>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">
                      <NavLink to="create" className="btn btn-primary">
                        Создать
                      </NavLink>
                    </h3>
                  </div>
                  <div className="card-body">
                    <div
                      id="example1_wrapper"
                      className="dataTables_wrapper dt-bootstrap4 no-footer"
                    >
                      <div className="row">
                        <Show className="col-sm-12 col-md-6" />
                        <Search className="col-sm-12 col-md-6" />
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <table
                            className="table table-bordered table-striped dataTable no-footer dtr-inline"
                            id="example1"
                            aria-describedby="example1_info"
                          >
                            <thead>
                              <tr>
                                <th
                                  style={{ width: "2%" }}
                                  className="sorting_disabled"
                                  rowSpan={1}
                                  colSpan={1}
                                >
                                  #
                                </th>
                                <th
                                  className="sorting_disabled"
                                  rowSpan={1}
                                  colSpan={1}
                                >
                                  Заголовок (uz)
                                </th>
                                <th
                                  className="sorting_disabled"
                                  rowSpan={1}
                                  colSpan={1}
                                >
                                  Описание (uz)
                                </th>
                                <th
                                  className="sorting_disabled"
                                  rowSpan={1}
                                  colSpan={1}
                                >
                                  Страница
                                </th>
                                <th
                                  className="sorting_disabled"
                                  rowSpan={1}
                                  colSpan={1}
                                >
                                  Статус
                                </th>
                                <th
                                  style={{ width: "10%" }}
                                  className="sorting_disabled"
                                  rowSpan={1}
                                  colSpan={1}
                                >
                                  Действие
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {data?.length ? (
                                data.map(
                                  ({ title, title_short, status_, id }) =>
                                    status_.id === 1 && (
                                      <tr key={id}>
                                        <td>{id}</td>
                                        <td>{title_short}</td>
                                        <td>{title}</td>
                                        <td>type3</td>
                                        <td>{status_.id}</td>
                                        <td>
                                          <Actions
                                            url={`/api/page/deletepage/${id}`}
                                            id={id}
                                            setIsDelete={setIsDelete}
                                          />
                                        </td>
                                      </tr>
                                    )
                                )
                              ) : (
                                <tr>
                                  <td colSpan={6} className="text-center">
                                    no data
                                  </td>
                                </tr>
                              )}
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="row">
                        <Count className="col-sm-12 col-md-5" />
                        <Pagination
                          current={1}
                          total={data.length}
                          className="col-sm-12 col-md-7"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="card-footer clearfix">
                    <ul className="pagination pagination-sm m-0 float-right"></ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Pages;
