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
import { useNavigate } from "react-router-dom";
import Wrapper from "../../../components/Wrapper";
import { useEmployeeContext } from "../../../context/EmployeeContext";
import axios from "axios";
import Cookies from "js-cookie";
import { message } from "antd";

const Edit = () => {
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

  const portfolioRef = useRef(null);
  const blogRef = useRef(null);

  const onHandleSubmit = async (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    getSelectDepartment(value);
    getGender(value);
    getEmployeeType(value);
  }, [value]);

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
          name="name"
        />
        <Input
          className="form-group col-md-4"
          label={`Familiya (${value})`}
          placeholder="Familiya"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          name="surname"
        />
        <Input
          className="form-group col-md-4"
          label={`Otasining ismi (${value})`}
          placeholder="Otasining ismi"
          value={patronymic}
          onChange={(e) => setPatronymic(e.target.value)}
          name="patronymic"
        />
        <Input
          className="form-group col-md-3"
          label={`Email (${value})`}
          placeholder="qwerty@gmail.com"
          type="email"
          value={email}
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
            value={jshir}
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
            <button type="submit" className="btn btn-primary w-100">
              Update
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default Edit;
