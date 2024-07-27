import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import Cookies from "js-cookie";

const Wrapper = ({
  children,
  title,
  create,
  path,
  date,
  type,
  setData,
  sendRequest,
  isDelete,
  url,
}) => {
  const { i18n } = useTranslation();

  function getCurrentDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  const [start, setStart] = useState(getCurrentDate());
  const [end, setEnd] = useState(getCurrentDate());

  const getData = async () => {
    const response = await sendRequest({
      method: "get",
      url: `${
        import.meta.env.VITE_BASE_URL_API
      }${url}?blog_category=${type}&start_time=${start}&end_time=${end}`,
      headers: {
        Authorization: `Bearer ${Cookies.get("_token")}`,
      },
    });
    setData(response?.data.sort((a, b) => a.id - b.id));
  };

  useEffect(() => {
    if (date) {
      getData();
    }
  }, [isDelete, type]);

  function handleClick() {
    getData();
  }

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
                  <div className="card-header">
                    {/* {create && (
                      {date ? (
                        <div className="row">
                          <div className="col-sm-3">
                            <div className="card-title">
                              <NavLink
                                to={`/${i18n.language}/admin/blogs/create`}
                                className="btn btn-primary"
                              >
                                Create
                              </NavLink>
                            </div>
                          </div>
                          <div className="col-sm-3">
                            <input
                              type="date"
                              className="form-control"
                              name="subday"
                              id="subday"
                              value={start}
                              onChange={(e) => setStart(e.target.value)}
                            />
                          </div>
                          <div className="col-sm-3">
                            <input
                              type="date"
                              className="form-control"
                              name="today"
                              id="today"
                              value={end}
                              onChange={(e) => setEnd(e.target.value)}
                            />
                          </div>
                          <div className="col-sm-3">
                            <button
                              type="submit"
                              className="btn btn-primary"
                              id="refresh"
                              style={{ width: "100%" }}
                              onClick={onClick}
                            >
                              Update table
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="card-title">
                          <NavLink
                            to={path ? path : "create"}
                            className="btn btn-primary"
                          >
                            Create
                          </NavLink>
                        </div>
                      )}
                    </div>
                  )} */}

                    {date ? (
                      <div className="row">
                        <div className="col-sm-3">
                          <div className="card-title">
                            {create && (
                              <NavLink
                                to={`/${i18n.language}/admin/blogs/create`}
                                className="btn btn-primary"
                              >
                                Create
                              </NavLink>
                            )}
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <input
                            type="date"
                            className="form-control"
                            name="subday"
                            id="subday"
                            value={start}
                            onChange={(e) => setStart(e.target.value)}
                          />
                        </div>
                        <div className="col-sm-3">
                          <input
                            type="date"
                            className="form-control"
                            name="today"
                            id="today"
                            value={end}
                            onChange={(e) => setEnd(e.target.value)}
                          />
                        </div>
                        <div className="col-sm-3">
                          <button
                            type="submit"
                            className="btn btn-primary"
                            id="refresh"
                            style={{ width: "100%" }}
                            onClick={handleClick}
                          >
                            Update table
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="card-title">
                        {create && (
                          <NavLink
                            to={path ? path : "create"}
                            className="btn btn-primary"
                          >
                            Create
                          </NavLink>
                        )}
                      </div>
                    )}
                  </div>
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
