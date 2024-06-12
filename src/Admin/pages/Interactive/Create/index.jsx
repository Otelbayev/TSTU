import React, { useRef, useState } from "react";
import Wrapper from "../../../components/Wrapper";
import LanguageSelect from "./../../../components/Generics/LanguageSelect";
import { ChooseFile, Input } from "../../../components/Generics";
import { useCreate } from "./../../../hooks/useCreate";
import { useLanguageContext } from "../../../../context/LanguageContext";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const [value, setValue] = useState("uz");

  const { options, language } = useLanguageContext();

  const navigate = useNavigate();

  const language_id = options.find((e) => e.code === value)?.id;

  const titleRef = useRef();
  const descRef = useRef();
  const urlRef = useRef();
  const imgRef = useRef();
  const iconRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", titleRef.current?.value);
    formData.append("description", descRef.current?.value);
    formData.append("url_", urlRef.current?.value);
    formData.append("img_up", imgRef.current?.files[0]);
    formData.append("icon_up", iconRef.current?.files[0]);

    const res = await useCreate(
      value,
      "formData",
      formData,
      "/api/interactiveservices/createinteractiveservices",
      "/api/interactiveservices/createinteractiveservicestranslation",
      "interactive_services_id",
      [{ language_id }]
    );

    res.statusCode === 200 && navigate(`/${language}/admin/interactive`);
  };

  return (
    <Wrapper title="Create Interactive Services">
      <form onSubmit={handleSubmit}>
        <LanguageSelect onChange={(e) => setValue(e)} />
        <div className="row">
          <Input ref={titleRef} label="Title" className="col-md-6" />
          <Input ref={descRef} label="Description" className="col-md-6" />
          <Input ref={urlRef} label="Url" className="col-md-4" />
          <ChooseFile ref={imgRef} label="Image" className="col-md-4" />
          <ChooseFile ref={iconRef} label="Icon" className="col-md-4" />
          <div className="col-md-12 mt-4 ml-2">
            <button className="btn btn-success">Create</button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default Create;
