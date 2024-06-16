import React from "react";
import { Container, Layout } from "./style";
import { Title } from "../../Generics";
import LargeBanner from "../LargeBanner";
import { prop7, prop8, prop9 } from "../../../mock/homeProps";
import filterSt from "../../../assets/images/filterSt.png";
import jasco from "../../../assets/images/jasco.jpg";
import { useTranslation } from "react-i18next";

const Talaba = () => {
  const { t } = useTranslation();
  return (
    <Container className="root-container">
      <div className="root-wrapper">
        <Title
          title={t("student.title")}
          subtitle={t("student.desc")}
        >
          <Layout $type="talaba">
            <div className="grid">
              <div className="grid__item" data-aos="fade-right">
                <LargeBanner prop={prop7} />
                <LargeBanner prop={prop8} />
              </div>
              <div data-aos="fade-up">
                <LargeBanner prop={prop9} />
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
