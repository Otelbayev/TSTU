import { ChooseFile, Input } from "../../components/Generics";
import { message } from "antd";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { NavLink } from "react-router-dom";
import loadingGif from "../../../assets/icons/loading.gif";
import useAxios from "../../../hooks/useAxios";

const Upload = ({ id, old_year, new_year, upd }) => {
  const commentRef = useRef();
  const editFileRef = useRef();
  const fileRef = useRef();
  const textRef = useRef();

  const [isEdit, setIsEdit] = useState(false);
  const [data, setData] = useState([]);

  const { sendRequest, loading, error } = useAxios();

  const getData = async (id) => {
    const res = await sendRequest({
      method: "get",
      url: `${
        import.meta.env.VITE_BASE_URL_API
      }/documentteacher110setcontroller/getbydocumentiddocumentteacher110set/${id}`,
      headers: {
        Authorization: `Bearer ${Cookies.get("_token")}`,
      },
      params: {
        oldYear: old_year,
        newYear: Number(old_year) + 1,
      },
    });
    res.status === 200 && setData(res?.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!fileRef?.current?.files[0] || !textRef.current.value) {
      message.error("All files are required");
      return;
    }

    try {
      message.loading({ key: "form", content: "Loading.." });
      const formData = new FormData();
      formData.append("old_year", old_year);
      formData.append("new_year", new_year);
      formData.append("document_id", id);
      formData.append("comment", textRef?.current?.value);
      formData.append("file_up", fileRef?.current?.files[0]);

      const res = await axios.post(
        `${
          import.meta.env.VITE_BASE_URL_API
        }/documentteacher110setcontroller/createdocumentteacher110set`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("_token")}`,
          },
          params: {
            old_year,
            new_year,
            document_id: id,
            comment: textRef?.current?.value,
          },
        }
      );

      if (res.status === 200) {
        message.success({ key: "form", content: "Succesfully uploaded!" });
        textRef.current.value = "";
        fileRef.current.value = "";
        getData(id);
      }
    } catch (err) {
      message.error({ key: "form", content: err?.response?.data });
      console.log(err);
    }
  };

  const onSave = async (key) => {
    if (!commentRef.current?.value) {
      message.error("All files are required");
      return;
    }
    try {
      message.loading({ key: "error", content: "Loading!" });

      const formData = new FormData();
      formData.append("old_year", Number(old_year));
      formData.append("new_year", Number(new_year));
      formData.append("document_id", Number(id));
      formData.append("comment", commentRef.current.value);
      formData.append("file_up", editFileRef?.current?.files[0] || "null");

      const res = await axios.put(
        `${
          import.meta.env.VITE_BASE_URL_API
        }/documentteacher110setcontroller/updatedocumentteacher110set/${key}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("_token")}`,
          },
          params: {
            old_year,
            new_year,
            document_id: id,
            comment: commentRef.current?.value,
          },
        }
      );

      if (res.status === 200) {
        setIsEdit(false);
        message.success({ key: "error", content: "Succesfully updated!" });
        getData(id);
      }
    } catch (err) {
      message.error({ key: "error", content: "Error!" });
    }
  };

  const onDel = async (key) => {
    const res = await axios.delete(
      `${
        import.meta.env.VITE_BASE_URL_API
      }/documentteacher110setcontroller/deletedocumentteacher110set/${key}`,
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("_token")}`,
        },
      }
    );

    if (res.status === 200) {
      getData(id);
    }
  };

  useEffect(() => {
    getData(id);
  }, [upd]);

  return (
    <div>
      <form className="row" onSubmit={handleSubmit}>
        <Input
          ref={textRef}
          placeholder="Izoh"
          className="form-group col-md-5"
        />
        <ChooseFile ref={fileRef} className="form-group col-md-5" />
        <div className="col-md-2">
          <button className="btn btn-primary w-100" type="submit">
            Yulash
          </button>
        </div>
      </form>

      {data?.length ? (
        <table
          width={"100%"}
          border="1"
          style={{ borderColor: "lightgray", textAlign: "center" }}
        >
          <thead>
            <tr>
              <th className="py-2">Tarif</th>
              <th className="py-2">Holati</th>
              <th className="py-2">Ball</th>
              <th className="py-2">Tahrirlash</th>
            </tr>
          </thead>
          <tbody>
            {data
              .sort((a, b) => a.id - b.id)
              .map((item) => (
                <tr key={item.id}>
                  <td>
                    {item.id === isEdit ? (
                      <Input defaultValue={item.comment} ref={commentRef} />
                    ) : (
                      item.comment
                    )}
                  </td>
                  {item.id === isEdit ? (
                    <td colSpan={2}>
                      <ChooseFile ref={editFileRef} />
                    </td>
                  ) : null}
                  {item.id !== isEdit ? (
                    <td>
                      {item.score ? (
                        <p className="text-success">Tasdiqlangan</p>
                      ) : item.rejection ? (
                        <div class="d-flex justify-content-center align-items-center">
                          <p class="text-danger my-0 mx-3">Rad etildi</p>
                          <a
                            className="btn btn-outline-primary py-1 px-2"
                            data-toggle="modal"
                            data-target={`#exampleModal${item.id}`}
                            // style={{
                            //   textDecoration: "underline",
                            //   fontStyle: "italic",
                            // }}
                          >
                            Izoh...
                          </a>
                        </div>
                      ) : (
                        <p className="text-primary">Jarayonda</p>
                      )}
                      <div
                        className="modal fade"
                        id={`exampleModal${item.id}`}
                        tabIndex="-1"
                        role="dialog"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog" role="document">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5
                                className="modal-title"
                                id="exampleModalLabel"
                              >
                                Rad edilgan
                              </h5>
                              <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                              >
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div className="modal-body">
                              {item.reason_for_rejection || "Rad etilgan"}
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                              >
                                Yopish
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                  ) : null}
                  {item.id !== isEdit ? (
                    <td>{item.score ? `${item.score} ball` : ""} </td>
                  ) : null}
                  <td>
                    {isEdit === item.id && (
                      <button
                        onClick={() => onSave(item.id)}
                        className="btn btn-success m-1"
                      >
                        <i className="fa-solid fa-check"></i>
                      </button>
                    )}
                    {isEdit === item.id && (
                      <button
                        onClick={() => setIsEdit(null)}
                        className="btn btn-danger m-1"
                      >
                        <i className="fa-solid fa-x"></i>
                      </button>
                    )}
                    {item.id !== isEdit && (
                      <NavLink
                        target="_blank"
                        to={`${import.meta.env.VITE_BASE_URL_IMG}${
                          item?.file_?.url
                        }`}
                        className={"btn btn-secondary my-1"}
                      >
                        <i className="fa-solid fa-file"></i>
                      </NavLink>
                    )}
                    {item.id !== isEdit && !item.score && (
                      <button
                        onClick={() => setIsEdit(item.id)}
                        className="btn btn-primary m-1"
                      >
                        <i className="fa-solid fa-edit"></i>
                      </button>
                    )}
                    {item.id !== isEdit && !item.score && (
                      <button
                        onClick={() => onDel(item.id)}
                        className="btn btn-danger"
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      ) : (
        <table className="display responsive table w-100">
          <tbody>
            <tr>
              <td colSpan={10} className="text-center">
                {loading ? (
                  <div>
                    <img
                      loading="lazy"
                      style={{ width: "50px" }}
                      src={loadingGif}
                      alt=""
                    />
                  </div>
                ) : error ? (
                  "Error"
                ) : (
                  "No data"
                )}
              </td>
            </tr>
          </tbody>
        </table>
      )}

      {/* {data.length ? (
        <div className="card p-3">
          {data
            .sort((a, b) => b.id - a.id)
            .map((item) => (
              <div className="row my-1" key={item.id}>
                {isEdit === item.id ? (
                  <>
                    <Input
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      className="form-group col-md-5"
                    />
                    <ChooseFile
                      ref={editFileRef}
                      className="form-group col-md-5"
                    />
                  </>
                ) : (
                  <div className={item.rejection ? "col-md-6" : "col-md-8"}>
                    {item.comment}
                  </div>
                )}
                {item.rejection && isEdit !== item.id ? (
                  <div className="col-md-3">
                    <button
                      className="btn w-100 btn-warning"
                      data-toggle="modal"
                      data-target={`#exampleModal${item.id}`}
                    >
                      {item.reason_for_rejection?.split(" ")?.length > 3
                        ? `${item?.reason_for_rejection
                            ?.split(" ")
                            ?.slice(0, 2)
                            ?.join(" ")}...`
                        : item.reason_for_rejection || "Rad etilgan"}
                    </button>
                    <div
                      className="modal fade"
                      id={`exampleModal${item.id}`}
                      tabIndex="-1"
                      role="dialog"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                              Rad edilgan
                            </h5>
                            <button
                              type="button"
                              className="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div className="modal-body">
                            {item.reason_for_rejection || "Rad etilgan"}
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-dismiss="modal"
                            >
                              Yopish
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
                {!item.rejection && item.id !== isEdit ? (
                  <div className="col-md-1">
                    <p>{item.score || 0} ball</p>
                  </div>
                ) : null}
                {isEdit === item.id ? (
                  <div className="col-md-1">
                    <button
                      onClick={() => onSave(item.id)}
                      className={"btn btn-success w-100"}
                    >
                      <i className="fa-solid fa-check"></i>
                    </button>
                  </div>
                ) : (
                  <div className={item.score ? "col-md-3" : "col-md-1"}>
                    <NavLink
                      target="_blank"
                      to={`${import.meta.env.VITE_BASE_URL_IMG}${
                        item?.file_?.url
                      }`}
                      className={"btn btn-secondary w-100"}
                    >
                      <i className="fa-solid fa-eye"></i>
                    </NavLink>
                  </div>
                )}
                {isEdit === item.id ? (
                  <div className="col-md-1">
                    <button
                      onClick={() => setIsEdit(false)}
                      className={"btn btn-danger w-100"}
                    >
                      <i className="fa-solid fa-x"></i>
                    </button>
                  </div>
                ) : item.score ? null : (
                  <div className="col-md-1">
                    <button
                      onClick={() => {
                        setIsEdit(item.id);
                        setComment(item.comment);
                      }}
                      className={"btn btn-primary w-100"}
                    >
                      <i className="fa-solid fa-edit"></i>
                    </button>
                  </div>
                )}
                {isEdit !== item.id && !item.score ? (
                  <div className="col-md-1">
                    <button
                      onClick={() => onDel(item.id)}
                      className={"btn btn-danger w-100"}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                ) : null}
              </div>
            ))}
        </div>
      ) : null} */}
    </div>
  );
};

export default Upload;
