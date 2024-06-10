import React, { useEffect, useRef, useState } from "react";
import {
  ChooseFile,
  Editor,
  Image,
  Input,
  Select,
  TextArea,
} from "../../../components/Generics";
import LanguageSelect from "../../../components/Generics/LanguageSelect";
import { useLanguageContext } from "../../../../context/LanguageContext";
import { useDepartmentContext } from "../../../context/DepartmentContext";
import { useGenderContext } from "../../../context/GenderContext";
import { useParams } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { useEdit } from "./../../../hooks/useEdit";
import { useStatusContext } from "./../../../context/Status/index";
import Wrapper from "../../../components/Wrapper";

const Edit = () => {
  const [value, setValue] = useState("uz");
  const params = useParams();
  const [isCreatePerson, setIsCreatePerson] = useState(false);

  const { options } = useLanguageContext();
  const id = options.find((e) => e.code === value)?.id;

  const { departmentOptions, getSelectDepartment } = useDepartmentContext();
  const { genderData, getGender } = useGenderContext();
  const { statusData, getStatus } = useStatusContext();

  const nameRef = useRef(null);
  const surnameRef = useRef(null);
  const patronymicRef = useRef(null);
  const pasportSerialRef = useRef(null);
  const passortNumberRef = useRef(null);
  const jshirRef = useRef(null);
  const emailRef = useRef(null);
  const imgRef = useRef(null);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [patronymic, setPatronymic] = useState("");
  const [pasportSerial, setPasportSerial] = useState("");
  const [passortNumber, setPassortNumber] = useState("");
  const [jshir, setJshir] = useState("");
  const [email, setEmail] = useState("");
  const [img, setImg] = useState(null);
  const [departent, setDepartent] = useState(null);
  const [gender, setGender] = useState(null);
  const [transId, setTransId] = useState(null);
  const [personStatus, setPersonStatus] = useState(null);

  useEffect(() => {
    setGender(genderData[0]?.value);
  }, [genderData]);

  const getPerson = async (value) => {
    const res = await axios.get(
      value === "uz"
        ? `/api/person/getbyidperson/${params.id}`
        : `/api/person/getbyuzidpersontranslation/${params.id}?language_code=${value}`,
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("_token")}`,
        },
      }
    );
    if (res.status === 200) {
      setTransId(res.data?.id);
      setIsCreatePerson(false);
      setName(res.data?.firstName);
      setSurname(res.data?.lastName);
      setPatronymic(res.data?.fathers_name);
      setJshir(res.data?.pinfl);
      setPasportSerial(res.data?.passport_text);
      setPassortNumber(res.data?.passport_number);
      setEmail(res.data?.email);
      setImg(res.data?.img_?.url);

      setDepartent(
        res.data?.departament_?.id || res.data?.departament_translation_?.id
      );
      setGender(res.data?.gender_?.id);

      setPersonStatus(
        res.data?.status_?.id || res.data?.status_translation_.id
      );
    } else {
      setTransId(null);
      setIsCreatePerson(true);
      setName("");
      setSurname("");
      setPatronymic("");
      setJshir("");
      setPasportSerial("");
      setPassortNumber("");
      setEmail("");
      setImg(null);
      setDepartent(departmentOptions[0]?.value);
      setGender(genderData[0]?.value);
      setPersonStatus(statusData[0]?.value);
    }
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("firstName", nameRef.current.value);
    formData.append("lastName", surnameRef.current.value);
    formData.append("fathers_name", patronymicRef.current.value);
    formData.append("email", emailRef.current.value);
    formData.append("gender_id", gender);
    formData.append("pinfl", jshirRef.current.value);
    formData.append("passport_text", pasportSerialRef.current.value);
    formData.append("passport_number", passortNumberRef.current.value);
    formData.append("departament_id", departent);
    formData.append("img_up", imgRef.current.files[0]);
    formData.append("status_id", personStatus);

    const res = await useEdit(
      isCreatePerson,
      value,
      "formData",
      params.id,
      transId,
      formData,
      "/api/person/updateperson",
      "/api/person/updatepersontranslation",
      [
        { language_id: id },
        { departament_translation_id: departent },
        { status_translation_id: personStatus },
        { persons_id: params.id },
      ],
      [
        "img_up",
        "email",
        "pinfl",
        "departament_id",
        "passport_text",
        "passport_number",
        "status_id",
      ],
      "/api/person/createpersontranslation",
      [
        { persons_id: params.id },
        { language_id: id },
        { departament_translation_id: departent },
      ],
      [
        "img_up",
        "email",
        "pinfl",
        "departament_id",
        "passport_text",
        "passport_number",
        "status_id",
      ],
      415
    );

    res?.status === 200 && setIsCreatePerson(false);
  };

  useEffect(() => {
    getSelectDepartment(value);
    getGender(value);
    getPerson(value);
    getStatus(value);
  }, [value, isCreatePerson]);

  return (
    <Wrapper title="Edit Person">
      <form onSubmit={onHandleSubmit} className="form-horizontal row">
        <div className="col-md-12">
          <LanguageSelect onChange={(e) => setValue(e)} />
        </div>
        <div className="col-md-12">
          <h3>Person</h3>
        </div>
        <Input
          className="form-group col-md-3"
          label={`Ism (${value})`}
          placeholder="Ism"
          ref={nameRef}
          value={name || ""}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          className="form-group col-md-3"
          label={`Familiya (${value})`}
          placeholder="Familiya"
          ref={surnameRef}
          value={surname || ""}
          onChange={(e) => setSurname(e.target.value)}
        />
        <Input
          className="form-group col-md-3"
          label={`Otasining ismi (${value})`}
          placeholder="Otasining ismi"
          ref={patronymicRef}
          value={patronymic || ""}
          onChange={(e) => setPatronymic(e.target.value)}
        />
        <Select
          label="Xodim turi"
          className={"form-group col-md-3"}
          options={[]}
        />
        <Select
          label="Bo'lim"
          className={"form-group col-md-3"}
          options={departmentOptions}
          onChange={(e) => setDepartent(e)}
          value={departent}
        />
        <Select
          label="Jinsi"
          className={"form-group col-md-3"}
          options={genderData}
          value={gender}
          onChange={(e) => setGender(e)}
        />
        <Input
          className="form-group col-md-3"
          label={`Email (${value})`}
          placeholder="qwerty@gmail.com"
          ref={emailRef}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          className="form-group col-md-3"
          label={`JSHSHIR - ПИНФЛ (${value})`}
          placeholder="123456789"
          maxLength={14}
          minLength={14}
          ref={jshirRef}
          value={jshir}
          onChange={(e) => setJshir(e.target.value)}
        />
        <Input
          className="form-group col-md-2"
          label={`Passport - № (${value})`}
          placeholder="AB"
          maxLength={2}
          minLength={2}
          ref={pasportSerialRef}
          value={pasportSerial}
          onChange={(e) => setPasportSerial(e.target.value)}
        />
        <Input
          className="form-group col-md-3"
          label={`Passport - № (${value})`}
          placeholder="1234567"
          minLength={7}
          maxLength={7}
          ref={passortNumberRef}
          value={passortNumber}
          onChange={(e) => setPassortNumber(e.target.value)}
        />
        {!isCreatePerson && (
          <Select
            label={"Status"}
            className={"form-group col-md-2"}
            options={statusData}
            value={personStatus}
            onChange={(e) => setPersonStatus(e)}
          />
        )}
        <ChooseFile
          className="form-group col-md-3"
          label="Rasm"
          type="image"
          ref={imgRef}
        />
        <Image
          className="form-group col-md-2"
          label="Rasm"
          img={img}
          alt="Image"
        />

        <div className="form-group col-md-12">
          <div className="col-sm-2">
            {isCreatePerson ? (
              <button type="submit" className="btn btn-success w-100">
                Create
              </button>
            ) : (
              <button type="submit" className="btn btn-primary w-100">
                Update
              </button>
            )}
          </div>
        </div>
      </form>
      <hr />
      {/* <PersonData /> */}
    </Wrapper>
  );
};

export default Edit;
