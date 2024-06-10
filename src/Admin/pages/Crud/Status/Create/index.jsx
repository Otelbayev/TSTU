import React, { useState } from "react";
import LanguageSelect from "../../../../components/Generics/LanguageSelect";
import { useLanguageContext } from "../../../../../context/LanguageContext";
import { useNavigate } from "react-router-dom";
import { useCreate } from "./../../../../hooks/useCreate";
import Wrapper from "../../../../components/Wrapper";

const Create = () => {
  const [value, setValue] = useState("uz");
  const { options, language } = useLanguageContext();
  const language_id = options.find((e) => e.code === value)?.id;
  const [titleValue, setTitleValue] = useState("");
  const [inputStyle, setInputStyle] = useState({});
  const [nameStyle, setNameStyle] = useState(null);
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const onHandleSubmit = async (e) => {
    e.preventDefault();

    if (!titleValue) {
      setInputStyle({ border: "1px solid red" });
      return;
    }

    if (!name) {
      setInputStyle({ border: "1px solid red" });
      return;
    }

    const res = await useCreate(
      value,
      "obj",
      {
        name,
        status: titleValue,
      },
      "/api/status/createstatus",
      "/api/status/createstatustranslation",
      "status_id",
      [{ language_id }]
    );

    res.statusCode === 200 && navigate(`/${language}/admin/status`);
  };

  return (
    <Wrapper title="Create Status">
      <form onSubmit={onHandleSubmit} className="col-md-12">
        <div className="row">
          <LanguageSelect onChange={(e) => setValue(e)} />
        </div>
        <div className="row">
          <div className="col-md-5">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              style={nameStyle}
              value={name}
              onFocus={() => setNameStyle(null)}
            />
          </div>
          <div className="col-md-5">
            <input
              type="text"
              className="form-control"
              placeholder="Active or Deleted"
              onChange={(e) => setTitleValue(e.target.value)}
              style={inputStyle}
              value={titleValue}
              onFocus={() => setInputStyle(null)}
            />
          </div>
          <div className="col-md-2">
            <button type="submit" className="btn w-100 btn-primary">
              Create
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default Create;
