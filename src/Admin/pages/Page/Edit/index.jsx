import React, { useEffect, useState } from "react";
import {
  ChooseFile,
  Editor,
  FileImg,
  LanguageSelect,
  Select,
  TextArea,
} from "../../../components/Generics";
import { useParams } from "react-router-dom";
import useAxios from "../../../../hooks/useAxios";
import Cookies from "js-cookie";

const Edit = () => {
  const [value, setValue] = useState("uz");

  const { sendRequest } = useAxios();
  const { id } = useParams();
  const [data, setData] = useState([]);

  const onHandleSubmit = (e) => {
    e.preventDefault();
  };

  const getData = async () => {
    try {
      const response = await sendRequest({
        method: "get",
        url: `/api/page/getbyidpage/${id}`,
        headers: {
          Authorization: `Bearer ${Cookies.get("_token")}`,
        },
      });
      setData(response?.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(data);
  return (
    <div>
      <div className="content-wrapper wrapper-min-height">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Изменить страницу</h1>
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
                            defaultValue={data?.title_short}
                          />
                          <TextArea
                            className="form-group col-md-6 card-header"
                            label={`Description (${value})`}
                            defaultValue={data?.title}
                          />
                          <Editor
                            className="form-group col-md-6 card-header"
                            lan={value}
                            defaultValue="none"
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

export default Edit;
