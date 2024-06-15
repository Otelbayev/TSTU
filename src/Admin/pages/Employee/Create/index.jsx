import React, { useEffect, useRef, useState } from "react";
import {
  ChooseFile,
  Editor,
  Input,
  Select,
  TextArea,
} from "../../../components/Generics";
import LanguageSelect from "../../../components/Generics/LanguageSelect";
import { useLanguageContext } from "../../../../context/LanguageContext";
import { useDepartmentContext } from "../../../context/DepartmentContext";
import { useGenderContext } from "../../../context/GenderContext";
import { useCreate } from "./../../../hooks/useCreate";
import { useNavigate } from "react-router-dom";
import Wrapper from "../../../components/Wrapper";
import { useEmployeeContext } from "../../../context/EmployeeContext";

const Create = () => {
  const [value, setValue] = useState("uz");

  const { language, options } = useLanguageContext();
  const id = options.find((e) => e.code === value)?.id;
  const navigate = useNavigate();
  const { departmentOptions, getSelectDepartment } = useDepartmentContext();
  const { genderData, getGender } = useGenderContext();
  const { getEmployeeType, employeeTypeData } = useEmployeeContext();

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
  const [date, setDate] = useState("");
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

  const portfolioRef = useRef(null);
  const blogRef = useRef(null);

  const onHandleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("persons_.firstName", name);
    formData.append("persons_.lastName", surname);
    formData.append("persons_.fathers_name", patronymic);
    formData.append("persons_.email", email);
    formData.append("persons_.gender_id", gender);
    formData.append("persons_.pinfl", jshir);
    formData.append("persons_.passport_text", passportSerial);
    formData.append("persons_.passport_number", passportNumber);
    formData.append("persons_.departament_id", departent);
    formData.append("persons_.employee_type_id", employee);
    formData.append("biography_json", biography);
    formData.append("birthday", date);
    formData.append("degree", degree);
    formData.append("experience_year", experience);
    formData.append("phone_number1", tel1);
    formData.append("phone_number2", tel2);
    formData.append("orchid", orcid);
    formData.append("scopus_id", scopus);
    formData.append("address", address);
    formData.append("languages_uz", uzbek);
    formData.append("languages_en", ingiliz);
    formData.append("languages_ru", rus);
    formData.append("languages_any_title", other);
    formData.append("languages_any", other2);
    formData.append("experience_json", experience_json);
    formData.append("scientific_activity_json", scientific);
    formData.append(
      "portfolio_json",
      $(portfolioRef.current).summernote("code")
    );
    formData.append("blog_json", $(blogRef.current).summernote("code"));
    formData.append("img_up", img);

    const res = await useCreate(
      value,
      "formData",
      formData,
      "/api/persondata/createpersondata",
      "/api/persondata/createpersondatatranslation",
      "persons_data_id",
      [
        {
          persons_translation_: {
            firstName: name,
            lastName: surname,
            fathers_name: patronymic,
            gender_id: gender,
            persons_id: employee,
            language_id: id,
            employee_type_translation_id: employee,
            departament_translation_id: departent,
          },
        },
        { language_id: id },
      ],
      [
        "persons_.firstName",
        "persons_.lastName",
        "persons_.fathers_name",
        "persons_.gender_id",
        "persons_.pinfl",
        "persons_.passport_text",
        "persons_.passport_number",
        "persons_.employee_type_id",
        "persons_.departament_id",
        "img_up",
      ],
      415
    );

    res?.statusCode === 200 && navigate(`/${language}/admin/employee`);
  };

  useEffect(() => {
    getSelectDepartment(value);
    getGender(value);
    getEmployeeType(value);
  }, [value]);

  useEffect(() => {
    setGender(genderData[0]?.value);
  }, [genderData]);

  useEffect(() => {
    setDepartent(departmentOptions[1]?.value);
  }, [departmentOptions]);

  useEffect(() => {
    setEmployee(employeeTypeData[0]?.value);
  }, [employeeTypeData]);

  return (
    <Wrapper title={"Create Person"}>
      <form onSubmit={onHandleSubmit} className="form-horizontal row">
        <div className="col-md-12">
          <LanguageSelect onChange={(e) => setValue(e)} />
        </div>
        <Input
          className="form-group col-md-4"
          label={`Ism (${value})`}
          placeholder="Ism"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          className="form-group col-md-4"
          label={`Familiya (${value})`}
          placeholder="Familiya"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <Input
          className="form-group col-md-4"
          label={`Otasining ismi (${value})`}
          placeholder="Otasining ismi"
          value={patronymic}
          onChange={(e) => setPatronymic(e.target.value)}
        />
        <Input
          className="form-group col-md-3"
          label={`Email (${value})`}
          placeholder="qwerty@gmail.com"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {value === "uz" && (
          <Input
            className="form-group col-md-3"
            label={`JSHSHIR - ПИНФЛ (${value})`}
            placeholder="123456789"
            maxLength={14}
            minLength={14}
            value={jshir}
            onChange={(e) => setJshir(e.target.value)}
          />
        )}
        {value === "uz" && (
          <Input
            className="form-group col-md-3"
            label={`Passport - № (${value})`}
            placeholder="AB"
            maxLength={2}
            minLength={2}
            value={passportSerial}
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
            value={passportNumber}
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
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        {value === "uz" && (
          <ChooseFile
            className="form-group col-md-3"
            label="Rasm"
            onChange={(e) => setImg(e.target.files[0])}
          />
        )}
        <Input
          label={`Ilmiy daraja (${value})`}
          placeholder="type"
          className="form-group col-md-3"
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
        />
        <Input
          className={"form-group col-md-3"}
          label="Tajribasi (yil)"
          placeholder="0"
          minLength={1}
          maxLength={2}
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        />
        <Input
          className={"form-group col-md-3"}
          label="Telefon 1"
          name="tel"
          type="tel"
          placeholder="+99899 999-99-99"
          value={tel1}
          onChange={(e) => setTel1(e.target.value)}
        />
        <Input
          className={"form-group col-md-3"}
          label="Telefon 2"
          name="tel"
          type="tel"
          placeholder="+99899 999-99-99"
          value={tel2}
          onChange={(e) => setTel2(e.target.value)}
        />
        <Input
          className={"form-group col-md-3"}
          label="ORCID"
          placeholder="0009-0009-0009-0009"
          value={orcid}
          onChange={(e) => setOrcid(e.target.value)}
        />
        <Input
          className={"form-group col-md-3"}
          label="Scopus ID"
          placeholder={58816969400}
          value={scopus}
          onChange={(e) => setScopus(e.target.value)}
        />
        <Input
          className={"form-group col-md-3"}
          label="Address"
          placeholder="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <Input
          label="O'zbek tili (1-99)%"
          className="form-group col-md-2"
          placeholder="80%"
          minLength={2}
          maxLength={2}
          value={uzbek}
          onChange={(e) => setUzbek(e.target.value)}
        />
        <Input
          label="Ingiliz tili (1-99)%"
          className="form-group col-md-2"
          placeholder="80%"
          minLength={2}
          maxLength={2}
          value={ingiliz}
          onChange={(e) => setIngiliz(e.target.value)}
        />
        <Input
          label="Rus tili (1-99)%"
          className="form-group col-md-2"
          placeholder="80%"
          minLength={2}
          maxLength={2}
          value={rus}
          onChange={(e) => setRus(e.target.value)}
        />
        <Input
          label="Boshqa til nomi"
          className="form-group col-md-2"
          placeholder="Koreys tili"
          value={other}
          onChange={(e) => setOther(e.target.value)}
        />
        <Input
          label="Boshqa til (1-99)%"
          className="form-group col-md-2"
          placeholder="80%"
          minLength={2}
          maxLength={2}
          value={other2}
          onChange={(e) => setOther2(e.target.value)}
        />
        <TextArea
          label="Biografiya"
          className="form-group col-md-4"
          value={biography}
          onChange={(e) => setBiography(e.target.value)}
        />
        <TextArea
          label="Ilmiy Faoliyati"
          className="form-group col-md-4"
          value={scientific}
          onChange={(e) => setScientific(e.target.value)}
        />
        <TextArea
          label="Tajribasi"
          className="form-group col-md-4"
          value={experience_json}
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
            <button type="submit" className="btn btn-success w-100">
              Create
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default Create;
