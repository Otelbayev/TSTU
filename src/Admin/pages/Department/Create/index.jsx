import React, { useState } from "react";
import {
  TextArea,
  Editor,
  FileImg,
  Select,
  ChooseFile,
  Input,
  LanguageSelect,
} from "../../../components/Generics";

const DepartmentCreate = () => {
  const [value, setValue] = useState("uz");

  const onHandleSubmit = (e) => {
    e.preventDefault();
  };
  const options = [
    { value: 1, label: "first" },
    { value: 2, label: "second" },
    { value: 3, label: "thrid" },
  ];
  return (
    <div>
      <div className="content-wrapper wrapper-min-height">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Создать отдел</h1>
              </div>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-body">
                    <div className="tab-content">
                      <div className="active tab-pane" id="settings">
                        <form
                          className="form-horizontal row"
                          onSubmit={onHandleSubmit}
                        >
                          <div className="col-md-12">
                            <LanguageSelect
                              className={"form-group col-md-3"}
                              value={value}
                              setValue={setValue}
                            />
                          </div>
                          <TextArea
                            className="form-group col-md-6 card-header"
                            label={`Title (${value})`}
                          />
                          <TextArea
                            className="form-group col-md-6 card-header"
                            label={`Description (${value})`}
                          />
                          <Editor
                            className="form-group col-md-6 card-header"
                            lan={value}
                          />
                          <FileImg
                            className="form-group col-md-6 card-header"
                            lan={value}
                          />
                          <Select
                            className="form-group col-md-4"
                            label="Тип отдела"
                            options={options}
                          />
                          <Select
                            className="form-group col-md-4"
                            label="Парент отдела"
                            options={options}
                          />
                          <Select
                            className="form-group col-md-4"
                            label="Шаблон"
                            options={options}
                          />
                          <ChooseFile
                            className="form-group col-md-6"
                            label="Фотография"
                          />
                          <ChooseFile
                            className="form-group col-md-6"
                            label="Фотография иконка"
                          />
                          <Input
                            className="form-group col-md-4 d_n"
                            label="Ta‘lim tili"
                          />
                          <Input
                            className="form-group col-md-4 d_n"
                            label="Kontrakt"
                          />
                          <Input
                            className="form-group col-md-4 d_n"
                            label="Stipendiya"
                          />
                          <Input
                            className="form-group col-md-4 d_n"
                            label="Sirtqi ta‘lim"
                          />
                          <Input
                            className="form-group col-md-4 d_n"
                            label="Kunduzgi ta‘lim"
                          />
                          <Input
                            className="form-group col-md-4 d_n"
                            label="Masofaviy ta‘lim"
                          />
                          <Input
                            className="form-group col-md-4 d_n"
                            label="Talablar"
                          />
                          <div className="form-group col-md-12">
                            <div className="col-sm-12">
                              <button type="submit" className="btn btn-success">
                                Сохранить
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DepartmentCreate;
