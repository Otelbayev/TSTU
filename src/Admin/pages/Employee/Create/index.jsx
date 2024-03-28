import React, { useState } from "react";
import {
  ChooseFile,
  Editor,
  Input,
  LanguageSelect,
  Select,
} from "../../../components/Generics";

const Create = () => {
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
                <h1>Создать сотрудника</h1>
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
                          <Input
                            className="form-group col-md-6 card-header"
                            label={`FullName (${value})`}
                            placeholder="Fullname"
                          />
                          <Editor
                            className="form-group col-md-6 card-header"
                            lan={value}
                          />
                          <Select
                            label="Тип сотрудника"
                            className={"form-group col-md-3"}
                            options={options}
                          />
                          <Select
                            label="Отделение"
                            className={"form-group col-md-3"}
                            options={options}
                          />
                          <Input
                            label="Статус"
                            type="number"
                            defaultValue={1}
                            className="form-group col-md-3"
                          />
                          <ChooseFile
                            className="form-group col-md-3"
                            label="Фотография"
                          />
                          <Input
                            label="JSHSHIR - ПИНФЛ"
                            className="form-group col-md-3"
                            minLength={14}
                            maxLength={14}
                            defaultValue={"true"}
                          />
                          <Input
                            label="Паспорт - №"
                            className="form-group col-md-3"
                            minLength={2}
                            maxLength={2}
                            placeholder="AB"
                          />
                          <Input
                            label="Паспорт - №"
                            defaultValue={1}
                            className="form-group col-md-3"
                            minLength={7}
                            maxLength={7}
                            placeholder={1234567}
                          />
                          <Input
                            label="Дата Рождения"
                            className="form-group col-md-3"
                            type="date"
                          />

                          <Input
                            label="Ilmiy unvoni (uz)"
                            placeholder="тип"
                            className="form-group col-md-2"
                          />
                          <Input
                            label="Ilmiy daraja (uz)"
                            placeholder="тип"
                            className="form-group col-md-2"
                          />
                          <Input
                            label="Academic title (eng)"
                            placeholder="тип"
                            className="form-group col-md-2"
                          />
                          <Input
                            label="Academic degree (eng)"
                            placeholder="тип"
                            className="form-group col-md-2"
                          />
                          <Input
                            label="Ученое звание (ru)"
                            placeholder="тип"
                            className="form-group col-md-2"
                          />
                          <Input
                            label="Ученая степень (ru)"
                            placeholder="тип"
                            className="form-group col-md-2"
                          />

                          <Input
                            className={"form-group col-md-3"}
                            label="Телефон"
                            name="tel"
                            placeholder="+99899 999-99-99"
                          />
                          <Input
                            className={"form-group col-md-3"}
                            label="Аудитория"
                            placeholder="101-Auditoriya"
                          />
                          <Input
                            className={"form-group col-md-3"}
                            label="ORCID"
                            placeholder="0009-0009-0009-0009"
                          />
                          <Input
                            className={"form-group col-md-3"}
                            label="Scopus ID"
                            placeholder={58816969400}
                          />
                          <Input
                            label="Facebook"
                            placeholder={"link"}
                            className="form-group col-md-2"
                          />
                          <Input
                            label="Telegram"
                            placeholder={"link"}
                            className="form-group col-md-2"
                          />
                          <Input
                            label="Blog"
                            placeholder={"link"}
                            className="form-group col-md-2"
                          />
                          <Input
                            label="Instagram"
                            placeholder={"link"}
                            className="form-group col-md-3"
                          />
                          <Input
                            label="Youtube"
                            placeholder={"link"}
                            className="form-group col-md-3"
                          />
                          <Input
                            label="Узбекский язык (1-99)%"
                            className="form-group col-md-2"
                            placeholder="80%"
                            minLength={2}
                            maxLength={2}
                          />
                          <Input
                            label="Русский язык (1-99)%"
                            className="form-group col-md-2"
                            placeholder="80%"
                            minLength={2}
                            maxLength={2}
                          />
                          <Input
                            label="Английский язык (1-99)%"
                            className="form-group col-md-2"
                            placeholder="80%"
                            minLength={2}
                            maxLength={2}
                          />
                          <Input
                            label="Названия другого языка"
                            className="form-group col-md-3"
                            placeholder="Корейский язык"
                          />
                          <Input
                            label="Знания другого языка (1-99)%"
                            className="form-group col-md-3"
                            placeholder="80%"
                            minLength={2}
                            maxLength={2}
                          />

                          <Input
                            label="E-mail"
                            placeholder={"E-mail"}
                            id="email"
                            name="email"
                            className="form-group col-md-3"
                          />
                          <Input
                            label="Новый пароль"
                            type="password"
                            className="form-group col-md-3"
                          />
                          <Input
                            label="Повторите пароль"
                            className="form-group col-md-3"
                            type="password"
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
