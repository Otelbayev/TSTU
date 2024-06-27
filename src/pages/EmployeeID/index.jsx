import React, { useEffect, useState } from "react";
import { Container } from "./style";
import { useParams } from "react-router-dom";
import { useLanguageContext } from "../../context/LanguageContext";
import img from "../../../public/logo.png";

const EmployeeID = () => {
  const { id } = useParams();
  const { language } = useLanguageContext();

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      language === "uz"
        ? `/api/persondata/sitegetbyidpersondata/${id}`
        : `/api/persondata/sitegetbyuzidpersondatatranslation/${id}?language_code=${language}`
    )
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <Container>
      <div className="root-container">
        <div className="root-wrapper">
          <div className="employee">
            <div className="employee__first-item sidebar">
              <div className="sidebar-text d-flex flex-column justify-content-between h-100 text-center">
                <img
                  className="w-100 img-fluid mb-4"
                  loading="lazy"
                  src={
                    data?.persons_?.img_?.url
                      ? ` ${img.split("/logo")[0]}api${
                          data?.persons_?.img_?.url
                        }`
                      : img
                  }
                  alt="Image"
                />
                <h1 className="mt-1">
                  {data?.persons_?.firstName} {data?.persons_?.lastName}{" "}
                  {data?.persons_?.fathers_name}
                </h1>
                <div className="mb-4">
                  <div>
                    {data?.persons_?.employee_type_?.title ||
                      data?.persons_?.employee_type_translation?.title}
                    {", "}
                    {data?.degree}
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <a className="mx-2" href title="Telegram">
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
                  </a>
                </div>
                <div className="d-flex align-items-end justify-content-between">
                  <a className="btn btn-block border-right">На русском</a>
                  <a className="btn btn-block btn-scroll">In English</a>
                </div>
              </div>
            </div>
            <div className="employee__second-item">
              <div className="content">
                <div className="container bg-white py-5">
                  <div className="row px-3">
                    <div className="col-12">
                      <h2 className="title position-relative pb-2 mb-4">
                        Biografiya
                      </h2>
                    </div>
                    <div className="col-12">
                      <p>{data?.persons_?.biography_json}</p>
                      <div className="row">
                        <div className="col-sm-6 py-1">
                          <h5 className="d-inline text-primary">F.I.O.:</h5>{" "}
                          {data?.persons_?.firstName} {data?.persons_?.lastName}{" "}
                          {data?.persons_?.fathers_name}
                        </div>
                        <div className="col-sm-6 py-1">
                          <h5 className="d-inline text-primary">
                            Tavallud kuni:
                          </h5>{" "}
                          {data?.birthday
                            ?.split("T")[0]
                            ?.split("-")
                            ?.reverse()
                            ?.join(".")}
                        </div>
                        <div className="col-sm-6 py-1">
                          <h5 className="d-inline text-primary">Darajasi:</h5>{" "}
                          {data?.degree}
                        </div>
                        <div className="col-sm-6 py-1">
                          <h5 className="d-inline text-primary">Tajriba:</h5>{" "}
                          {data?.experience_year}
                        </div>
                        <div className="col-sm-6 py-1">
                          <h5 className="d-inline text-primary">Telefon:</h5>{" "}
                          {data?.phone_number1}
                        </div>
                        <div className="col-sm-6 py-1">
                          <h5 className="d-inline text-primary">Email:</h5>{" "}
                          {data?.persons_?.email}
                        </div>
                        <div className="col-sm-6 py-1">
                          <h5 className="d-inline text-primary">ORCID:</h5>{" "}
                          {data?.orchid}
                        </div>
                        <div className="col-sm-6 py-1">
                          <h5 className="d-inline text-primary">Scopus ID:</h5>{" "}
                          {data?.scopus_id}
                        </div>
                        <div className="col-sm-12 py-1">
                          <h5 className="d-inline text-primary">Manzil:</h5>{" "}
                          {data?.address}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="container bg-white py-5"
                  style={{ paddingTop: "0rem !important" }}
                >
                  <div className="row px-3">
                    <div className="col-12">
                      <h2 className="title position-relative pb-2 mb-4">
                        Tillar
                      </h2>
                    </div>
                    <div className="col-sm-6">
                      <div className="skill mb-4">
                        <div className="d-flex justify-content-between">
                          <p className="mb-2">O'zbek tili</p>
                          <p className="mb-2">{data?.languages_uz}%</p>
                        </div>
                        <div className="progress">
                          <div
                            className="progress-bar bg-primary"
                            role="progressbar"
                            aria-valuenow={data?.languages_uz}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{ width: `${data?.languages_uz}%` }}
                          />
                        </div>
                      </div>
                      <div className="skill mb-4">
                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Rus tili</p>
                          <p className="mb-2">{data?.languages_ru}%</p>
                        </div>
                        <div className="progress">
                          <div
                            className="progress-bar bg-warning"
                            role="progressbar"
                            aria-valuenow={data?.languages_ru}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{ width: `${data?.languages_ru}%` }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="skill mb-4">
                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Ingliz tili</p>
                          <p className="mb-2">{data?.languages_en}%</p>
                        </div>
                        <div className="progress">
                          <div
                            className="progress-bar bg-danger"
                            role="progressbar"
                            aria-valuenow={data?.languages_en}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{ width: `${data?.languages_en}%` }}
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
                            style={{ width: `${data?.languages_any}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="container bg-white py-5"
                  style={{ paddingTop: "0rem !important" }}
                >
                  <div className="row px-3">
                    <div className="col-12">
                      <h2 className="title position-relative pb-2 mb-4">
                        Tajriba
                      </h2>
                    </div>
                    <div className="col-12">
                      <div className="border-left border-primary pt-2 pl-4 ml-2">
                        <div className="position-relative mb-4">
                          <i
                            className="fa fa-arrow-right text-primary position-absolute"
                            style={{ top: 3, left: "-24px" }}
                          />
                          <h5 className="mb-1">Talaba</h5>
                          {/* <p class="mb-2">Soft Company | <small>2000 - 2050</small></p> */}
                          <p className="mb-2">
                            <small>2000 - 2004</small>
                          </p>
                          <p>Toshkent temir yoʻl muhandislari instituti</p>
                        </div>
                        <div className="position-relative mb-4">
                          <i
                            className="fa fa-arrow-right text-primary position-absolute"
                            style={{ top: 3, left: "-24px" }}
                          />
                          <h5 className="mb-1">Мagistratura talabasi</h5>
                          {/* <p class="mb-2">Soft Company | <small>2000 - 2050</small></p> */}
                          <p className="mb-2">
                            <small>2004 - 2006</small>
                          </p>
                          <p>Toshkent temir yoʻl muhandislari instituti</p>
                        </div>
                        <div className="position-relative mb-4">
                          <i
                            className="fa fa-arrow-right text-primary position-absolute"
                            style={{ top: 3, left: "-24px" }}
                          />
                          <h5 className="mb-1">Stajyor-tadqiqotchi</h5>
                          {/* <p class="mb-2">Soft Company | <small>2000 - 2050</small></p> */}
                          <p className="mb-2">
                            <small>2006 - 2008</small>
                          </p>
                          <p>
                            Toshkent temir yoʻl muhandislari instituti
                            iqtisodiyot va menejment kafedrasi
                          </p>
                        </div>
                        <div className="position-relative mb-4">
                          <i
                            className="fa fa-arrow-right text-primary position-absolute"
                            style={{ top: 3, left: "-24px" }}
                          />
                          <h5 className="mb-1">Aspirant</h5>
                          {/* <p class="mb-2">Soft Company | <small>2000 - 2050</small></p> */}
                          <p className="mb-2">
                            <small>2008 - 2011</small>
                          </p>
                          <p>Peterburg davlat temir yoʻl instituti</p>
                        </div>
                        <div className="position-relative mb-4">
                          <i
                            className="fa fa-arrow-right text-primary position-absolute"
                            style={{ top: 3, left: "-24px" }}
                          />
                          <h5 className="mb-1">Assistent</h5>
                          {/* <p class="mb-2">Soft Company | <small>2000 - 2050</small></p> */}
                          <p className="mb-2">
                            <small>2011 - 2012</small>
                          </p>
                          <p>
                            Toshkent temir yoʻl muhandislari instituti
                            iqtisodiyot va menejment kafedrasi
                          </p>
                        </div>
                        <div className="position-relative mb-4">
                          <i
                            className="fa fa-arrow-right text-primary position-absolute"
                            style={{ top: 3, left: "-24px" }}
                          />
                          <h5 className="mb-1">Kafedra mudiri</h5>
                          <p className="mb-2">
                            <small>2012 - 2016</small>
                          </p>
                          <p>
                            Toshkent temir yoʻl muhandislari instituti
                            iqtisodiyot va menejment kafedrasi
                          </p>
                        </div>
                        <div className="position-relative mb-4">
                          <i
                            className="fa fa-arrow-right text-primary position-absolute"
                            style={{ top: 3, left: "-24px" }}
                          />
                          <h5 className="mb-1">
                            Akademik litsey va kasb-hunar kollejlari bilan
                            ishlash boʻyicha prorektor
                          </h5>
                          <p className="mb-2">
                            <small>2016 - 2018</small>
                          </p>
                          <p>Toshkent temir yoʻl muhandislari instituti</p>
                        </div>
                        <div className="position-relative mb-4">
                          <i
                            className="fa fa-arrow-right text-primary position-absolute"
                            style={{ top: 3, left: "-24px" }}
                          />
                          <h5 className="mb-1">
                            Oʻquv ishlari boʻyicha prorektor
                          </h5>
                          <p className="mb-2">
                            <small>2018 - 2020</small>
                          </p>
                          <p>Toshkent temir yoʻl muhandislari instituti</p>
                        </div>
                        <div className="position-relative mb-4">
                          <i
                            className="fa fa-arrow-right text-primary position-absolute"
                            style={{ top: 3, left: "-24px" }}
                          />
                          <h5 className="mb-1">
                            Oʻquv ishlari boʻyicha prorektor
                          </h5>
                          <p className="mb-2">
                            <small>2020 - </small>
                          </p>
                          <p>Toshkent davlat transport universiteti</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="container bg-white pt-5 pb-3">
                  <div className="row px-3">
                    <div className="col-12">
                      <h2 className="title position-relative pb-2 mb-4">
                        ILMIY FAOLIYAT
                      </h2>
                      <p>Ma'lumotlar yo'q</p>
                    </div>
                  </div>
                </div>
                <div className="container bg-white pt-5 pb-3">
                  <div className="row px-3">
                    <div className="col-12">
                      <h2 className="title position-relative pb-2 mb-4">
                        Portfolio
                      </h2>
                    </div>
                    <div className="col-12">
                      <div
                        className="row portfolio-container"
                        style={{ position: "relative", height: "241.125px" }}
                      >
                        <div
                          className="col-md-6 mb-4 portfolio-item"
                          style={{ position: "absolute", left: 0, top: 0 }}
                        >
                          <div className="position-relative overflow-hidden mb-2">
                            <img
                              className="img-fluid w-100"
                              loading="lazy"
                              src="https://tstu.uz/storage/app/public/images/2024-02-09/qUtGrDoi7rqlU6YiMFWD629ryJMQe3yBjGwufTca.jpeg"
                              alt
                            />
                            <div className="portfolio-btn d-flex align-items-center justify-content-center">
                              <a
                                href="https://tstu.uz/storage/app/public/images/2024-02-09/qUtGrDoi7rqlU6YiMFWD629ryJMQe3yBjGwufTca.jpeg"
                                data-lightbox="portfolio"
                              >
                                <i className="fa fa-2x text-white">test2</i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container bg-white py-5">
                  <div className="row px-3">
                    <div className="col-12">
                      <h2 className="title position-relative pb-2 mb-4">
                        Blog
                      </h2>
                    </div>
                    {/* <div className="col-12">
                      <div className="owl-carousel testimonial-carousel owl-loaded owl-drag">
                        <div className="owl-stage-outer">
                          <div
                            className="owl-stage"
                            style={{
                              transform: "translate3d(-1316px, 0px, 0px)",
                              transition: "all 0s ease 0s",
                              width: 3290,
                            }}
                          >
                            <div
                              className="owl-item cloned"
                              style={{ width: 658 }}
                            >
                              <div className="text-left">
                                <i className="fa fa-3x fa-quote-left text-primary mb-4" />
                                <h4 className="text-body mb-4">test4</h4>
                                <div className="d-flex align-items-center">
                                  <img
                                    className="img-fluid"
                                    loading="lazy"
                                    src="https://tstu.uz/storage/app/public/images/2022-12-30/w8SbeaS6LOkjXOUoytDiL7I6ftpRaIoevFsZolHr.jpg"
                                    style={{ width: 60, height: 60 }}
                                  />
                                  <div className="pl-3">
                                    <h5 className="text-primary m-0">test4</h5>
                                    <i>Gulamov Abdulaziz Abdullayevich</i>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="owl-item cloned"
                              style={{ width: 658 }}
                            >
                              <div className="text-left">
                                <i className="fa fa-3x fa-quote-left text-primary mb-4" />
                                <h4 className="text-body mb-4">test4</h4>
                                <div className="d-flex align-items-center">
                                  <img
                                    className="img-fluid"
                                    loading="lazy"
                                    src="https://tstu.uz/storage/app/public/images/2022-12-30/w8SbeaS6LOkjXOUoytDiL7I6ftpRaIoevFsZolHr.jpg"
                                    style={{ width: 60, height: 60 }}
                                  />
                                  <div className="pl-3">
                                    <h5 className="text-primary m-0">test4</h5>
                                    <i>Gulamov Abdulaziz Abdullayevich</i>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="owl-item active"
                              style={{ width: 658 }}
                            >
                              <div className="text-left">
                                <i className="fa fa-3x fa-quote-left text-primary mb-4" />
                                <h4 className="text-body mb-4">test4</h4>
                                <div className="d-flex align-items-center">
                                  <img
                                    className="img-fluid"
                                    loading="lazy"
                                    src="https://tstu.uz/storage/app/public/images/2022-12-30/w8SbeaS6LOkjXOUoytDiL7I6ftpRaIoevFsZolHr.jpg"
                                    style={{ width: 60, height: 60 }}
                                  />
                                  <div className="pl-3">
                                    <h5 className="text-primary m-0">test4</h5>
                                    <i>Gulamov Abdulaziz Abdullayevich</i>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="owl-item cloned"
                              style={{ width: 658 }}
                            >
                              <div className="text-left">
                                <i className="fa fa-3x fa-quote-left text-primary mb-4" />
                                <h4 className="text-body mb-4">test4</h4>
                                <div className="d-flex align-items-center">
                                  <img
                                    className="img-fluid"
                                    loading="lazy"
                                    src="https://tstu.uz/storage/app/public/images/2022-12-30/w8SbeaS6LOkjXOUoytDiL7I6ftpRaIoevFsZolHr.jpg"
                                    style={{ width: 60, height: 60 }}
                                  />
                                  <div className="pl-3">
                                    <h5 className="text-primary m-0">test4</h5>
                                    <i>Gulamov Abdulaziz Abdullayevich</i>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="owl-item cloned"
                              style={{ width: 658 }}
                            >
                              <div className="text-left">
                                <i className="fa fa-3x fa-quote-left text-primary mb-4" />
                                <h4 className="text-body mb-4">test4</h4>
                                <div className="d-flex align-items-center">
                                  <img
                                    className="img-fluid"
                                    loading="lazy"
                                    src="https://tstu.uz/storage/app/public/images/2022-12-30/w8SbeaS6LOkjXOUoytDiL7I6ftpRaIoevFsZolHr.jpg"
                                    style={{ width: 60, height: 60 }}
                                  />
                                  <div className="pl-3">
                                    <h5 className="text-primary m-0">test4</h5>
                                    <i>Gulamov Abdulaziz Abdullayevich</i>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="owl-nav disabled">
                          <div className="owl-prev">prev</div>
                          <div className="owl-next">next</div>
                        </div>
                        <div className="owl-dots disabled">
                          <div className="owl-dot active">
                            <span />
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
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
                        <form>
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
                              />
                              <input
                                type="hidden"
                                id="teacher_id"
                                name="teacher_id"
                                required="required"
                                defaultValue={23}
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
                              />
                              <p className="help-block text-danger" />
                            </div>
                            <div className="control-group col-sm-6">
                              <input
                                type="text"
                                className="form-control p-4"
                                id="cp"
                                name="cp"
                                placeholder="3 + 4 = ?"
                                required="required"
                                data-validation-required-message="Please enter answer"
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
                <div className="container-fluid bg-white pt-5 px-0">
                  <div className="container bg-dark text-light text-center py-5">
                    <div className="d-flex justify-content-center mb-4">
                      <a
                        className="btn btn-outline-primary btn-square mr-2"
                        href="#"
                      >
                        <i className="fab fa-telegram" />
                      </a>
                      <a
                        className="btn btn-outline-primary btn-square mr-2"
                        href="#"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a
                        className="btn btn-outline-primary btn-square mr-2"
                        href="#"
                      >
                        <i className="fab fa-chrome" />
                      </a>
                      <a
                        className="btn btn-outline-primary btn-square"
                        href="#"
                      >
                        <i className="fab fa-instagram" />
                      </a>
                      <a
                        className="btn btn-outline-primary btn-square"
                        href="#"
                      >
                        <i className="fab fa-youtube" />
                      </a>
                    </div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default EmployeeID;
