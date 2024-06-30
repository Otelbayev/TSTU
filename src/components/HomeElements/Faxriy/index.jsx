import React, { useEffect, useState } from "react";
import { Title } from "../../Generics";
import { Container } from "./style";
import { useTranslation } from "react-i18next";
import { useLanguageContext } from "../../../context/LanguageContext";

const Faxriy = () => {
  const { t } = useTranslation();
  const { language } = useLanguageContext();

  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      language === "uz"
        ? `/api/persondata/sitegetbyidpersondata/1`
        : `/api/persondata/sitegetbyuzidpersondatatranslation/${1}?language_code=${language}`
    )
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  console.log(data);

  return (
    <div>
      <div className="root-container">
        <div className="root-wrapper">
          <Title
            $type={"light"}
            title={t("honory.title")}
            button={t("alumni.btn")}
            to={"honory"}
          />
        </div>
      </div>

      <Container>
        <div className="root-container">
          <div className="root-wrapper" data-aos="fade-up">
            <div className="content">
              <img
                loading="lazy"
                src={`/public/api/${
                  data?.persons_?.img_?.url ||
                  data?.persons_translation_?.persons_?.img_?.url
                }`}
                alt=""
                className="content__img"
              />
              <div className="content__name">
                {data?.persons_?.fitstName} {data?.persons_?.lastName}{" "}
                {data?.persons_?.fathers_name}
              </div>
              <div className="content__sub">
                {data?.persons_?.employee_type_?.title ||
                  data?.persons_?.employee_type_translation?.title}
                , {data?.degree}
              </div>
              <div className="content__p">{data?.biography_json}</div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Faxriy;
