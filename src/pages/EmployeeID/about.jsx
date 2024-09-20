import React from "react";

const About = ({ data, t }) => {
  return (
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
              __html: data?.biography_json,
              // ? data?.biography_json
              // : "<p class='no-data'>Ma'lumotlar yo'q</p>",
            }}
          />
          <div className="row">
            <div className="col-sm-6 py-1">
              <h5 className="d-inline text-primary">
                {t("employee.fio")}: {"  "}
              </h5>
              {data?.persons_?.firstName ||
                data?.persons_translation_?.firstName}{" "}
              {data?.persons_?.lastName || data?.persons_translation_?.lastName}{" "}
              {data?.persons_?.fathers_name ||
                data?.persons_translation_?.fathers_name}
            </div>
            {data?.birthday && (
              <div className="col-sm-6 py-1">
                <h5 className="d-inline text-primary">
                  {t("employee.birth")}: {"  "}
                </h5>
                {data?.birthday?.split("T")[0]}
              </div>
            )}
            {data?.degree && (
              <div className="col-sm-6 py-1">
                <h5 className="d-inline text-primary">
                  {t("employee.deg")}: {"  "}
                </h5>
                {data?.degree}
              </div>
            )}
            {data?.expericence_year && (
              <div className="col-sm-6 py-1">
                <h5 className="d-inline text-primary">
                  {t("employee.ex")}: {"  "}
                </h5>
                {data?.expericence_year}
              </div>
            )}
            {data?.phone_number1 && (
              <div className="col-sm-6 py-1">
                <h5 className="d-inline text-primary">
                  {t("employee.tel")}: {"  "}
                </h5>
                {data?.phone_number1}
              </div>
            )}
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
                <h5 className="d-inline text-primary">Scopus ID: {"  "}</h5>
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
  );
};

export default About;
