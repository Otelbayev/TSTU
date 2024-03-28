import React, { useState } from "react";
import {
  ChooseFile,
  Editor,
  Input,
  LanguageSelect,
  Select,
} from "../../../components/Generics";

const Edit = () => {
  const [disabled, setDisabled] = useState(true);
  const [value, setValue] = useState("uz");

  const onChecked = ({ target: { checked } }) => {
    setDisabled(!checked);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
  };
  const options = [
    { value: 1, label: "first" },
    { value: 2, label: "second" },
    { value: 2, label: "thrid" },
  ];
  return (
    <div>
      <div className="content-wrapper wrapper-min-height">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Изменить сотрудника</h1>
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
                            className="form-group col-md-2"
                          />
                          <div className="form-group col-md-2">
                            <label
                              htmlFor="img"
                              className="col-sm-12 col-form-label"
                            >
                              Изображение
                            </label>
                            <div className="col-sm-12">
                              <img
                                height={100}
                                src="https://tstu.uz/storage/app/public/images/2022-12-30/PPi1HCk9FkBjKWkGCzwp2f9IqlcT5I6rLgyKCCq0.jpg"
                                alt="нет информации"
                              />
                            </div>
                          </div>
                          <ChooseFile
                            className="form-group col-md-2"
                            label="Изменить изображение"
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
                            defaultValue={"true"}
                          />
                          <Input
                            label="Паспорт - №"
                            defaultValue={"true"}
                            className="form-group col-md-3"
                            minLength={7}
                            maxLength={7}
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
                            defaultValue={"Professor"}
                          />
                          <Input
                            label="Ilmiy daraja (uz)"
                            placeholder="тип"
                            className="form-group col-md-2"
                            defaultValue={"Texnika fanlari doktori"}
                          />
                          <Input
                            label="Academic title (eng)"
                            placeholder="тип"
                            className="form-group col-md-2"
                            defaultValue={"Professor"}
                          />
                          <Input
                            label="Academic degree (eng)"
                            placeholder="тип"
                            className="form-group col-md-2"
                            defaultValue={"Doctor of Technical Sciences"}
                          />
                          <Input
                            label="Ученое звание (ru)"
                            placeholder="тип"
                            className="form-group col-md-2"
                            defaultValue={"Профессор"}
                          />
                          <Input
                            label="Ученая степень (ru)"
                            placeholder="тип"
                            className="form-group col-md-2"
                            defaultValue={"Доктор технических наук"}
                          />

                          <Input
                            className={"form-group col-md-3"}
                            label="Телефон"
                            name="tel"
                            placeholder="+99899 999-99-99"
                            defaultValue={+998901257501}
                          />
                          <Input
                            className={"form-group col-md-3"}
                            label="Аудитория"
                            placeholder="101-Auditoriya"
                            defaultValue
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
                            defaultValue
                          />

                          <Input
                            label="Facebook"
                            placeholder={"link"}
                            className="form-group col-md-2"
                            defaultValue="https://t.me/tstu_official"
                          />
                          <Input
                            label="Telegram"
                            placeholder={"link"}
                            className="form-group col-md-2"
                            defaultValue="https://t.me/tstu_official"
                          />
                          <Input
                            label="Blog"
                            placeholder={"link"}
                            className="form-group col-md-2"
                            defaultValue={5}
                          />
                          <Input
                            label="Instagram"
                            placeholder={"link"}
                            className="form-group col-md-3"
                            defaultValue
                          />
                          <Input
                            label="Youtube"
                            placeholder={"link"}
                            className="form-group col-md-3"
                            defaultValue
                          />

                          <Input
                            label="Узбекский язык (1-99)%"
                            className="form-group col-md-2"
                            placeholder="80%"
                            minLength={2}
                            maxLength={2}
                            defaultValue
                          />
                          <Input
                            label="Русский язык (1-99)%"
                            className="form-group col-md-2"
                            placeholder="80%"
                            minLength={2}
                            maxLength={2}
                            defaultValue
                          />
                          <Input
                            label="Английский язык (1-99)%"
                            className="form-group col-md-2"
                            placeholder="80%"
                            minLength={2}
                            maxLength={2}
                            defaultValue
                          />
                          <Input
                            label="Названия другого языка"
                            className="form-group col-md-3"
                            placeholder="Корейский язык"
                            defaultValue
                          />
                          <Input
                            label="Знания другого языка (1-99)%"
                            className="form-group col-md-3"
                            placeholder="80%"
                            minLength={2}
                            maxLength={2}
                            defaultValue
                          />
                          <Input
                            label="E-mail"
                            placeholder={"E-mail"}
                            id="email"
                            name="email"
                            className="form-group col-md-3"
                            defaultValue="https://rakhimovrv@yandex.ru"
                          />
                          <Input
                            type="checkbox"
                            label={"Сменить пароль"}
                            onChange={onChecked}
                          />
                          <Input
                            label="Новый пароль"
                            type="password"
                            className="form-group col-md-3"
                            disabled={disabled}
                          />
                          <Input
                            label="Повторите пароль"
                            className="form-group col-md-3"
                            type="password"
                            disabled={disabled}
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

export default Edit;
