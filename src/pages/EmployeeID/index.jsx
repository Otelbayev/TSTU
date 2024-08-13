import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import "./style.css";
import { useTranslation } from "react-i18next";
import { Lang } from "../../components/Generics";
import noimg from "../../assets/images/no.jpg";
import axios from "axios";
import { message } from "antd";

const EmployeeID = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const [data, setData] = useState([]);
  const [captcha, setCaptcha] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getCaptcha = () => {
    fetch(`${import.meta.env.VITE_BASE_URL_API}/captcha/getcaptchanumbers`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_CAPCHA_TOKEN}`,
      },
    })
      .then((res) => res.json())
      .then((res) => setCaptcha(res));
  };

  useEffect(() => {
    getCaptcha();
  }, []);

  useEffect(() => {
    fetch(
      i18n.language === "uz"
        ? `${
            import.meta.env.VITE_BASE_URL_API
          }/persondata/sitegetbyidpersondata/${id}`
        : `${
            import.meta.env.VITE_BASE_URL_API
          }/persondata/sitegetbyuzidpersondatatranslation/${id}?language_code=${
            i18n.language
          }`
    )
      .then((res) => res.json())
      .then((res) => setData(res));
  }, [i18n.language]);

  const nameRef = useRef();
  const emailRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();
  const captchaRef = useRef();

  const onFormSubmit = async (e) => {
    e.preventDefault();
    try {
      message.loading({ key: "appeal", content: "Yuborilmoqda..." });
      const res = await axios.post(
        `${
          import.meta.env.VITE_BASE_URL_API
        }/appealtoemployee/createappealtoemployee/${id}`,
        {
          full_name: nameRef.current.value,
          email: emailRef.current.value,
          subject: subjectRef.current.value,
          message: messageRef.current.value,
          captcha_numbers_sum: Number(captchaRef.current.value),
        },
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_CAPCHA_TOKEN}`,
          },
        }
      );

      if (res.status === 200) {
        message.success({ key: "appeal", content: "Muvofaqiyatli yuborlidi!" });
        nameRef.current.value = "";
        emailRef.current.value = "";
        captchaRef.current.value = "";
        subjectRef.current.value = "";
        messageRef.current.value = "";
        getCaptcha();
      } else {
        throw new Error();
      }
    } catch (err) {
      message.error({ key: "appeal", content: "Xatolik!" });
      captchaRef.current.value = "";
      getCaptcha();
    }
  };

  return (
    <div className="body">
      <div className="wrapper">
        <div className="sidebar">
          <div className="sidebar-text d-flex flex-column h-100 justify-content-center text-center">
            <img
              className="w-100 img-fluid mb-4"
              src={
                data?.persons_?.img_?.url ||
                data?.persons_translation_?.persons_?.img_?.url
                  ? `${import.meta.env.VITE_BASE_URL_IMG}${
                      data?.persons_?.img_?.url ||
                      data?.persons_translation_?.persons_?.img_?.url
                    }`
                  : noimg
              }
              alt="Image"
            />
            <h2 className="mt-2">
              {" "}
              {data?.persons_?.firstName ||
                data?.persons_translation_?.firstName}{" "}
              {data?.persons_?.lastName || data?.persons_translation_?.lastName}{" "}
              {data?.persons_?.fathers_name ||
                data?.persons_translation_?.fathers_name}
            </h2>
            <div className="mb-4" style={{ height: 22 }}>
              <div>
                {data?.persons_?.employee_type_?.title ||
                  data?.persons_?.employee_type_translation?.title}{" "}
                {data?.degree}
              </div>
            </div>
            <div className="d-flex justify-content-center mt-auto mb-3">
              {/* <a className="mx-2" href title="Telegram">
                <i className="fab fa-telegram" />
              </a>
              <a className="mx-2" href title="Facebook">
                <i className="fab fa-facebook-f" />
              </a>
              <a className="mx-2" href title="WEB SITE">
                <i className="fab fa-chrome" />
              </a>
              <a className="mx-2" href>
                <i className="fab fa-instagram" title="Instagram" />
              </a>
              <a className="mx-2" href>
                <i className="fab fa-youtube" title="Youtube" />
              </a> */}
            </div>
            <div className="d-flex align-items-end justify-content-between">
              <Lang mode="light" width={"100%"} />
            </div>
          </div>
          <div className="sidebar-icon d-flex flex-column h-100 justify-content-center text-right">
            <i className="fas fa-2x fa-angle-double-right text-primary" />
          </div>
        </div>
        <div className="content">
          {/* About Start */}
          <div className="container bg-white py-5">
            <div className="row px-3">
              <div className="col-12">
                <h2 className="title position-relative pb-2 mb-4">
                  {t("employee.bio")}
                </h2>
              </div>
              <div className="col-12">
                <p
                  className="bio"
                  dangerouslySetInnerHTML={{
                    __html: data?.biography_json
                      ? data?.biography_json
                      : "Ma'lumotlar yo'q",
                  }}
                />
                <div className="row">
                  <div className="col-sm-6 py-1">
                    <h5 className="d-inline text-primary">
                      {t("employee.fio")}: {"  "}
                    </h5>
                    {data?.persons_?.firstName ||
                      data?.persons_translation_?.persons_?.firstName}{" "}
                    {data?.persons_?.lastName ||
                      data?.persons_translation_?.persons_?.lastName}{" "}
                    {data?.persons_?.fathers_name ||
                      data?.persons_translation_?.persons_?.fathers_name}
                  </div>
                  {data?.birthday && (
                    <div className="col-sm-6 py-1">
                      <h5 className="d-inline text-primary">
                        {t("employee.birth")}: {"  "}
                      </h5>
                      {data?.birthday?.split("T")[0]}
                    </div>
                  )}
                  <div className="col-sm-6 py-1">
                    <h5 className="d-inline text-primary">
                      {t("employee.deg")}: {"  "}
                    </h5>
                    {data?.degree}
                  </div>
                  <div className="col-sm-6 py-1">
                    <h5 className="d-inline text-primary">
                      {t("employee.ex")}: {"  "}
                    </h5>
                    1{data?.expericence_year}
                  </div>
                  <div className="col-sm-6 py-1">
                    <h5 className="d-inline text-primary">
                      {t("employee.tel")}: {"  "}
                    </h5>
                    {data?.phone_number1}
                  </div>
                  {data?.persons_?.email && (
                    <div className="col-sm-6 py-1">
                      <h5 className="d-inline text-primary">Email: {"  "}</h5>
                      {data?.persons_?.email}
                    </div>
                  )}
                  {data?.orchid && (
                    <div className="col-sm-6 py-1">
                      <h5 className="d-inline text-primary">ORCID: {"  "}</h5>
                      {data?.orchid}
                    </div>
                  )}
                  {data?.scopus_id && (
                    <div className="col-sm-6 py-1">
                      <h5 className="d-inline text-primary">
                        Scopus ID: {"  "}
                      </h5>
                      {data?.scopus_id}
                    </div>
                  )}
                  {data?.address && (
                    <div className="col-sm-12 py-1">
                      <h5 className="d-inline text-primary">
                        {t("employee.address")}:
                      </h5>
                      {data?.address}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* About End */}
          {/* Skills Start */}
          <div className="container bg-white py-5">
            <div className="row px-3">
              <div className="col-12">
                <h2 className="title position-relative pb-2 mb-4">
                  {t("employee.lang")}
                </h2>
              </div>
              <div className="col-sm-6">
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <p className="mb-2 langu">{t("employee.uz")}</p>
                    <p className="mb-2 langu">{data?.languages_uz}%</p>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={{ width: `${data?.languages_uz}%` }}
                      aria-valuenow={data?.languages_uz}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <p className="mb-2 langu">{t("employee.ru")}</p>
                    <p className="mb-2 langu">{data?.languages_ru}%</p>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-warning"
                      role="progressbar"
                      aria-valuenow={data?.languages_ru}
                      style={{ width: `${data?.languages_ru}%` }}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <p className="mb-2 langu">{t("employee.en")}</p>
                    <p className="mb-2 langu">{data?.languages_en}%</p>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-danger"
                      role="progressbar"
                      aria-valuenow={data?.languages_en}
                      style={{ width: `${data?.languages_en}%` }}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                {data?.languages_any && (
                  <div className="skill mb-4">
                    <div className="d-flex justify-content-between">
                      <p className="mb-2 langu">{data?.languages_any_title}</p>
                      <p className="mb-2 langu">{data?.languages_any}%</p>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar bg-dark"
                        role="progressbar"
                        aria-valuenow={data?.languages_any}
                        style={{ width: `${data?.languages_any}%` }}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* Skills End */}
          {/* Education Start */}
          <div className="container bg-white py-5">
            <div className="row px-3">
              <div className="col-12">
                <h2 className="title position-relative pb-2 mb-4">
                  {t("employee.ex")}
                </h2>
              </div>
              <div className="col-12">
                <div
                  className="border-left border-primary pt-2 pl-4 ml-2"
                  dangerouslySetInnerHTML={{
                    __html: data?.experience_json
                      ? data?.experience_json
                      : "<p>Ma'lumotlar yo'q</p>",
                  }}
                />
              </div>
            </div>
          </div>
          {/* Education End */}
        </div>
        <div className="content">
          <div className="container bg-white pt-5 pb-3">
            <div className="row px-3">
              <div className="col-12">
                <h2 className="title position-relative pb-2 mb-4">
                  {t("employee.ilm")}
                </h2>
              </div>
              <div
                className="col-12"
                dangerouslySetInnerHTML={{
                  __html: data?.scientific_activity_json
                    ? data?.scientific_activity_json
                    : "<p>Ma'lumotlar yo'q</p>",
                }}
              />
            </div>
          </div>

          <div className="container bg-white pt-5 pb-3">
            <div className="row px-3">
              <div className="col-12">
                <h2 className="title position-relative pb-2 mb-4">
                  {t("employee.portfolio")}
                </h2>
              </div>
              <div
                className="col-12"
                dangerouslySetInnerHTML={{
                  __html: data?.portfolio_json
                    ? data?.portfolio_json
                    : "<p>Ma'lumotlar yo'q</p>",
                }}
              />
            </div>
          </div>

          <div className="container bg-white py-5">
            <div className="row px-3">
              <div className="col-12">
                <h2 className="title position-relative pb-2 mb-4">Blog</h2>
              </div>
              <div
                className="col-12"
                dangerouslySetInnerHTML={{
                  __html: data?.blog_json
                    ? data?.blog_json
                    : "<p>Ma'lumotlar yo'q</p>",
                }}
              />
            </div>
          </div>
          {/* Form */}
          <div className="container bg-white py-5" id="contact">
            <div className="row px-3">
              <div className="col-12">
                <h2 className="title position-relative pb-2 mb-4">
                  Murojaat yuboring
                </h2>
              </div>
              <div className="col-12">
                <div className="contact-form">
                  <div id="success" />
                  <form onSubmit={onFormSubmit}>
                    <input
                      type="hidden"
                      name="_token"
                      defaultValue="hQdMwPQM32APAUMopE0csHDDsU5KzEqVeNEnkBrQ"
                    />
                    <div className="form-row">
                      <div className="control-group col-sm-6">
                        <input
                          type="text"
                          className="form-control p-4"
                          id="name"
                          name="name"
                          placeholder="Your Name"
                          required="required"
                          data-validation-required-message="Please enter your name"
                          ref={nameRef}
                        />
                        <p className="help-block text-danger" />
                      </div>
                      <div className="control-group col-sm-6">
                        <input
                          type="email"
                          className="form-control p-4"
                          id="email"
                          name="email"
                          placeholder="Your Email"
                          required="required"
                          data-validation-required-message="Please enter your email"
                          ref={emailRef}
                        />
                        <p className="help-block text-danger" />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="control-group col-sm-6">
                        <input
                          type="text"
                          className="form-control p-4"
                          id="subject"
                          name="subject"
                          placeholder="Subject"
                          required="required"
                          data-validation-required-message="Please enter a subject"
                          ref={subjectRef}
                        />
                        <p className="help-block text-danger" />
                      </div>
                      <div className="control-group col-sm-6">
                        <input
                          type="text"
                          className="form-control p-4"
                          id="cp"
                          name="cp"
                          placeholder={`${captcha.num1} + ${captcha.num2}`}
                          required="required"
                          data-validation-required-message="Please enter answer"
                          ref={captchaRef}
                        />
                        <p className="help-block text-danger" />
                      </div>
                    </div>
                    <div className="control-group">
                      <textarea
                        className="form-control py-3 px-4"
                        rows={5}
                        id="message"
                        name="message"
                        placeholder="Message"
                        required="required"
                        data-validation-required-message="Please enter your message"
                        defaultValue={""}
                        ref={messageRef}
                      />
                      <p className="help-block text-danger" />
                    </div>
                    <div>
                      <button
                        className="btn btn-primary py-3 px-4"
                        type="submit"
                        id="sendMessageButton"
                      >
                        Murojaat yuboring
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid px-0">
            <div className="container bg-dark text-light text-center py-5">
              {/* <div className="d-flex justify-content-center mb-4">
                <a className="btn btn-outline-primary btn-square mr-2" href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-outline-primary btn-square mr-2" href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-outline-primary btn-square mr-2" href="#">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a className="btn btn-outline-primary btn-square" href="#">
                  <i className="fab fa-instagram" />
                </a>
              </div> */}
              <p className="m-0">
                Live Resume{" "}
                <a
                  href="https://tstu.uz/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TSTU.UZ
                </a>
                . All Rights Reserved 2024
              </p>
            </div>
          </div>
          {/* Footer End */}
        </div>
      </div>
      <a href="#" className="back-to-top">
        <i className="fa fa-angle-double-up" />
      </a>
    </div>
  );
};

export default EmployeeID;
