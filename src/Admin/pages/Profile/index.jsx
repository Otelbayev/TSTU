import React, { useEffect } from "react";
import avatar from "../../assets/icons/avatar.png";
import Cookies from "js-cookie";

const Profile = () => {
  const userData = Cookies.get("_userDetails");

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
                <h1>Профиль</h1>
              </div>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3">
                <div className="card card-primary card-outline">
                  <div className="card-body box-profile">
                    <div className="text-center">
                      <img
                        className="profile-user-img img-fluid img-circle elevation-2"
                        src={avatar}
                        alt="User profile picture"
                      />
                    </div>
                    <h3 className="profile-username text-center">
                      {userData?.login}
                    </h3>
                    <p className="text-muted text-center">Модератор сайта</p>
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <div className="card">
                  <div className="card-body">
                    <div className="tab-content">
                      <div className="active tab-pane" id="settings">
                        <form
                          onSubmit={onHandleSubmit}
                          className="form-horizontal"
                        >
                          <div className="form-group row">
                            <label
                              htmlFor="name"
                              className="col-sm-2 col-form-label"
                            >
                              Имя
                            </label>
                            <div className="col-sm-10">
                              <input
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder="Имя"
                                defaultValue="Admin"
                              />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label
                              htmlFor="img_now"
                              className="col-sm-2 col-form-label"
                            >
                              Ваше изображение
                            </label>
                            <div className="col-sm-10" style={{ marginTop: 8 }}>
                              <img
                                height={40}
                                src={avatar}
                                alt="нет информации"
                              />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label
                              htmlFor="img"
                              className="col-sm-2 col-form-label"
                            >
                              Изменить изображение
                            </label>
                            <div className="col-sm-10" style={{ marginTop: 8 }}>
                              <input
                                type="file"
                                className="form-control"
                                id="img"
                                // name="img"
                                style={{ padding: 2 }}
                              />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label
                              htmlFor="inputEmail"
                              className="col-sm-2 col-form-label"
                            >
                              Email
                            </label>
                            <div className="col-sm-10">
                              <input
                                type="email"
                                className="form-control"
                                id="inputEmail"
                                // name="email"
                                placeholder="Email"
                                defaultValue={userData?.email}
                              />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label
                              htmlFor="password_now"
                              className="col-sm-2 col-form-label"
                            >
                              Старый пароль
                            </label>
                            <div className="col-sm-10">
                              <input
                                type="password"
                                className="form-control"
                                id="password_now"
                                // name="password_now"
                              />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label
                              htmlFor="password"
                              className="col-sm-2 col-form-label"
                            >
                              Новый пароль
                            </label>
                            <div className="col-sm-10">
                              <input
                                type="password"
                                className="form-control"
                                id="password"
                                // name="password"
                              />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label
                              htmlFor="password_confirmation"
                              className="col-sm-2 col-form-label"
                            >
                              Повторите пароль
                            </label>
                            <div className="col-sm-10">
                              <input
                                type="password"
                                className="form-control"
                                id="password_confirmation"
                                // name="password_confirmation"
                              />
                            </div>
                          </div>
                          <div className="form-group row">
                            <div className="offset-sm-2 col-sm-10">
                              <button type="submit" className="btn btn-primary">
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

export default Profile;
