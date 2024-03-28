import React, { useState } from "react";
import {
  ChooseFile,
  Editor,
  FileImg,
  LanguageSelect,
  Select,
  TextArea,
} from "../../../components/Generics";

const Create = () => {
  const [value, setValue] = useState("uz");

  const onHandleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="content-wrapper wrapper-min-height">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Создать страницу</h1>
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
                            label="Тип страницы"
                            className="form-group col-md-6"
                          />
                          <ChooseFile
                            label="Фотография"
                            className="form-group col-md-6"
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

export default Create;
