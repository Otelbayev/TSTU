import React, { useEffect, useState } from "react";
import { Container } from "./style";
import { useParams } from "react-router-dom";
import { useLanguageContext } from "../../context/LanguageContext";
import img from "../../../public/logo.png";
import "./style.css";
import { useTranslation } from "react-i18next";

const EmployeeID = () => {
  const { id } = useParams();
  const { language, options, setLanguage } = useLanguageContext();
  const { t } = useTranslation();
  const [data, setData] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetch(
      language === "uz"
        ? `/api/persondata/sitegetbyidpersondata/${id}`
        : `/api/persondata/sitegetbyuzidpersondatatranslation/${id}?language_code=${language}`
    )
      .then((res) => res.json())
      .then((res) => setData(res));
  }, [language]);

  return (
    <Container>
      <div className="wrapper">
        <div className="sidebar">
          <div className="sidebar-text d-flex flex-column h-100 justify-content-center text-center">
            <img
              className="w-100 img-fluid mb-4"
              src={`${img.split("logo")[0]}api/${
                data?.persons_?.img_?.url ||
                data?.persons_translation_?.persons_?.img_?.url
              }`}
              alt="Image"
            />
            <h1 className="mt-2">
              {data?.persons_?.firstName ||
                data?.persons_translation_?.persons_?.firstName}{" "}
              {data?.persons_?.lastName ||
                data?.persons_translation_?.persons_?.lastName}{" "}
              {data?.persons_?.fathers_name ||
                data?.persons_translation_?.persons_?.fathers_name}
            </h1>
            <div className="mb-4">
              <h4 className="d-inline-block" />
              {data?.persons_?.employee_type_?.title ||
                data?.persons_?.employee_type_translation?.title}{" "}
              {",  "}
              {data?.degree}
            </div>
            <div className="d-flex justify-content-center mt-auto mb-3">
              <a className="mx-2" href="#">
                <i className="fab fa-twitter" />
              </a>
              <a className="mx-2" href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a className="mx-2" href="#">
                <i className="fab fa-linkedin-in" />
              </a>
              <a className="mx-2" href="#">
                <i className="fab fa-instagram" />
              </a>
              <a className="mx-2" href="#">
                <i className="fab fa-youtube" />
              </a>
            </div>
            <div className="d-flex align-items-end justify-content-between">
              {options
                .filter((e) => e.code !== language)
                ?.map((e, index) => (
                  <a
                    className={`btn btn-block ${index === 0 && "border-right"}`}
                    onClick={() => setLanguage(e.code)}
                  >
                    {e?.title}
                  </a>
                ))}
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
                <p>{data?.biography_json}</p>
                <div className="row">
                  <div className="col-sm-6 py-1">
                    <h5 className="d-inline text-primary">
                      {t("employee.fio")}:
                    </h5>
                    {data?.persons_?.firstName ||
                      data?.persons_translation_?.persons_?.firstName}{" "}
                    {data?.persons_?.lastName ||
                      data?.persons_translation_?.persons_?.lastName}{" "}
                    {data?.persons_?.fathers_name ||
                      data?.persons_translation_?.persons_?.fathers_name}
                  </div>
                  <div className="col-sm-6 py-1">
                    <h5 className="d-inline text-primary">
                      {t("employee.birth")}:
                    </h5>
                    {data?.birthday?.split("T")[0]}
                  </div>
                  <div className="col-sm-6 py-1">
                    <h5 className="d-inline text-primary">
                      {t("employee.deg")}:
                    </h5>
                    {data?.degree}
                  </div>
                  <div className="col-sm-6 py-1">
                    <h5 className="d-inline text-primary">
                      {t("employee.ex")}:
                    </h5>
                    1{data?.expericence_year}
                  </div>
                  <div className="col-sm-6 py-1">
                    <h5 className="d-inline text-primary">
                      {t("employee.tel")}:
                    </h5>
                    {data?.phone_number1}
                  </div>
                  <div className="col-sm-6 py-1">
                    <h5 className="d-inline text-primary">Email:</h5>
                    {data?.persons_?.email}
                  </div>
                  <div className="col-sm-6 py-1">
                    <h5 className="d-inline text-primary">ORCID:</h5>
                    {data?.orchid}
                  </div>
                  <div className="col-sm-6 py-1">
                    <h5 className="d-inline text-primary">Scopus ID:</h5>
                    {data?.scopus_id}
                  </div>
                  <div className="col-sm-12 py-1">
                    <h5 className="d-inline text-primary">
                      {t("employee.address")}:
                    </h5>
                    {data?.address}
                  </div>
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
                    <p className="mb-2">{t("employee.uz")}</p>
                    <p className="mb-2">{data?.languages_uz}%</p>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      aria-valuenow={data?.languages_uz}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">{t("employee.ru")}</p>
                    <p className="mb-2">{data?.languages_ru}%</p>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-warning"
                      role="progressbar"
                      aria-valuenow={data?.languages_ru}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">{t("employee.en")}</p>
                    <p className="mb-2">{data?.languages_en}%</p>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-danger"
                      role="progressbar"
                      aria-valuenow={data?.languages_en}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">{data?.languages_any_title}</p>
                    <p className="mb-2">{data?.languages_any}%</p>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-dark"
                      role="progressbar"
                      aria-valuenow={data?.languages_any}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
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
                <div className="border-left border-primary pt-2 pl-4 ml-2">
                  <div className="position-relative mb-4">
                    <i
                      className="fa fa-arrow-right text-primary position-absolute"
                      style={{ top: 3, left: "-24px" }}
                    />
                    <h5 className="mb-1">Web Designer</h5>
                    <p className="mb-2">
                      Soft Company | <small>2000 - 2050</small>
                    </p>
                    <p>
                      Tempor eos dolore amet tempor dolor tempor. Dolore ea
                      magna sit amet dolor eirmod. Eos ipsum est tempor dolor.
                      Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit
                      ipsum stet lorem diam
                    </p>
                  </div>
                  <div className="position-relative mb-4">
                    <i
                      className="fa fa-arrow-right text-primary position-absolute"
                      style={{ top: 3, left: "-24px" }}
                    />
                    <h5 className="mb-1">Web Designer</h5>
                    <p className="mb-2">
                      Soft Company | <small>2000 - 2050</small>
                    </p>
                    <p>
                      Tempor eos dolore amet tempor dolor tempor. Dolore ea
                      magna sit amet dolor eirmod. Eos ipsum est tempor dolor.
                      Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit
                      ipsum stet lorem diam
                    </p>
                  </div>
                  <div className="position-relative mb-4">
                    <i
                      className="fa fa-arrow-right text-primary position-absolute"
                      style={{ top: 3, left: "-24px" }}
                    />
                    <h5 className="mb-1">Web Designer</h5>
                    <p className="mb-2">
                      Soft Company | <small>2000 - 2050</small>
                    </p>
                    <p>
                      Tempor eos dolore amet tempor dolor tempor. Dolore ea
                      magna sit amet dolor eirmod. Eos ipsum est tempor dolor.
                      Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit
                      ipsum stet lorem diam
                    </p>
                  </div>
                </div>
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
              <div className="col-12">
                {/* <div className="row portfolio-container">
                  <div className="col-md-6 mb-4 portfolio-item first">
                    <div className="position-relative overflow-hidden mb-2">
                      <img
                        className="img-fluid w-100"
                        src="img/portfolio-1.jpg"
                        alt
                      />
                      <div className="portfolio-btn d-flex align-items-center justify-content-center">
                        <a href="img/portfolio-1.jpg" data-lightbox="portfolio">
                          <i className="fa fa-4x fa-plus text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4 portfolio-item second">
                    <div className="position-relative overflow-hidden mb-2">
                      <img
                        className="img-fluid w-100"
                        src="img/portfolio-2.jpg"
                        alt
                      />
                      <div className="portfolio-btn d-flex align-items-center justify-content-center">
                        <a href="img/portfolio-2.jpg" data-lightbox="portfolio">
                          <i className="fa fa-4x fa-plus text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4 portfolio-item first">
                    <div className="position-relative overflow-hidden mb-2">
                      <img
                        className="img-fluid w-100"
                        src="img/portfolio-3.jpg"
                        alt
                      />
                      <div className="portfolio-btn d-flex align-items-center justify-content-center">
                        <a href="img/portfolio-3.jpg" data-lightbox="portfolio">
                          <i className="fa fa-4x fa-plus text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4 portfolio-item second">
                    <div className="position-relative overflow-hidden mb-2">
                      <img
                        className="img-fluid w-100"
                        src="img/portfolio-4.jpg"
                        alt
                      />
                      <div className="portfolio-btn d-flex align-items-center justify-content-center">
                        <a href="img/portfolio-4.jpg" data-lightbox="portfolio">
                          <i className="fa fa-4x fa-plus text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div> */}
                <p>Ma'lumotlar yo'q</p>
              </div>
            </div>
          </div>

          <div className="container bg-white pt-5 pb-3">
            <div className="row px-3">
              <div className="col-12">
                <h2 className="title position-relative pb-2 mb-4">
                  {t("employee.portfolio")}
                </h2>
              </div>
              <div className="col-12">
                {/* <div className="row portfolio-container">
                  <div className="col-md-6 mb-4 portfolio-item first">
                    <div className="position-relative overflow-hidden mb-2">
                      <img
                        className="img-fluid w-100"
                        src="img/portfolio-1.jpg"
                        alt
                      />
                      <div className="portfolio-btn d-flex align-items-center justify-content-center">
                        <a href="img/portfolio-1.jpg" data-lightbox="portfolio">
                          <i className="fa fa-4x fa-plus text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4 portfolio-item second">
                    <div className="position-relative overflow-hidden mb-2">
                      <img
                        className="img-fluid w-100"
                        src="img/portfolio-2.jpg"
                        alt
                      />
                      <div className="portfolio-btn d-flex align-items-center justify-content-center">
                        <a href="img/portfolio-2.jpg" data-lightbox="portfolio">
                          <i className="fa fa-4x fa-plus text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4 portfolio-item first">
                    <div className="position-relative overflow-hidden mb-2">
                      <img
                        className="img-fluid w-100"
                        src="img/portfolio-3.jpg"
                        alt
                      />
                      <div className="portfolio-btn d-flex align-items-center justify-content-center">
                        <a href="img/portfolio-3.jpg" data-lightbox="portfolio">
                          <i className="fa fa-4x fa-plus text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4 portfolio-item second">
                    <div className="position-relative overflow-hidden mb-2">
                      <img
                        className="img-fluid w-100"
                        src="img/portfolio-4.jpg"
                        alt
                      />
                      <div className="portfolio-btn d-flex align-items-center justify-content-center">
                        <a href="img/portfolio-4.jpg" data-lightbox="portfolio">
                          <i className="fa fa-4x fa-plus text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div> */}
                <p>Ma'lumotlar yo'q</p>
              </div>
            </div>
          </div>

          <div className="container bg-white py-5">
            <div className="row px-3">
              <div className="col-12">
                <h2 className="title position-relative pb-2 mb-4">Blog</h2>
              </div>
              <div className="col-12">
                {/* <div className="owl-carousel testimonial-carousel">
                  <div className="text-left">
                    <i className="fa fa-3x fa-quote-left text-primary mb-4" />
                    <h4 className="text-body mb-4">
                      Dolor eirmod diam stet kasd sed. Aliqu rebum est eos.
                      Rebum elitr dolore et eos labore, stet justo sed est sed.
                      Diam sed sed dolor stet accusam amet eirmod eos, labore
                      diam clita
                    </h4>
                    <div className="d-flex align-items-center">
                      <img
                        className="img-fluid"
                        src="img/testimonial-1.jpg"
                        style={{ width: 60, height: 60 }}
                      />
                      <div className="pl-3">
                        <h5 className="text-primary m-0">Client Name</h5>
                        <i>Profession</i>
                      </div>
                    </div>
                  </div>
                  <div className="text-left">
                    <i className="fa fa-3x fa-quote-left text-primary mb-4" />
                    <h4 className="text-body mb-4">
                      Dolor eirmod diam stet kasd sed. Aliqu rebum est eos.
                      Rebum elitr dolore et eos labore, stet justo sed est sed.
                      Diam sed sed dolor stet accusam amet eirmod eos, labore
                      diam clita
                    </h4>
                    <div className="d-flex align-items-center">
                      <img
                        className="img-fluid"
                        src="img/testimonial-2.jpg"
                        style={{ width: 60, height: 60 }}
                      />
                      <div className="pl-3">
                        <h5 className="text-primary m-0">Client Name</h5>
                        <i>Profession</i>
                      </div>
                    </div>
                  </div>
                  <div className="text-left">
                    <i className="fa fa-3x fa-quote-left text-primary mb-4" />
                    <h4 className="text-body mb-4">
                      Dolor eirmod diam stet kasd sed. Aliqu rebum est eos.
                      Rebum elitr dolore et eos labore, stet justo sed est sed.
                      Diam sed sed dolor stet accusam amet eirmod eos, labore
                      diam clita
                    </h4>
                    <div className="d-flex align-items-center">
                      <img
                        className="img-fluid"
                        src="img/testimonial-3.jpg"
                        style={{ width: 60, height: 60 }}
                      />
                      <div className="pl-3">
                        <h5 className="text-primary m-0">Client Name</h5>
                        <i>Profession</i>
                      </div>
                    </div>
                  </div>
                </div> */}
                <p>Ma'lumotlar yo'q</p>
              </div>
            </div>
          </div>

          <div className="container bg-white py-5" id="contact">
            <div className="row px-3">
              <div className="col-12">
                <h2 className="title position-relative pb-2 mb-4">
                  {t("employee.appeal")}
                </h2>
              </div>
              <div className="col-12">
                <div className="contact-form">
                  <div id="success" />
                  <form
                    name="sentMessage"
                    id="contactForm"
                    noValidate="novalidate"
                  >
                    <div className="form-row">
                      <div className="control-group col-sm-6">
                        <input
                          type="text"
                          className="form-control p-4"
                          id="name"
                          placeholder="Your Name"
                          required="required"
                          data-validation-required-message="Please enter your name"
                        />
                        <p className="help-block text-danger" />
                      </div>
                      <div className="control-group col-sm-6">
                        <input
                          type="email"
                          className="form-control p-4"
                          id="email"
                          placeholder="Your Email"
                          required="required"
                          data-validation-required-message="Please enter your email"
                        />
                        <p className="help-block text-danger" />
                      </div>
                    </div>
                    <div className="control-group">
                      <input
                        type="text"
                        className="form-control p-4"
                        id="subject"
                        placeholder="Subject"
                        required="required"
                        data-validation-required-message="Please enter a subject"
                      />
                      <p className="help-block text-danger" />
                    </div>
                    <div className="control-group">
                      <textarea
                        className="form-control py-3 px-4"
                        rows={5}
                        id="message"
                        placeholder="Message"
                        required="required"
                        data-validation-required-message="Please enter your message"
                        defaultValue={""}
                      />
                      <p className="help-block text-danger" />
                    </div>
                    <div>
                      <button
                        className="btn btn-primary py-3 px-4"
                        type="submit"
                        id="sendMessageButton"
                      >
                        {t("employee.appeal")}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid px-0">
            <div className="container bg-dark text-light text-center py-5">
              <div className="d-flex justify-content-center mb-4">
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
              </div>
              <p class="m-0">
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
      {/* Back to Top */}
      <a href="#" className="back-to-top">
        <i className="fa fa-angle-double-up" />
      </a>
    </Container>
  );
};

export default EmployeeID;
