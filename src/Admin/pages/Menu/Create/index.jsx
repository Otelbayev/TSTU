import React, { useState } from "react";
import {
  Input,
  Select,
  TextArea,
  LanguageSelect,
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
                          onSubmit={onHandleSubmit}
                          className="form-horizontal row"
                        >
                          <div className="col-md-12">
                            <LanguageSelect
                              className="form-group col-md-3"
                              label="язык"
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
                          <Input
                            className="form-group col-md-6 card-header"
                            label="Ссылка"
                            placeholder="Link"
                          />
                          <Input
                            className="form-group col-md-6 card-header"
                            label="Иконка (fa-book)"
                            placeholder="icon"
                          />

                          <Select
                            className="form-group col-md-3"
                            label="Типы меню"
                          />
                          <Select
                            className="form-group col-md-3"
                            label="Топ меню"
                          />
                          <Input
                            className="form-group col-md-3"
                            label="Позиция"
                          />
                          <Select
                            className="form-group col-md-3"
                            label="Топ 2 меню"
                          />

                          <Select
                            label="Блог"
                            className="form-group col-md-4"
                          />
                          <Select
                            label="Страницы"
                            className="form-group col-md-4"
                          />
                          <Select
                            label="Отделения"
                            className="form-group col-md-4"
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
