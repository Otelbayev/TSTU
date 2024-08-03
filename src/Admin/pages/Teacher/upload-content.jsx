import { Container } from "./style";
import { ChooseFile, Input } from "../../components/Generics";
import { message } from "antd";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { NavLink } from "react-router-dom";

const Upload = ({ id }) => {
  const fileRef = useRef();
  const commentRef = useRef();
  const editFileRef = useRef();

  const [data, setData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [comment, setComment] = useState("");

  const getData = async () => {
    const res = await axios.get(
      `${
        import.meta.env.VITE_BASE_URL_API
      }/documentteacher110setcontroller/getalldocumentteacher110set?oldYear=2023&newYear=2024`,
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("_token")}`,
        },
      }
    );

    res.status === 200 && setData(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fileRef?.current?.files[0] || !commentRef) {
      message.error("All files are required");
      return;
    }

    try {
      message.loading({ key: "form", content: "Loading.." });
      const formData = new FormData();
      formData.append("old_year", 2023);
      formData.append("new_year", 2024);
      formData.append("document_id", id);
      formData.append("comment", commentRef?.current?.value);
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
        }
      );

      if (res.status === 200) {
        message.success({ key: "form", content: "Succesfully uploaded!" });
        commentRef.current.value = "";
        fileRef.current.value = "";
        getData();
      }
    } catch (err) {
      message.error({ key: "form", content: "Error to Create!" });
    }
  };

  const onSave = async (id) => {
    setIsEdit(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const filterData = data.filter((e) => e.document_?.id === id);

  return (
    <div>
      <Container className="row" onSubmit={handleSubmit}>
        <Input
          ref={commentRef}
          placeholder="Comment"
          className="form-group col-md-5"
        />
        <ChooseFile ref={fileRef} className="form-group col-md-5" />
        <div className="col-md-2">
          <button className="btn btn-primary w-100" type="submit">
            Upload
          </button>
        </div>
      </Container>
      {filterData.length ? (
        <div className="card p-3">
          {filterData.map((item) => (
            <div className="row my-1" key={item.id}>
              {isEdit === item.id ? (
                <>
                  <Input
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="form-group col-md-5"
                  />
                  <ChooseFile className="form-group col-md-5" />
                </>
              ) : (
                <div className="col-md-10">{item.comment}</div>
              )}
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
                <div className="col-md-1">
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
              ) : (
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
              {/* <div className="col-md-1">
                <button
                  onClick={() => onDel(item.id)}
                  className={"btn btn-danger w-100"}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div> */}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Upload;
