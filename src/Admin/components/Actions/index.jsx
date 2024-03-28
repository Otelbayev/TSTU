import { Popconfirm } from "antd";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useAxios from "../../../hooks/useAxios";
import Cookies from "js-cookie";

const Actions = ({ id, url, setIsDelete }) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const { sendRequest } = useAxios();

  const showPopconfirm = () => {
    setOpen(true);
  };

  const onDelete = async () => {
    setConfirmLoading(true);
    try {
      await sendRequest({
        method: "delete",
        url,
        headers: { Authorization: `Bearer ${Cookies.get("_token")}` },
      });
      setIsDelete([]);
      setConfirmLoading(false);
      setOpen(false);
    } catch (err) {
      setOpen(false);
      setConfirmLoading(false);
    }
  };

  const onCancel = () => {
    setOpen(false);
  };

  return (
    <div style={{ display: "flex", gap: "5px" }}>
      <NavLink className="btn btn-outline-primary" to={`edit/${id}`}>
        <i className="fa fa-edit" />
      </NavLink>
      <Popconfirm
        title="Confirm"
        description="Confirm delete"
        open={open}
        onConfirm={onDelete}
        okButtonProps={{
          loading: confirmLoading,
        }}
        onCancel={onCancel}
      >
        <button onClick={showPopconfirm} className="btn btn-outline-danger">
          <i className="fa fa-trash" />
        </button>
      </Popconfirm>
    </div>
  );
};

export default Actions;
