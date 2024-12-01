import { Col, Row } from "antd";
import React, { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import { useTeachersContext } from "../../context/TeachersContext";
import { useBreadcrumbContext } from "../../context/BreadcrumbContext";
import { FcHome } from "react-icons/fc";
import User from "./user";
import noimg from "../../assets/images/no.jpg";
import { useScore } from "../../hooks/useScore";
import Bio from "./bio";

const Employee = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const [data, setData] = useState([]);
  const { teachers } = useTeachersContext();
  const { breadcrumb } = useBreadcrumbContext();

  const cachedData = useMemo(() => {
    if (i18n.language === "uz" && teachers?.length) {
      return teachers.find((teacher) => teacher.id === parseInt(id));
    } else if (i18n.language !== "uz" && teachers?.length) {
      return teachers.find(
        (teacher) => teacher.persons_data_id === parseInt(id)
      );
    }
  });

  const getData = () => {
    if (cachedData) {
      setData(cachedData);
      return;
    }
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
  };

  useEffect(() => {
    getData();
  }, [i18n.language]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const items = useMemo(() => {
    return [
      {
        title: (
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <FcHome />
            {t("footer.about.home")}
          </Link>
        ),
      },
      ...breadcrumb.map((e) => ({
        title: <Link to={e?.path}>{e?.name}</Link>,
      })),
    ];
  }, [breadcrumb]);

  return (
    <div className="root-container" style={{ padding: "20px" }}>
      <div className="root-wrapper">
        <Row gutter={[16, 16]}>
          <Col xs={24} md={8}>
            <User
              img={
                data?.persons_?.img_?.url ||
                data?.persons_translation_?.persons_?.img_?.url
                  ? `${import.meta.env.VITE_BASE_URL_IMG}${
                      data?.persons_?.img_?.url ||
                      data?.persons_translation_?.persons_?.img_?.url
                    }`
                  : noimg
              }
              fio={`${
                data?.persons_?.firstName ||
                data?.persons_translation_?.firstName
              }
                ${
                  data?.persons_?.lastName ||
                  data?.persons_translation_?.lastName
                }
                ${
                  data?.persons_?.fathers_name ||
                  data?.persons_translation_?.fathers_name
                }`}
              degree={`${
                data?.persons_?.employee_type_?.title ||
                data?.persons_translation_?.employee_type_translation_?.title
              }
                  ${data?.degree}
                  ${data?.scientific_title}`}
              score={
                data?.document110Score > 0
                  ? `${useScore(data.document110Score)} / ${
                      data?.document110Score
                    } ball`
                  : ""
              }
            />
          </Col>
          <Col xs={24} md={16}>
            <Bio data={data} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Employee;
