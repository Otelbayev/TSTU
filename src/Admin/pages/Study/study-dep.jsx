import { useEffect, useRef, useState } from "react";
import Wrapper from "../../components/Wrapper";
import useAxios from "../../../hooks/useAxios";
import Cookies from "js-cookie";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDateContext } from "../../context/DateContext";
import styled from "styled-components";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import "datatables.net-bs5";
import "datatables.net";
import $ from "jquery";
import { Input } from "../../components/Generics";
import { message } from "antd";
import axios from "axios";
import loadingGif from "../../../assets/icons/loading.gif";

const Div = styled.div`
  td:last-child {
    width: 100px;
  }
  td:first-child {
    width: 5%;
    text-align: center !important;
  }
  th {
    text-align: center !important;
  }
`;

const StudyDep = () => {
  const { sendRequest, loading, error } = useAxios();
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const { old_year } = useDateContext();
  const [modalId, setModalId] = useState(null);

  const [data, setDate] = useState([]);

  const commentRef = useRef();
  const ballRef = useRef();

  const getData = async () => {
    const res = await sendRequest({
      method: "get",
      url: `${
        import.meta.env.VITE_BASE_URL_API
      }/documentteacher110setcontroller/getdocumentteacher110setstudydepartament`,
      headers: {
        Authorization: `Bearer ${Cookies.get("_token")}`,
      },
      params: {
        oldYear: old_year,
        newYear: Number(old_year) + 1,
        person_id: id,
      },
    });

    res.status === 200 && setDate(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (data?.documents_teacher_?.length) {
      const queryParams = new URLSearchParams(location.search);
      const page = parseInt(queryParams.get("page")) || 1;

      const table = $("#example")?.DataTable({
        data: data?.documents_teacher_,
        columns: [
          { data: "id", title: "#" },
          { data: "comment", title: "title" },
          { data: "document_.title", title: "Document" },
          {
            data: null,
            title: "Actions",
            orderable: false,
            render: function (data) {
              return `<div style="display: flex; gap:5px"> 
              <button class="btn btn-outline-primary show" data-id="${data?.id}">
                            <i class="fa fa-eye"></i>
                    </button>      
              <button class="btn btn-outline-success confirm" data-toggle="modal" data-target=".modal1" data-id="${data?.id}">
                            <i class="fa fa-check"></i>
                    </button>
                    <button class="btn btn-outline-danger reject" data-toggle="modal" data-target=".modal2" data-id="${data?.id}">
                            <i class="fa fa-times"></i>
                    </button>
                </div> `;
            },
          },
        ],
        destroy: true,
        responsive: true,
        ordering: false,
        pageLength: 10,
        displayStart: (page - 1) * 10,
      });

      table.on("page.dt", function () {
        let pageInfo = table.page.info();
        navigate(`?page=${pageInfo.page + 1}`);
      });

      $("#example tbody").on("click", ".confirm", function () {
        const id = $(this).data("id");
        setModalId(id);
      });
      $("#example tbody").on("click", ".reject", function () {
        const id = $(this).data("id");
        setModalId(id);
      });
      $("#example tbody").on("click", ".show", function () {
        const id = $(this).data("id");
        show(id);
      });

      return () => {
        table.destroy();
        $("#example tbody").off("click", ".edit-btn");
        $("#example tbody").off("click", ".delete-btn");
      };
    }
  }, [data, location.search]);

  const show = (id) => {
    const res = data?.documents_teacher_?.find((e) => e.id === id);
    window.open(
      `${import.meta.env.VITE_BASE_URL_IMG}${res?.file_?.url}`,
      "_blank"
    );
  };

  const confirm = async () => {
    try {
      message.loading({ key: "confirm", content: "Yuklamoqda.." });
      const res = await axios.put(
        `${
          import.meta.env.VITE_BASE_URL_API
        }/documentteacher110setcontroller/confirmstudydepartamentdocument110/${modalId}`,
        {
          confirm: true,
          score: Number(ballRef.current.value),
          reason_for_rejection: "",
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("_token")}`,
          },
        }
      );
      if (res.status === 200) {
        message.success({ key: "confirm", content: "Tasdiqlandi!" });
        getData();
      }
    } catch (err) {
      message.error({ key: "confirm", content: "Xatokil!" });
    }
  };

  const reject = async () => {
    if (!commentRef.current.value) {
      message.error({ key: "reject", content: "Izoh kiriting!" });
      return;
    }
    try {
      message.loading({ key: "reject", content: "Yukamoqda!" });
      const res = await axios.put(
        `${
          import.meta.env.VITE_BASE_URL_API
        }/documentteacher110setcontroller/confirmstudydepartamentdocument110/${modalId}`,
        {
          confirm: false,
          score: null,
          reason_for_rejection: commentRef?.current?.value,
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("_token")}`,
          },
        }
      );

      if (res.status === 200) {
        message.success({ key: "reject", content: "Yuborildi!" });
        commentRef.current.value = "";
        getData();
      }
    } catch (err) {
      message.error({ key: "reject", content: "Xatolik!" });
    }
  };

  const title = data?.documents_teacher_?.find((e) => e.id === modalId);

  console.log(title);

  return (
    <Wrapper
      title={`${data.person_?.lastName} ${data.person_?.firstName} ${data.person_?.fathers_name}`}
    >
      <div
        className="modal fade bd-example-modal-sm modal1"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="mySmallModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-sm">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="mySmallModalLabel">
                Tasdiqlaysizmi?
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
              <div className="text-center row">
                <Input
                  className="col-md-12 form-group"
                  ref={ballRef}
                  placeholder="Ball"
                  type="number"
                />
                <div className="col-md-6">
                  <button
                    type="button"
                    className="btn btn-outline-success w-100"
                    data-dismiss="modal"
                    onClick={confirm}
                  >
                    Ha
                  </button>
                </div>
                <div className="col-md-6">
                  <button
                    type="button"
                    className="btn btn-outline-danger w-100"
                    data-dismiss="modal"
                  >
                    Yo'q
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade bd-example-modal-sm  modal2"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="mySmallModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-sm">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="mySmallModalLabel">
                Rad etasizmi?
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
              <div className="text-center row">
                <Input
                  className="col-md-12 form-group"
                  ref={commentRef}
                  placeholder="Izoh"
                />
                <div className="col-md-6">
                  <button
                    type="button"
                    className="btn btn-outline-success w-100"
                    data-dismiss="modal"
                    onClick={reject}
                  >
                    Ha
                  </button>
                </div>
                <div className="col-md-6">
                  <button
                    type="button"
                    className="btn btn-outline-danger w-100"
                    data-dismiss="modal"
                  >
                    Yo'q
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {data.documents_teacher_?.length ? (
        <Div>
          <table
            id="example"
            className="display responsive table table-bordered w-100"
          ></table>
        </Div>
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
    </Wrapper>
  );
};

export default StudyDep;
