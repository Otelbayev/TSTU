import React from "react";
import bg from "../../assets/images/image.png";
import title from "../../assets/images/title.png";
import mobile from "../../assets/images/mobiletitle.png";
import { Container, Img, Wrapper, Title, TitleImg } from "./style";
import { useTranslation } from "react-i18next";

const Showcase = () => {
  const { t, i18n } = useTranslation();
  return (
    <Container $bg={bg}>
      <Wrapper>
        {i18n.language === "uz" ? (
          <>
            <TitleImg
              data-aos="zoom-in"
              loading="lazy"
              src={title}
              display="desktop"
            />
            <TitleImg
              data-aos="zoom-in"
              loading="lazy"
              src={mobile}
              display="mobile"
            />
          </>
        ) : (
          <Title>{t("name")}</Title>
        )}
      </Wrapper>
    </Container>
  );
};

export default Showcase;
