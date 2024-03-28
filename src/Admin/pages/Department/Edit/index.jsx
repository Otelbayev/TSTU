import React, { useState } from "react";
import {
  Editor,
  TextArea,
  FileImg,
  Select,
  Input,
  ChooseFile,
  LanguageSelect,
} from "../../../components/Generics";

const DepartmentEdit = () => {
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
                <h1>Изменить отдел</h1>
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
                          onSubmit={onHandleSubmit}
                          className="form-horizontal row"
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
                          <div className="form-group col-md-3">
                            <label
                              htmlFor="img"
                              className="col-sm-12 col-form-label"
                            >
                              Изображение
                            </label>
                            <div className="col-sm-12" style={{ marginTop: 8 }}>
                              <img
                                height={40}
                                src="https://tstu.uz/storage/app/public/Rektor"
                                alt="нет информации"
                              />
                              <input
                                hidden
                                type="text"
                                className="form-control"
                                id="img"
                                name="img_now"
                                defaultValue="Rektor"
                                style={{ padding: 2 }}
                              />
                            </div>
                          </div>
                          <ChooseFile
                            className="form-group col-md-3"
                            label="Фотография"
                          />
                          <div className="form-group col-md-3">
                            <label
                              htmlFor="img"
                              className="col-sm-12 col-form-label"
                            >
                              Изображение
                            </label>
                            <div className="col-sm-12" style={{ marginTop: 8 }}>
                              <img
                                height={40}
                                src="https://tstu.uz/storage/app/public/Rektor"
                                alt="нет информации"
                              />
                              <input
                                hidden
                                type="text"
                                className="form-control"
                                name="img_icon_now"
                                defaultValue="Rektor"
                                style={{ padding: 2 }}
                              />
                            </div>
                          </div>
                          <ChooseFile
                            className="form-group col-md-3"
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
                              <button className="btn btn-success">
                                Сохранить
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                      {/* /.tab-pane */}
                    </div>
                    {/* /.tab-content */}
                  </div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </section>
        {/* /.content */}
      </div>
    </div>
  );
};

export default DepartmentEdit;
