import React, { useEffect, useRef, useState } from "react";
import {
  ChooseFile,
  Editor,
  Input,
  Select,
  TextArea,
  Image,
} from "../../../components/Generics";
import LanguageSelect from "../../../components/Generics/LanguageSelect";
import { useLanguageContext } from "../../../../context/LanguageContext";
import { useDepartmentContext } from "../../../context/DepartmentContext";
import { useGenderContext } from "../../../context/GenderContext";
import { useParams } from "react-router-dom";
import Wrapper from "../../../components/Wrapper";
import { useEmployeeContext } from "../../../context/EmployeeContext";
import axios from "axios";
import Cookies from "js-cookie";
import { message } from "antd";
import { useStatusContext } from "./../../../context/Status/index";

const Edit = () => {
  const [value, setValue] = useState("uz");
  const [isCreate, setIsCreate] = useState(false);
  const [transId, setTransId] = useState(null);

  const { options } = useLanguageContext();
  const language_id = options.find((e) => e.code === value)?.id;
  const { id } = useParams();

  const { departmentOptions, getSelectDepartment } = useDepartmentContext();
  const { genderData, getGender } = useGenderContext();
  const { getEmployeeType, employeeTypeData } = useEmployeeContext();
  const { statusData, getStatus } = useStatusContext();

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [patronymic, setPatronymic] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState(null);
  const [jshir, setJshir] = useState("");
  const [passportSerial, setPassportSerial] = useState("");
  const [passportNumber, setPassportNumber] = useState("");
  const [departent, setDepartent] = useState(null);
  const [employee, setEmployee] = useState(null);
  const [biography, setBiography] = useState("");
  const [date, setDate] = useState("2000-01-01");
  const [degree, setDegree] = useState("");
  const [experience, setExperience] = useState("");
  const [tel1, setTel1] = useState("");
  const [tel2, setTel2] = useState("");
  const [orcid, setOrcid] = useState("");
  const [scopus, setScopus] = useState("");
  const [address, setAddress] = useState("");
  const [uzbek, setUzbek] = useState("");
  const [ingiliz, setIngiliz] = useState("");
  const [rus, setRus] = useState("");
  const [other, setOther] = useState("");
  const [other2, setOther2] = useState("");
  const [scientific, setScientific] = useState("");
  const [experience_json, setExperience_json] = useState("");
  const [img, setImg] = useState(null);
  const [status, setStatus] = useState(null);
  const [src, setSrc] = useState(null);

  const portfolioRef = useRef(null);
  const blogRef = useRef(null);

  const getDataId = async (value, id) => {
    try {
      const res = await axios.get(
        value === "uz"
          ? `/api/persondata/getbyidpersondata/${id}`
          : `/api/persondata/getbyuzidpersondatatranslation/${id}?language_code=${value}`,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("_token")}`,
          },
        }
      );

      if (res.status === 200) {
        setIsCreate(false);
        setTransId(res?.data?.id);
        setName(
          res?.data?.persons_?.firstName ||
            res?.data?.persons_translation_?.firstName
        );
        setSurname(
          res?.data?.persons_?.lastName ||
            res?.data?.persons_translation_?.lastName
        );
        setPatronymic(
          res?.data?.persons_?.fathers_name ||
            res?.data?.persons_translation_?.fathers_name
        );
        setEmail(
          res?.data?.persons_?.email ||
            res?.data?.persons_translation_?.persons_?.email
        );
        setGender(
          res?.data?.persons_?.gender_?.id ||
            res?.data?.persons_translation_?.gender_?.id
        );
        setJshir(
          res?.data?.persons_?.pinfl || res?.data?.persons_translation_?.pinfl
        );
        setPassportSerial(
          res?.data?.persons_?.passport_text ||
            res?.data?.persons_translation_?.passport_text
        );
        setPassportNumber(
          res?.data?.persons_?.passport_number ||
            res?.data?.persons_translation_?.passport_number
        );
        setDepartent(
          res?.data?.persons_?.departament_?.id ||
            res?.data?.persons_translation_?.departament_translation_?.id
        );
        setEmployee(
          res?.data?.persons_?.employee_type_?.id ||
            res?.data?.persons_translation_?.employee_type_translation_?.id
        );
        setSrc(res?.data?.persons_?.img_?.url);
        setBiography(res?.data?.biography_json);
        setDate(res?.data?.birthday?.split("T")[0]);
        setDegree(res?.data?.degree);
        setExperience(res?.data?.experience_year);
        setTel1(res?.data?.phone_number1);
        setTel2(res?.data?.phone_number2);
        setOrcid(res?.data?.orchid);
        setScopus(res?.data?.scopus_id);
        setAddress(res?.data?.address);
        setUzbek(res?.data?.languages_uz);
        setIngiliz(res?.data?.languages_en);
        setRus(res?.data?.languages_ru);
        setOther(res?.data?.languages_any_title);
        setOther2(res?.data?.languages_any);
        setScientific(res?.data?.scientific_activity_json);
        setExperience_json(res?.data?.experience_json);
        setImg(res?.data?.img_?.url || res?.data?.img_translation_?.url);
        setStatus(res?.data?.status_?.id || res?.data?.status_translation_?.id);
        $(portfolioRef.current)?.summernote("code", res?.data?.portfolio_json);
        $(blogRef.current)?.summernote("code", res?.data?.blog_json);
      } else {
        throw new Error();
      }
    } catch (error) {
      setIsCreate(true);
      setTransId(null);
      setName("");
      setSurname("");
      setPatronymic("");
      setEmail("");
      setGender(genderData[0]?.value);
      setJshir("");
      setPassportSerial("");
      setPassportNumber("");
      setDepartent(departmentOptions[0]?.value);
      setEmployee(employeeTypeData[0]?.value);
      setBiography("");
      setDate("2000-01-01");
      setDegree("");
      setExperience("");
      setTel1("");
      setTel2("");
      setOrcid("");
      setScopus("");
      setAddress("");
      setUzbek("");
      setIngiliz("");
      setRus("");
      setOther("");
      setOther2("");
      setScientific("");
      setExperience_json("");
      setImg(null);
      setStatus(null);
      $(portfolioRef.current)?.summernote("code", "");
      $(blogRef.current)?.summernote("code", "");
    }
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();

    try {
      message.loading({ key: "key", content: "Loading!" });
      const obj = {
        persons_translation_: {
          firstName: name,
          lastName: surname,
          fathers_name: patronymic,
          gender_id: gender || 1,
          employee_type_translation_id: employee,
          departament_translation_id: departent,
        },
        persons_data_id: transId,
        biography_json: biography,
        birthday: `${date}T16:38:51.281Z`,
        degree: degree,
        experience_year: Number(experience),
        phone_number1: tel1,
        phone_number2: tel2,
        orchid: orcid,
        scopus_id: scopus,
        address: address,
        languages_uz: Number(uzbek),
        languages_en: Number(ingiliz),
        languages_ru: Number(rus),
        languages_any_title: other,
        languages_any: Number(other2),
        experience_json: experience_json,
        scientific_activity_json: scientific,
        portfolio_json: $(portfolioRef.current)?.summernote("code"),
        blog_json: $(blogRef.current)?.summernote("code"),
        language_id,
        status_translation_id: status,
      };
      if (value === "uz" && !isCreate) {
        const formData = new FormData();
        formData.append("persons_.firstName", name);
        formData.append("persons_.lastName", surname);
        formData.append("persons_.fathers_name", patronymic || "");
        formData.append("persons_.email", email || "");
        formData.append("persons_.gender_id", gender || 1);
        formData.append("persons_.pinfl", jshir || "");
        formData.append("persons_.passport_text", passportSerial || "");
        formData.append("persons_.passport_number", passportNumber || "");
        formData.append("persons_.departament_id", departent || "");
        formData.append("persons_.employee_type_id", employee || "");
        formData.append("biography_json", biography || "");
        formData.append("birthday", `${date}T16:38:51.281Z` || "");
        formData.append("degree", degree || "");
        formData.append("experience_year", experience || "");
        formData.append("phone_number1", tel1 || "");
        formData.append("phone_number2", tel2 || "");
        formData.append("orchid", orcid || "");
        formData.append("scopus_id", scopus || "");
        formData.append("address", address || "");
        formData.append("languages_uz", uzbek || "");
        formData.append("languages_en", ingiliz || "");
        formData.append("languages_ru", rus || "");
        formData.append("languages_any_title", other || "");
        formData.append("languages_any", other2 || "");
        formData.append("experience_json", experience_json || "");
        formData.append("scientific_activity_json", scientific || "");
        formData.append(
          "portfolio_json",
          $(portfolioRef.current)?.summernote("code") || ""
        );
        formData.append(
          "blog_json",
          $(blogRef.current)?.summernote("code") || ""
        );
        formData.append("img_up", img);
        formData.append("status_id", status || "");

        const res = await axios.put(
          `/api/persondata/updatepersondata/${id}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${Cookies.get("_token")}`,
            },
          }
        );
        res.status === 200 &&
          message.success({
            key: "key",
            content: "Successfully updated!",
          });
      } else if (value !== "ru" && !isCreate) {
        const res = await axios.put(
          `/api/persondata/updatepersondatatranslation/${id}`,
          obj,
          {
            headers: {
              Authorization: `Bearer ${Cookies.get("_token")}`,
            },
          }
        );
        res.status === 200 &&
          message.success({
            key: "key",
            content: "Successfully updated!",
          });
      } else if (isCreate) {
        delete obj.status_translation_id;
        obj.persons_data_id = Number(id);
        const res = await axios.post(
          "/api/persondata/createpersondatatranslation",
          obj,
          {
            headers: {
              Authorization: `Bearer ${Cookies.get("_token")}`,
            },
          }
        );
        if (res.status === 200) {
          setIsCreate(false);
          message.success({
            key: "key",
            content: "Successfully updated!",
          });
        }
      }
    } catch (err) {
      console.log(err);
      message.error({ key: "key", content: "Somthing went wrong!" });
    }
  };

  useEffect(() => {
    getSelectDepartment(value);
    getGender(value);
    getEmployeeType(value);
    getStatus(value);
    getDataId(value, id);
  }, [value, isCreate]);

  return (
    <Wrapper title={"Edit Person"}>
      <form onSubmit={onHandleSubmit} className="form-horizontal row">
        <div className="col-md-12">
          <LanguageSelect onChange={(e) => setValue(e)} />
        </div>
        <Input
          className="form-group col-md-4"
          label={`Ism (${value})`}
          placeholder="Ism"
          value={name || ""}
          onChange={(e) => setName(e.target.value)}
          name="name"
        />
        <Input
          className="form-group col-md-4"
          label={`Familiya (${value})`}
          placeholder="Familiya"
          value={surname || ""}
          onChange={(e) => setSurname(e.target.value)}
          name="surname"
        />
        <Input
          className="form-group col-md-4"
          label={`Otasining ismi (${value})`}
          placeholder="Otasining ismi"
          value={patronymic || ""}
          onChange={(e) => setPatronymic(e.target.value)}
          name="patronymic"
        />
        <Input
          className="form-group col-md-3"
          label={`Email (${value})`}
          placeholder="qwerty@gmail.com"
          type="email"
          value={email || ""}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
        />
        {value === "uz" && (
          <Input
            className="form-group col-md-3"
            label={`JSHSHIR - ПИНФЛ (${value})`}
            placeholder="123456789"
            maxLength={14}
            minLength={14}
            value={jshir || ""}
            onChange={(e) => setJshir(e.target.value)}
            name="pinfl"
          />
        )}
        {value === "uz" && (
          <Input
            className="form-group col-md-3"
            label={`Passport - № (${value})`}
            placeholder="AB"
            maxLength={2}
            minLength={2}
            value={passportSerial || ""}
            onChange={(e) => setPassportSerial(e.target.value)}
          />
        )}
        {value === "uz" && (
          <Input
            className="form-group col-md-3"
            label={`Passport - № (${value})`}
            placeholder="1234567"
            minLength={7}
            maxLength={7}
            value={passportNumber || ""}
            onChange={(e) => setPassportNumber(e.target.value)}
          />
        )}
        <Select
          label="Jinsi"
          className={"form-group col-md-3"}
          options={genderData}
          value={gender}
          onChange={(e) => setGender(e)}
        />
        <Select
          label="Bo'lim"
          className={"form-group col-md-3"}
          options={departmentOptions}
          showSearch={true}
          value={departent}
          onChange={(e) => setDepartent(e)}
        />
        <Select
          label="Xodim turi"
          className={"form-group col-md-3"}
          options={employeeTypeData}
          showSearch={true}
          value={employee}
          onChange={(e) => setEmployee(e)}
        />
        <Input
          label="Tug'ilgan sanasi"
          className="form-group col-md-3"
          type="date"
          value={date || ""}
          onChange={(e) => setDate(e.target.value)}
        />
        <Input
          label={`Ilmiy daraja (${value})`}
          placeholder="type"
          className="form-group col-md-3"
          value={degree || ""}
          onChange={(e) => setDegree(e.target.value)}
        />
        <Input
          className={"form-group col-md-3"}
          label="Tajribasi (yil)"
          placeholder="0"
          minLength={1}
          maxLength={2}
          value={experience || ""}
          onChange={(e) => setExperience(e.target.value)}
        />
        <Input
          className={"form-group col-md-3"}
          label="Telefon 1"
          name="tel"
          type="tel"
          placeholder="+99899 999-99-99"
          value={tel1 || ""}
          onChange={(e) => setTel1(e.target.value)}
        />
        <Input
          className={"form-group col-md-3"}
          label="Telefon 2"
          name="tel"
          type="tel"
          placeholder="+99899 999-99-99"
          value={tel2 || ""}
          onChange={(e) => setTel2(e.target.value)}
        />
        <Input
          className={"form-group col-md-3"}
          label="ORCID"
          placeholder="0009-0009-0009-0009"
          value={orcid || ""}
          onChange={(e) => setOrcid(e.target.value)}
        />
        <Input
          className={"form-group col-md-3"}
          label="Scopus ID"
          placeholder={58816969400}
          value={scopus || ""}
          onChange={(e) => setScopus(e.target.value)}
        />
        <Input
          className={"form-group col-md-3"}
          label="Address"
          placeholder="address"
          value={address || ""}
          onChange={(e) => setAddress(e.target.value)}
        />
        <Input
          label="O'zbek tili (1-99)%"
          className={
            value === "uz" ? "form-group col-md-3" : "form-group col-md-2"
          }
          placeholder="80%"
          minLength={2}
          maxLength={2}
          value={uzbek || ""}
          onChange={(e) => setUzbek(e.target.value)}
        />
        <Input
          label="Ingiliz tili (1-99)%"
          className={
            value === "uz" ? "form-group col-md-3" : "form-group col-md-2"
          }
          placeholder="80%"
          minLength={2}
          maxLength={2}
          value={ingiliz || ""}
          onChange={(e) => setIngiliz(e.target.value)}
        />
        <Input
          label="Rus tili (1-99)%"
          className={
            value === "uz" ? "form-group col-md-3" : "form-group col-md-2"
          }
          placeholder="80%"
          minLength={2}
          maxLength={2}
          value={rus || ""}
          onChange={(e) => setRus(e.target.value)}
        />
        <Input
          label="Boshqa til nomi"
          className={
            value === "uz" ? "form-group col-md-3" : "form-group col-md-2"
          }
          placeholder="Koreys tili"
          value={other || ""}
          onChange={(e) => setOther(e.target.value)}
        />
        <Input
          label="Boshqa til (1-99)%"
          className={
            value === "uz" ? "form-group col-md-3" : "form-group col-md-2"
          }
          placeholder="80%"
          minLength={2}
          maxLength={2}
          value={other2 || ""}
          onChange={(e) => setOther2(e.target.value)}
        />
        {!isCreate && (
          <Select
            label={"Status"}
            className={
              value === "uz" ? "form-group col-md-4" : "form-group col-md-2"
            }
            value={status}
            onChange={(e) => setStatus(e)}
            options={statusData}
          />
        )}
        {value === "uz" && (
          <ChooseFile
            className="form-group col-md-4"
            label="Rasm"
            onChange={(e) => setImg(e.target.files[0])}
          />
        )}
        {value === "uz" && (
          <Image
            className="form-group col-md-2"
            img={`/public/api/${src}`}
            label="Rasm"
          />
        )}
        <TextArea
          label="Biografiya"
          className="form-group col-md-4"
          value={biography || ""}
          onChange={(e) => setBiography(e.target.value)}
        />
        <TextArea
          label="Ilmiy Faoliyati"
          className="form-group col-md-4"
          value={scientific || ""}
          onChange={(e) => setScientific(e.target.value)}
        />
        <TextArea
          label="Tajribasi"
          className="form-group col-md-4"
          value={experience_json || ""}
          onChange={(e) => setExperience_json(e.target.value)}
        />
        <Editor
          ref={portfolioRef}
          label="Portfolio"
          className="form-group col-md-6"
          lan={value}
        />
        <Editor
          label="Blog"
          className="form-group col-md-6"
          lan={value}
          ref={blogRef}
        />
        <div className="form-group col-md-12">
          <div className="col-sm-2">
            {isCreate ? (
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
    </Wrapper>
  );
};

export default Edit;
