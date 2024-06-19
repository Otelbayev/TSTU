import React from "react";
import { Container, Layout } from "./style";
import { Title } from "../../Generics";
import LargeBanner from "../LargeBanner";
import { prop7, prop8, prop9 } from "../../../mock/homeProps";
import filterSt from "../../../assets/images/filterSt.png";
import jasco from "../../../assets/images/jasco.jpg";
import { useTranslation } from "react-i18next";
import { useLanguageContext } from "../../../context/LanguageContext";
import { useNavigate } from "react-router-dom";

const Talaba = ({ data }) => {
  const { t } = useTranslation();
  const { language } = useLanguageContext();
  const navigate = useNavigate();

  return (
    <Container className="root-container">
      <div className="root-wrapper">
        <Title title={t("student.title")} subtitle={t("student.desc")}>
          <Layout $type="talaba">
            <div className="grid">
              <div className="grid__item" data-aos="fade-right">
                <LargeBanner
                  prop={prop7}
                  item={data[0]}
                  onClick={() => navigate(`/${language}/blog/${data[0]?.id}`)}
                />
                <LargeBanner
                  prop={prop8}
                  item={data[1]}
                  onClick={() => navigate(`/${language}/blog/${data[1]?.id}`)}
                />
              </div>
              <div data-aos="fade-up">
                <LargeBanner
                  prop={prop9}
                  item={data[2]}
                  onClick={() => navigate(`/${language}/blog/${data[2]?.id}`)}
                />
              </div>
              <div className="grid__large" data-aos="fade-left">
                <img
                  className="grid__large__img"
                  loading="lazy"
                  src={filterSt}
                />
                <div className="student">
                  <img
                    loading="lazy"
                    src={jasco}
                    alt=""
                    className="student__img"
                  />
                  <div className="student__name">O‘telbayev Jasurbek</div>
                  <div className="student__group">AT-3 gruh 3-kurs</div>
                  <div className="student__p">
                    Lorem ipsum dolor sit amet consectetur. Odio mattis lorem
                    adipiscing cursus in cursus enim mauris eget. Amet viverra
                    sit sociis amet viverra velit a. A integer congue etiam
                    condimentum penatibus at. Lectus magna facilisis maecenas
                    scelerisque in eget. Ultrices quam vel commodo feugiat
                    malesuada eget amet habitasse. Enim nullam neque in viverra.
                    Aenean ut est venenatis id tempor habitasse morbi feugiat
                    non. Purus amet nibh egestas vulputat
                  </div>
                </div>
              </div>
            </div>
          </Layout>
        </Title>
      </div>
    </Container>
  );
};

export default Talaba;
