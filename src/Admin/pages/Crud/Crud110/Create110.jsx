import React, { useEffect, useState } from "react";
import Wrapper from "../../../components/Wrapper";
import { Input, Select } from "../../../components/Generics";
import axios from "axios";
import Cookies from "js-cookie";
import { message } from "antd";
import { useDepartmentContext } from "../../../context/DepartmentContext";

const Create110 = () => {
  const { departmentOptions, getSelectDepartment } = useDepartmentContext();
  const [parentOptions, setParentOptions] = useState([]);

  const [department, setDepartment] = useState(0);
  const [parent, setParent] = useState(0);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [score, setScore] = useState("");
  const [sequence, setSequence] = useState("");
  const [ind1, setInd1] = useState(true);
  const [ind2, setInd2] = useState(true);
  const [ind3, setInd3] = useState(true);

  async function handleSubmit(e) {
    message.loading({ key: "sub", content: "Loading..." });
    e.preventDefault();

    try {
      const res = await axios.post(
        `${
          import.meta.env.VITE_BASE_URL_API
        }/documentteacher110controller/createdocumentteacher110`,
        {
          title,
          parent_id: parent,
          indicator: ind1,
          one_indicator: ind2,
          two_indicator: ind3,
          max_score: score,
          description: desc,
          document_sequence: [
            {
              sequence_number: sequence,
              department_id: department,
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("_token")}`,
          },
        }
      );

      if (res.status === 200) {
        message.success({ key: "sub", content: "Success!" });
        setTitle("");
        setDesc("");
        setDepartment(0);
        setParent(parentOptions[0].value);
        setScore("");
        setSequence("");
        setInd1(true);
        setInd2(true);
        setInd3(true);
      }
    } catch (err) {
      message.error({ key: "sub", content: "Error!" });
    }
  }

  const bool = [
    { value: true, label: "true" },
    { value: false, label: "false" },
  ];

  useEffect(() => {
    getSelectDepartment("uz");
    fetch(
      `${
        import.meta.env.VITE_BASE_URL_API
      }/documentteacher110controller/getalldocumentteacher110select`,
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("_token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((res) => res.map((e) => ({ label: e.title, value: e.id })))
      .then((res) => {
        setParentOptions(res);
        setParent(res[0].value);
      });
  }, []);

  const [mock, setMock] = useState([])

  return (
    <Wrapper title="Create Teacher 110">
      <form className="form-horizontal row" onSubmit={handleSubmit}>
        <Input
          className="form-group col-md-6"
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          className="form-group col-md-6"
          label="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <Select
          className="form-group col-md-6"
          label="Parent"
          options={parentOptions}
          value={parent}
          onChange={(e) => setParent(e)}
        />
        <Input
          className="form-group col-md-6"
          type="number"
          value={sequence}
          onChange={(e) => setSequence(e.target.value)}
          label="Ball"
        />

        <Select
          className="form-group col-md-4"
          label="Indicator 1"
          options={bool}
          value={ind1}
          onChange={(e) => setInd1(e)}
        />
        <Select
          className="form-group col-md-4"
          label="Indicator 2"
          options={bool}
          value={ind2}
          onChange={(e) => setInd2(e)}
        />
        <Select
          className="form-group col-md-4"
          label="Indicator 3"
          options={bool}
          value={ind3}
          onChange={(e) => setInd3(e)}
        />
        <div className="row col-md-10">
          <Select
            className="form-group col-md-6"
            label="Department"
            options={departmentOptions}
            value={department}
            onChange={(e) => setDepartment(e)}
          />
          <Input
            className="form-group col-md-6"
            type="number"
            label="Sequence Number"
            value={score}
            onChange={(e) => setScore(e.target.value)}
          />
        </div>
        <div className="col-md-2">
          <label className="col-sm-12 col-form-label">Add Item</label>
          <div className="col-sm-12">
            <button type="button" className="btn btn-primary w-100">
              Add
            </button>
          </div>
        </div>

        <div className="form-group mt-3 col-md-12">
          <div className="col-sm-12">
            <button type="submit" className="btn btn-success">
              Create
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default Create110;
