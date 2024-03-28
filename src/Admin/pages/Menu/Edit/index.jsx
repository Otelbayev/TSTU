import React, { useEffect, useState } from "react";
import { Input, Select, TextArea } from "../../../components/Generics";
import { LanguageSelect } from "../../../components/Generics/";

const languageData = {
  uz: {
    title: "TA‘LIM",
    desc: "Universitet transport ta’lim sohasi bо‘yicha Respublikada tayanch oliy ta’lim muassasasi hisoblanadi. Bugungi kunda universitetda kredit-modul tizimi asosida aviatsiya transporti, temir yо‘l transporti, avtomobil transporti hamda qurilish sohalariga 60 ta bakalavriat ta’lim yо‘nalishlari va 41 ta magistratura mutaxassisligi bо‘yicha kadrlar tayyorlanmoqda.",
  },
  eng: {
    title: "EDUCATION",
    desc: "The university is the basic higher educational institution of the Republic in the field of transport education. Today, the university offers a diversified education with 60 undergraduate and 41 graduate specialties in aviation, rail and road transport and other areas of education.",
  },
  ru: {
    title: "ОБРАЗОВАНИЕ",
    desc: "Университет является головным высшим учебным заведением Республики в области транспортного образования. Сегодня на основе кредитно-модульной системы ВУЗ готовит кадры для авиационного, железнодорожного и автомобильного транспорта, а также в сфере строительства по 60 направлениям бакалавриата и 41 специальностей магистратуры.",
  },
};

const Edit = () => {
  const [value, setValue] = useState("uz");

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    const data = languageData[value] || languageData.uz;
    setTitle(data.title);
    setDesc(data.desc);
  }, [value]);

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
                <h1>Изменить меню</h1>
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
                            value={title}
                            onChange={({ target: { value } }) =>
                              setTitle(value)
                            }
                          />
                          <TextArea
                            className="form-group col-md-6 card-header"
                            label={`Description (${value})`}
                            value={desc}
                            onChange={({ target: { value } }) => setDesc(value)}
                          />
                          <Input
                            className="form-group col-md-6 card-header"
                            label="Ссылка"
                            placeholder="Link"
                            defaultValue={0}
                          />
                          <Input
                            className="form-group col-md-6 card-header"
                            label="Иконка (fa-book)"
                            placeholder="icon"
                            defaultValue="fa-book"
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
                            defaultValue
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

export default Edit;
