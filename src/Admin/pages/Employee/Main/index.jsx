import React from "react";
import { NavLink } from "react-router-dom";
import Actions from "./../../../components/Actions/index";
import Show from "../../../components/Show";
import Search from "../../../components/Search";
import Count from "../../../components/Count";
import Pagination from "../../../components/Pagination";

const Main = () => {
  return (
    <div>
      <div className="content-wrapper wrapper-min-height">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Сотрудники</h1>
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
                            className="table table-bordered dataTable no-footer dtr-inline"
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
                                  Ф.И.О. (uz)
                                </th>
                                <th
                                  className="sorting_disabled"
                                  rowSpan={1}
                                  colSpan={1}
                                >
                                  Сотрудник
                                </th>
                                <th
                                  className="sorting_disabled"
                                  rowSpan={1}
                                  colSpan={1}
                                >
                                  Отделение
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
                              <tr className="odd">
                                <td className="dtr-control" tabIndex={0}>
                                  15
                                </td>
                                <td>Raximov Rustam Vyacheslavovich</td>
                                <td>Kafedra mudiri</td>
                                <td>Vagonlar va vagon xo’jaligi</td>
                                <td>1</td>
                                <td style={{ textAlign: "center" }}>
                                  <Actions
                                    id="1"
                                    onDelete={() => alert("Delete")}
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="row">
                        <Count className="col-sm-12 col-md-5" />
                        <Pagination className="col-sm-12 col-md-7" />
                      </div>
                    </div>
                  </div>
                  {/* /.card-body */}
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

export default Main;
