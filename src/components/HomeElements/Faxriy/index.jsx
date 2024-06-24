import React from "react";
import { Title } from "../../Generics";
import { Container } from "./style";
import prof from "../../../assets/images/prof.jpg";
import { useTranslation } from "react-i18next";

const Faxriy = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="root-container">
        <div className="root-wrapper">
          <Title $type={"light"} title={t("honory.title")} />
        </div>
      </div>

      <Container>
        <div className="root-container">
          <div className="root-wrapper" data-aos="fade-up">
            <div className="content">
              <img loading="lazy" src={prof} alt="" className="content__img" />
              <div className="content__name">
                Mirsalixov Baxodir Abdusamatovich
              </div>
              <div className="content__sub">
                Dotsent , Fizika-matematika fanlari nomzodi
              </div>
              <div className="content__p">
                Lorem ipsum dolor sit amet consectetur. Ullamcorper platea eu
                vel enim ultrices lectus odio malesuada euismod. Amet dolor eu
                vitae gravida fermentum lectus ut rutrum etiam. Diam ut dui a
                mauris non aenean fermentum. Ultrices nisi pellentesque eu
                tortor posuere in tellus congue. Adipiscing a neque eget aliquam
                egestas arcu pharetra amet. Etiam vel tincidunt quis porta massa
                vitae scelerisque pellentesque sem. At purus nec ante commodo
                venenatis hac. Dui ultrices vitae pulvinar in. Proin pretium
                nullam orci massa lectus interdum nisl.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Faxriy;
