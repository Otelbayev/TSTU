import React, { useEffect, useRef, useState } from "react";
import {
  TextArea,
  Editor,
  FileImg,
  Select,
  ChooseFile,
  Input,
  Image,
} from "../../../components/Generics";
import useAxios from "../../../../hooks/useAxios";
import Cookies from "js-cookie";
import { useParams } from "react-router-dom";
import LanguageSelect from "../../../components/Generics/LanguageSelect";
import { useLanguageContext } from "../../../../context/LanguageContext";
import { useDepartmentContext } from "../../../context/DepartmentContext";
import { useEdit } from "./../../../hooks/useEdit";
import { useStatusContext } from "./../../../context/Status/index";
import Wrapper from "../../../components/Wrapper";

const DepartmentEdit = () => {
  const { id } = useParams();
  const { sendRequest } = useAxios();
  const [value, setValue] = useState("uz");

  const { options } = useLanguageContext();
  const language_id = options.find((e) => e.code === value)?.id;
  const {
    departmentOptions,
    departmentType,
    getSelectDepartment,
    getDepartmentType,
  } = useDepartmentContext();
  const { statusData, getStatus } = useStatusContext();

  const imgRef = useRef(null);
  const img2Ref = useRef(null);
  const editorRef = useRef(null);

  const [title, setTitle] = useState("");
  const [short, setShort] = useState("");
  const [desc, setDesc] = useState("");
  const [parent, setParent] = useState(null);
  const [type, setType] = useState(false);
  const [favo, setFavo] = useState(1);
  const [position, setPosition] = useState("");
  const [img, setImg] = useState(null);
  const [status, setStatus] = useState(null);
  const [icon, setIcon] = useState(null);

  const [isCreate, setIsCreate] = useState(false);
  const [transId, setTransId] = useState(null);

  const onHandleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title_short", short);
    formData.append("title", title);
    formData.append("description", desc);
    formData.append("text", $(editorRef.current)?.summernote("code"));
    formData.append("parent_id", parent);
    formData.append("status_id", status);
    formData.append("position", position);
    formData.append("favorite", favo);
    formData.append("departament_type_id", type);
    formData.append("img_up", imgRef.current?.files[0] || null);
    formData.append("img_icon_up", img2Ref.current?.files[0] || null);

    const res = await useEdit(
      isCreate,
      value,
      "formData",
      id,
      transId,
      formData,
      "/api/departament/updatedepartament",
      "/api/departament/updatedepartamenttranslation",
      [
        { language_id },
        { status_translation_id: status },
        { departament_id: id },
        { departament_type_translation_id: type },
      ],
      ["departament_type_id", "status_id"],
      "/api/departament/createdepartamenttranslation",
      [
        { language_id },
        { departament_type_translation_id: type },
        { departament_id: id },
      ],
      ["departament_type_id"]
    );

    res?.status === 200 && setIsCreate(false);
  };

  const getData = async (value) => {
    const res = await sendRequest({
      methos: "get",
      url:
        value === "uz"
          ? `/api/departament/getbyiddepartament/${id}`
          : `/api/departament/getbyuziddepartamenttranslation/${id}?language_code=${value}`,
      headers: {
        Authorization: `Bearer ${Cookies.get("_token")}`,
      },
    });
    if (res.status === 200) {
      setTransId(res.data?.id);
      setIsCreate(false);
      setTitle(res.data?.title || "");
      setShort(res.data?.title_short || "");
      setDesc(res.data?.description || "");
      setParent(res.data?.parent_id || 0);
      setType(
        res.data?.departament_type_?.id ||
          res?.data?.departament_type_translation_?.id
      );
      setPosition(res.data?.position);
      setFavo(res.data?.favorite);
      setImg(res.data?.img_?.url || res.data?.img_translation_?.url);
      $(editorRef.current)?.summernote("code", `${res?.data?.text || ""}`);
      setStatus(res.data?.status_?.id || res?.data?.status_translation_?.id);
      setIcon(res.data?.img_icon_?.url || res.data?.img_icon_translation_?.url);
    } else {
      setTransId(null);
      setIsCreate(true);
      setTitle("");
      setShort("");
      setDesc("");
      setPosition("");
      setParent(departmentOptions[0].value);
      setType(departmentType[0].value);
      setFavo(false);
      setImg(null);
      $(editorRef.current)?.summernote("code", "");
      setStatus(statusData[0].value);
      setIcon(null);
    }
  };

  useEffect(() => {
    getData(value);
    getStatus(value);
    getSelectDepartment(value);
    getDepartmentType(value);
  }, [value, isCreate]);

  return (
    <Wrapper title="Edit Department">
      <form className="form-horizontal row" onSubmit={onHandleSubmit}>
        <div className="col-md-12">
          <LanguageSelect onChange={(e) => setValue(e)} />
        </div>
        <TextArea
          className="form-group col-md-3"
          label={`Title (${value})`}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextArea
          className="form-group col-md-3"
          label={`Short Title (${value})`}
          value={short}
          onChange={(e) => setShort(e.target.value)}
        />
        <TextArea
          className="form-group col-md-6"
          label={`Description (${value})`}
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <Editor className="form-group col-md-6" lan={value} ref={editorRef} />
        <FileImg
          className="form-group col-md-6"
          lan={value}
          editorRef={editorRef}
        />
        <Select
          label="Parent Type"
          className={`form-group ${isCreate ? "col-md-4" : "col-md-3"}`}
          onChange={(value) => setParent(value)}
          value={parent}
          showSearch={true}
          options={departmentOptions}
        />
        <Select
          label="Department Type"
          className={`form-group ${isCreate ? "col-md-4" : "col-md-3"}`}
          onChange={(e) => setType(e)}
          value={type}
          showSearch
          options={departmentType}
        />
        <Select
          className={`form-group ${isCreate ? "col-md-4" : "col-md-3"}`}
          label="Favorite"
          options={[
            { value: true, label: "true" },
            { value: false, label: "false" },
          ]}
          onChange={(e) => setFavo(e)}
          value={favo}
        />
        {!isCreate && (
          <Select
            label="Status"
            className="form-group col-md-3"
            options={statusData}
            value={status}
            onChange={(e) => setStatus(Number(e))}
          />
        )}
        <Input
          className={!isCreate ? "form-group col-md-2" : "form-group col-md-4"}
          label="Position"
          type="number"
          value={position || ""}
          onChange={(e) => setPosition(e.target.value)}
        />
        <ChooseFile
          className={!isCreate ? "form-group col-md-3" : "form-group col-md-4"}
          label="Image"
          ref={imgRef}
        />
        {!isCreate && (
          <Image
            className={"form-group col-md-2"}
            img={`/public/api/${img}`}
            label={"Image"}
            alt="none"
          />
        )}
        <ChooseFile
          className={!isCreate ? "form-group col-md-3" : "form-group col-md-4"}
          label="Icon"
          ref={img2Ref}
        />
        {!isCreate && (
          <Image
            className={"form-group col-md-2"}
            img={`/public/api/${icon}`}
            label={"Icon"}
            alt="none"
          />
        )}

        <div className="form-group col-md-12">
          <div className="col-sm-12">
            {isCreate ? (
              <button type="submit" className="btn btn-success">
                Create
              </button>
            ) : (
              <button type="submit" className="btn btn-primary">
                Update
              </button>
            )}
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default DepartmentEdit;
