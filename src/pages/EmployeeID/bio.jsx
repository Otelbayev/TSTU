import { Card, Col, Progress, Row, Typography } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
const { Text } = Typography;

const Bio = ({ data }) => {
  const { t } = useTranslation();
  const Title = ({ children, first }) => (
    <Text strong style={{ fontSize: "22px" }}>
      {!first && <br />}
      {children}
      <br />
    </Text>
  );
  ("");
  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Card bordered={false}>
          <Title first>{t("employee.bio")}</Title>
          <p
            className="bio"
            dangerouslySetInnerHTML={{
              __html: data?.biography_json,
            }}
          />
          <Row>
            <Col xs={24} md={12}>
              <Text style={{ fontSize: "18px" }}>
                <strong>{t("employee.fio")}: </strong>
                {data?.persons_?.firstName ||
                  data?.persons_translation_?.firstName}{" "}
                {data?.persons_?.lastName ||
                  data?.persons_translation_?.lastName}{" "}
                {data?.persons_?.fathers_name ||
                  data?.persons_translation_?.fathers_name}
              </Text>
            </Col>
            {data?.birthday && (
              <Col xs={24} md={12}>
                <Text style={{ fontSize: "18px" }}>
                  <strong>{t("employee.birth")}: </strong>
                  {data?.birthday?.split("T")[0]}
                </Text>
              </Col>
            )}
            {data?.degree && (
              <Col xs={24} md={12}>
                <Text style={{ fontSize: "18px" }}>
                  <strong>{t("employee.deg")}: </strong>
                  {data?.degree} {data?.scientific_title}
                </Text>
              </Col>
            )}
            {data?.expericence_year && (
              <Col xs={24} md={12}>
                <Text style={{ fontSize: "18px" }}>
                  <strong>{t("employee.ex")}: </strong>
                  {data?.expericence_year}
                </Text>
              </Col>
            )}
            {data?.phone_number1 && (
              <Col xs={24} md={12}>
                <Text style={{ fontSize: "18px" }}>
                  <strong>{t("employee.tel")}: </strong>
                  {data?.phone_number1}
                </Text>
              </Col>
            )}
            {(data?.persons_?.email ||
              data?.persons_translation_?.persons_?.email) && (
              <Col xs={24} md={12}>
                <Text style={{ fontSize: "18px" }}>
                  <strong>Email:</strong>
                  {data?.persons_?.email ||
                    data?.persons_translation_?.persons_?.email}
                </Text>
              </Col>
            )}
            {data?.orchid && (
              <Col xs={24} md={12}>
                <Text style={{ fontSize: "18px" }}>
                  <strong>ORCID:</strong>
                  {data?.orchid}
                </Text>
              </Col>
            )}
            {data?.scopus_id && (
              <Col xs={24} md={12}>
                <Text style={{ fontSize: "18px" }}>
                  <strong>Scopus ID:</strong>

                  {data?.scopus_id}
                </Text>
              </Col>
            )}
            {data?.address && (
              <Row xs={24} md={12}>
                <Text style={{ fontSize: "18px" }}>
                  <strong>{t("employee.address")}: </strong>
                  {data?.address}
                </Text>
              </Row>
            )}
          </Row>
          <Title>{t("employee.lang")}</Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <span>{t("employee.uz")}</span>
              <Progress percent={data?.languages_uz} size={"small"} />
            </Col>
            <Col xs={24} md={12}>
              <span>{t("employee.en")}</span>
              <Progress percent={data?.languages_en} size={"small"} />
            </Col>
            <Col xs={24} md={12}>
              <span>{t("employee.ru")}</span>
              <Progress percent={data?.languages_ru} size={"small"} />
            </Col>
            {data?.languages_any_title && (
              <Col xs={24} md={12}>
                <span>{data?.languages_any_title}</span>
                <Progress percent={30} size={"small"} />
              </Col>
            )}
          </Row>
          <Title>{t("employee.ex")}</Title>
          <div
            dangerouslySetInnerHTML={{
              __html: data?.experience_json
                ? data?.experience_json
                : "<p class='no-data'>Ma'lumotlar yo'q</p>",
            }}
          />
        </Card>
      </Col>
      <Col span={24}>
        <Card bordered={false}>
          <Title>{t("employee.ilm")}</Title>
          <div
            className="col-12"
            dangerouslySetInnerHTML={{
              __html: data?.scientific_activity_json
                ? data?.scientific_activity_json
                : "<p class='no-data'>Ma'lumotlar yo'q</p>",
            }}
          />
          <Title>{t("employee.portfolio")}</Title>
          <div
            className="col-12"
            dangerouslySetInnerHTML={{
              __html: data?.portfolio_json
                ? data?.portfolio_json
                : "<p class='no-data'>Ma'lumotlar yo'q</p>",
            }}
          />
          <Title>Blog</Title>
          <div
            className="col-12"
            dangerouslySetInnerHTML={{
              __html: data?.blog_json
                ? data?.blog_json
                : "<p class='no-data'>Ma'lumotlar yo'q</p>",
            }}
          />
        </Card>
      </Col>
    </Row>
  );
};

export default Bio;
