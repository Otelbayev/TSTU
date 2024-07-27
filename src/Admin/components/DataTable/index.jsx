import { useEffect, useRef, useState } from "react";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import "datatables.net-bs5";
import "datatables.net";
import $ from "jquery";
import { styled } from "styled-components";
import Cookies from "js-cookie";
import useAxios from "../../../hooks/useAxios";
import { useNavigate, useLocation } from "react-router-dom";
import loadingGif from "../../../assets/icons/loading.gif";
import { useTranslation } from "react-i18next";

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

const DataTable = ({
  data,
  del,
  setIsDelete,
  col,
  edit,
  loading,
  error,
  appeal,
}) => {
  const { sendRequest } = useAxios();
  const navigate = useNavigate();
  const location = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (data?.length) {
      const queryParams = new URLSearchParams(location.search);
      const page = parseInt(queryParams.get("page")) || 1;

      const table = $("#example").DataTable({
        data: data,
        columns: [
          ...col,
          {
            data: null,
            title: "Actions",
            orderable: false,
            render: function (data) {
              return appeal
                ? `<button class="btn btn-outline-primary edit-btn" data-id="${data?.id}">
                    <i class="fa fa-eye"></i>
                  </button>`
                : `
                <div style="display: flex; gap:5px">
                  <button class="btn btn-outline-primary edit-btn" data-id="${
                    data?.id
                  }">
                    <i class="fa fa-edit"></i>
                  </button>
                  ${
                    data?.status_?.id === 1 || data?.is_deleted === false
                      ? `<button class="btn btn-outline-danger delete-btn" data-id="${data?.id}">
                    <i class="fa fa-trash"></i>
                  </button> `
                      : ""
                  }
                </div>
              `;
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

      $("#example tbody").on("click", ".edit-btn", function () {
        const id = $(this).data("id");
        handleEdit(id);
      });
      $("#example tbody").on("click", ".delete-btn", function () {
        const id = $(this).data("id");
        handleDelete(id);
      });

      return () => {
        table.destroy();
        $("#example tbody").off("click", ".edit-btn");
        $("#example tbody").off("click", ".delete-btn");
      };
    }
  }, [data, location.search]);
  const handleEdit = (id) => {
    navigate(`/${i18n.language}/admin/${edit}/${id}`);
  };

  const handleDelete = async (id) => {
    const check = confirm("Are you sure?");
    if (check) {
      const res = await sendRequest({
        method: "delete",
        url: `${del}/${id}`,
        headers: { Authorization: `Bearer ${Cookies.get("_token")}` },
      });
      res.status === 200 && setIsDelete({ name: "none" });
    }
  };

  return data?.length ? (
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
  );
};

export default DataTable;
