import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { Input, Select } from "../Generics";
import { studyYears } from "../../utils/mock";
import { message } from "antd";
import axios from "axios";

const Wrapper = ({
  children,
  title,
  create,
  path,
  date,
  setData,
  sendRequest,
  isDelete,
  url,
  back,
  additional,
  setUpdateData,
}) => {
  const { i18n } = useTranslation();

  const commentRef = useRef();
  const [oldYear, setOldYear] = useState(2024);
  const dateRef = useRef();
  const authorRef = useRef();
  const ballRef = useRef();
  const fileRef = useRef();

  const role = Cookies.get("role");
  const navigate = useNavigate();

  function getCurrentDate(prop) {
    const date = new Date();

    if (prop === "now") {
      // Current date
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const day = date.getDate().toString().padStart(2, "0");
      return `${year}-${month}-${day}`;
    } else if (prop === "old") {
      // Subtract 1 month
      date.setMonth(date.getMonth() - 1);
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const day = date.getDate().toString().padStart(2, "0");
      return `${year}-${month}-${day}`;
    } else {
      return "Invalid prop";
    }
  }

  const [start, setStart] = useState(getCurrentDate("old"));
  const [end, setEnd] = useState(getCurrentDate("now"));

  const getData = async () => {
    const response = await axios({
      method: "get",
      url: `${
        import.meta.env.VITE_BASE_URL_API
      }${url}?&start_time=${start}&end_time=${end}`,
      headers: {
        Authorization: `Bearer ${Cookies.get("_token")}`,
      },
    });
    setData(
      role === "moderatorcontent"
        ? response?.data?.list?.sort((a, b) => a.id - b.id)
        : response?.data.sort((a, b) => a.id - b.id)
    );
  };

  useEffect(() => {
    if (date) {
      getData();
    }
  }, [isDelete]);

  function handleClick(e) {
    e.preventDefault();
    getData();
  }

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("person_id", 63);
    formData.append("old_year", Number(oldYear));
    formData.append("new_year", Number(oldYear) + 1);
    formData.append("document_id", 89);
    formData.append("comment", commentRef?.current?.value);
    formData.append("fixed_date", dateRef?.current?.value);
    formData.append("number_authors", Number(authorRef?.current?.value));
    formData.append("score", Number(ballRef?.current?.value));
    formData.append("file_up", fileRef?.current?.files[0] || null);

    try {
      message.loading({ key: "uin", content: "Yuborilmoqda!" });
      const response = await axios({
        method: "post",
        url: `${
          import.meta.env.VITE_BASE_URL_API
        }/documentteacher110setcontroller/createdocumentteacher110setstudydep`,
        data: formData,
        headers: {
          Authorization: `Bearer ${Cookies.get("_token")}`,
        },
        params: {
          person_id: 63,
          old_year: oldYear,
          new_year: oldYear + 1,
          document_id: 89,
          comment: commentRef?.current?.value,
          fixed_date: dateRef?.current?.value,
          number_authors: Number(authorRef?.current?.value),
          score: Number(ballRef?.current?.value),
        },
      });

      if (response.status === 200) {
        message.success({ key: "uin", content: "Yaratildi!" });
        setUpdateData({ name: "Jasurbek" });
        getData();
        $("#exampleModal").modal("hide");
        commentRef.current.value = "";
        setOldYear(2024);
        authorRef.current.value = null;
        ballRef.current.value = null;
        fileRef.current = null;
        dateRef.current = null;
      }
    } catch (err) {
      console.log(err);
      message.error({ key: "uin", content: err?.response?.data });
    }
  };

  return (
    <div>
      <div className="content-wrapper wrapper-min-height">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <h1>{title}</h1>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="container-fluid">
            <section className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    {date ? (
                      <form onSubmit={handleClick} action="">
                        <div className="row">
                          <div className="col-sm-3">
                            <div className="card-title">
                              {create && (
                                <NavLink
                                  to={`/${i18n.language}/admin/blogs/create`}
                                  className="btn btn-primary"
                                >
                                  Yaratish
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
                            >
                              Jadvalni yangilash
                            </button>
                          </div>
                        </div>
                      </form>
                    ) : (
                      <div className="card-title">
                        {create && (
                          <NavLink
                            to={path ? path : "create"}
                            className="btn btn-primary"
                          >
                            Yaratish
                          </NavLink>
                        )}
                        {back && (
                          <NavLink
                            onClick={() => navigate(-2)}
                            className="btn btn-primary"
                          >
                            Orqaga
                          </NavLink>
                        )}
                        {additional && (
                          <button
                            data-toggle="modal"
                            data-target="#exampleModal"
                            className="btn btn-outline-primary mx-2"
                          >
                            Maqsadli parametr
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                  <div>
                    <div
                      className="modal fade "
                      id="exampleModal"
                      tabIndex={-1}
                      role="dialog"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                              Maqsadli parametr
                            </h5>
                            <button
                              type="button"
                              className="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">×</span>
                            </button>
                          </div>
                          <div className="modal-body">
                            <form className="row" onSubmit={handleSubmit}>
                              <Input
                                className="col-md-6"
                                ref={commentRef}
                                label="Tarif"
                              />
                              <Select
                                className={"col-md-6"}
                                label={"O'quv yili"}
                                options={studyYears}
                                value={oldYear}
                                onChange={(e) => setOldYear(e)}
                              />
                              <Input
                                className="col-md-6"
                                type="date"
                                label="Sana"
                                ref={dateRef}
                              />
                              <Input
                                className="col-md-6"
                                type="number"
                                label="Avtorlar soni"
                                ref={authorRef}
                              />
                              <Input
                                className="col-md-6"
                                type="number"
                                label="Ball"
                                ref={ballRef}
                              />
                              <Input
                                className="col-md-6"
                                type="file"
                                label="Fayl"
                                ref={fileRef}
                              />
                            </form>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              id="closeBtn"
                              className="btn btn-secondary"
                              data-dismiss="modal"
                            >
                              Yopish
                            </button>
                            <button
                              type="button"
                              onClick={handleSubmit}
                              className="btn btn-primary"
                            >
                              Qo'shish
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
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
