import React from "react";
import { NavLink } from "react-router-dom";

const Wrapper = ({ children, title, create, path }) => {
  return (
    <div>
      <div className="content-wrapper wrapper-min-height">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>{title}</h1>
              </div>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="container-fluid">
            <section className="row">
              <div className="col-md-12">
                <div className="card">
                  {create && (
                    <div className="card-header">
                      <div className="card-title">
                        <NavLink
                          to={path ? path : "create"}
                          className="btn btn-primary"
                        >
                          Create
                        </NavLink>
                      </div>
                    </div>
                  )}
                  <div className="card-body">{children}</div>
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

export default Wrapper;
