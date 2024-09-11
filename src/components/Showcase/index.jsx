import React, { useEffect, useState } from "react";
import bg from "../../assets/images/image.png";
import mobi from "../../assets/images/mbg.png";
import title from "../../assets/images/title.png";
import mobile from "../../assets/images/mobiletitle.png";
import { Container, Wrapper, Title, TitleImg } from "./style";
import { useTranslation } from "react-i18next";

const Showcase = () => {
  const { t, i18n } = useTranslation();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = bg; // Load the desktop image
    img.onload = () => {
      setIsLoaded(true); // Set state to true when the image is fully loaded
    };
  }, [bg]);
  return (
    <Container $bg={bg} $bgmob={mobi} isLoaded={isLoaded}>
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
