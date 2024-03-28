import React from "react";
import { NavLink } from "react-router-dom";
import Actions from "../../../components/Actions";
import Show from "../../../components/Show";
import Search from "../../../components/Search";
import Count from "../../../components/Count";
import Pagination from "../../../components/Pagination";

const Menu = () => {
  const onHandleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div className="content-wrapper wrapper-min-height">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Меню</h1>
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
                    <div className="row">
                      <Show className="col-sm-12 col-md-6" />
                      <Search className="col-sm-12 col-md-6" />
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <table
                          onSubmit={onHandleSubmit}
                          className="table table-bordered"
                        >
                          <thead>
                            <tr>
                              <th style={{ width: "2%" }}>#</th>
                              <th>Title (uz)</th>
                              <th>Description (uz)</th>
                              <th>Menu type</th>
                              <th>Status</th>
                              <th style={{ width: "10%" }}>Действие</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>2</td>
                              <td>AXBOROT XIZMATI</td>
                              <td>
                                Rasmiy veb-sayt, ommaviy axborot vositalari,
                                telegramm-kanal, Facebook sahifalarini axborot
                                bilan ta'minlashi hamda boshqa axborot manbalari
                                bilan ishlab, shu jumladan, matbuot anjumanlari,
                                brifing va press-turlarni tashkil qilish orqali
                                universitet faoliyati haqidagi axborotlarni
                                muntazam, to‘liq va o‘z vaqtida berib borishi
                                kerak.
                              </td>
                              <td>Главный</td>
                              <td>1</td>
                              <td>
                                <Actions
                                  id={"1"}
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

export default Menu;
