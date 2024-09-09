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

  const [data, setDate] = useState([]);

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
        data: data.documents_teacher_.sort((a, b) => a.id - b.id),
        columns: [
          { data: "id", title: "#" },
          { data: "comment", title: "Tarif" },
          { data: "document_.title", title: "Hujjat" },
          {
            title: "Holati",
            render: function (data, type, row) {
              if (row.rejection) {
                return `<p class="text-danger">Rad etilgan</p>`;
              }
              if (row.sequence_status === 4) {
                return `<p class="text-success">Tastiqlangan</p>`;
              } else {
                return `<p class="text-primary">Jarayonda</p>`;
              }
            },
          },
          {
            title: "Ball",
            render: function (data, type, row) {
              if (!row?.score) {
                return "";
              }
              return `<div class="text-center"><h4>${row?.score}</h4> (${row?.assessor_?.person_?.firstName} ${row?.assessor_?.person_?.lastName} ${row?.assessor_?.person_?.fathers_name})</div>`;
            },
          },
          {
            data: null,
            title: "Tahrirlash",
            orderable: false,
            render: function (data) {
              return `<div style="display: flex; gap:5px"> 
              <button class="btn btn-outline-primary show" data-id="${data?.id}">
                            <i class="fa fa-eye"></i>
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

  return (
    <Wrapper
      title={`${data.person_?.lastName} ${data.person_?.firstName} ${data.person_?.fathers_name}`}
      back={true}
    >
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
