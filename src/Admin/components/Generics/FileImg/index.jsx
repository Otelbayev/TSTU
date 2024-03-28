import React from "react";

const FileImg = ({ lan, className }) => {
  return (
    <div className={className}>
      <label htmlFor="file_ru" className="col-sm-4 col-form-label">
        FILE ({lan})
      </label>
      <div className="row">
        <div className="col-md-6">
          <button
            type="button"
            className="btn btn-default"
            data-toggle="modal"
            data-target="#modal-default3"
          >
            Загрузка файлов ({lan})
          </button>
        </div>
        <div className="col-md-6">
          <button
            type="button"
            className="btn btn-default"
            data-toggle="modal"
            data-target="#modal-image3"
          >
            Загрузка изображение ({lan})
          </button>
        </div>
      </div>
      <div
        className="modal fade"
        id="modal-default3"
        style={{ display: "none" }}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Загрузка файлов ({lan})</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="form-group col-md-6 fileru">
                  <label
                    htmlFor="file_text"
                    className="col-sm-4 col-form-label"
                  >
                    Текст
                  </label>
                  <div className="col-sm-12">
                    <input
                      type="text"
                      className="form-control"
                      id="file_text_ru"
                    />
                  </div>
                </div>
                <div className="form-group col-md-6 fileru">
                  <label htmlFor="files" className="col-sm-4 col-form-label">
                    Файл
                  </label>
                  <div className="col-sm-12">
                    <input
                      type="file"
                      className="form-control"
                      id="file_ru"
                      style={{ padding: 2 }}
                    />
                  </div>
                </div>
                <div className="form-group col-md-6">
                  <label className="col-sm-4 col-form-label">Файлы</label>
                  <div className="col-sm-12">
                    <select
                      className="form-control"
                      id="fileold_ru"
                      style={{ width: "100%" }}
                    ></select>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer justify-content-between">
              <button
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
              >
                Отмена
              </button>
              <button type="button" className="btn btn-primary" id="submit_ru">
                Вставить файл
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="modal-image3"
        style={{ display: "none" }}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Загрузка изображение ({lan})</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-12 col-sm-12">
                  <div className="card card-primary card-tabs">
                    <div className="card-header p-0 pt-1">
                      <ul
                        className="nav nav-tabs"
                        id="custom-tabs-one-tab"
                        role="tablist"
                      >
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            id="custom-tabs-one-home-tab3"
                            data-toggle="pill"
                            href="#custom-tabs-one-home3"
                            role="tab"
                            aria-controls="custom-tabs-one-home3"
                            aria-selected="true"
                          >
                            Загрузка Изображение
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="custom-tabs-one-profile-tab3"
                            data-toggle="pill"
                            href="#custom-tabs-one-profile3"
                            role="tab"
                            aria-controls="custom-tabs-one-profile3"
                            aria-selected="false"
                          >
                            Вставка Изображение
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="card-body">
                      <div
                        className="tab-content"
                        id="custom-tabs-one-tabContent"
                      >
                        <div
                          className="tab-pane fade active show"
                          id="custom-tabs-one-home3"
                          role="tabpanel"
                          aria-labelledby="custom-tabs-one-home-tab3"
                        >
                          <div className="row">
                            <div className="form-group col-md-4">
                              <label
                                htmlFor="file_text"
                                className="col-sm-12 col-form-label"
                              >
                                Текст
                              </label>
                              <div className="col-sm-12">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="image_text_ru"
                                />
                              </div>
                            </div>
                            <div className="form-group col-md-5">
                              <label
                                htmlFor="files"
                                className="col-sm-12 col-form-label"
                              >
                                Изображение
                              </label>
                              <div className="col-sm-12">
                                <input
                                  type="file"
                                  className="form-control"
                                  id="image_ru"
                                  accept="image/png, image/gif, image/jpeg"
                                  style={{ padding: 2 }}
                                />
                              </div>
                            </div>
                            <div className="form-group col-md-3">
                              <label
                                htmlFor="files"
                                className="col-sm-12 col-form-label"
                              >
                                Загрузка
                              </label>
                              <div className="col-sm-12">
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                  id="submit_img_ru"
                                >
                                  Загрузка в сервер
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="custom-tabs-one-profile3"
                          role="tabpanel"
                          aria-labelledby="custom-tabs-one-profile-tab3"
                        >
                          <div className="row">
                            <div className="form-group col-md-6">
                              <label className="col-sm-4 col-form-label">
                                Изображении
                              </label>
                              <div className="col-sm-12">
                                <select
                                  className="form-control"
                                  id="imageold_ru"
                                  multiple
                                  style={{
                                    width: "100%",
                                  }}
                                ></select>
                              </div>
                            </div>
                            <div className="form-group col-md-6">
                              <label className="col-sm-4 col-form-label">
                                Изображения
                              </label>
                              <div className="col-sm-12">
                                <img
                                  src="true"
                                  id="imageold_ru_img"
                                  style={{
                                    width: "100%",
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer justify-content-between">
              <button
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
              >
                Отмена
              </button>
              <button
                type="button"
                className="btn btn-primary"
                id="put_img_ru"
                disabled
              >
                Вставить Изображение
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileImg;
