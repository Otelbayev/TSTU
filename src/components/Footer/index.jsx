import React from "react";
import logo from "../../assets/icons/logo1.png";
import logo1 from "../../assets/icons/logo2.png";
import tel from "../../assets/icons/tel.svg";
import email from "../../assets/icons/email.svg";
import loc from "../../assets/icons/loc.svg";
import loc2 from "../../assets/icons/loc2.svg";
import {
  Container,
  Wrapper,
  Left,
  Title,
  Icons,
  P,
  Media,
  Right,
  Row,
  Link,
  I,
  T,
  Btn,
  Social,
} from "./style";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <Container className="root-container">
      <Wrapper data-aos="fade-up" className="root-wrapper">
        <Left>
          <Title>{t("footer.title")}</Title>
          <Icons>
            <NavLink to="">
              <img loading="lazy" src={logo} />
            </NavLink>
            <NavLink to="">
              <img loading="lazy" src={logo1} />
            </NavLink>
          </Icons>
          <P>{t("footer.desc")}</P>
          <Media>
            <NavLink target="_blank" to="https://youtube.com/@iwssei">
              <Social.Youtube />
            </NavLink>
            <NavLink target="_blank" to="https://instagram.com/jasur.otelbayev">
              <Social.Instagram />
            </NavLink>
            <NavLink target="_blank" to="https://t.me/jasurdev1604">
              <Social.Telegram />
            </NavLink>
            <NavLink target="_blank" to="https://facebook.com">
              <Social.Facebook />
            </NavLink>
          </Media>
        </Left>
        <Right>
          <Row $first="true">
            <Link to="tel:+998712990001">
              <I loading="lazy" src={tel} />
              +998 71-299-00-01
            </Link>
            <Link to="mainto:rektorat@tstu.uz">
              <I loading="lazy" src={email} />
              rektorat@tstu.uz
            </Link>
            <Link to="/">
              <I loading="lazy" src={loc2} />
              {t("footer.loc")}
            </Link>
            <Btn>
              <I loading="lazy" src={loc} />
              {t("footer.take")}
            </Btn>
          </Row>
          <Row>
            <T>{t("footer.about.title")}</T>
            <Link to="">{t("footer.about.home")}</Link>
            <Link to="">{t("footer.about.biz")}</Link>
            <Link to="">{t("footer.about.talim")}</Link>
            <Link to="">{t("footer.about.bitirvchi")}</Link>
            <Link to="">{t("footer.about.manaviyat")}</Link>
            <Link to="">{t("footer.about.qabul")}</Link>
          </Row>
          <Row>
            <T>Havolalar</T>
            <Link to="">{t("footer.links.xoldim")}</Link>
            <Link to="">{t("footer.links.talaba")}</Link>
            <Link to="">{t("footer.links.kutubxona")}</Link>
            <Link to="">{t("footer.links.mail")}</Link>
            <Link to="">{t("footer.links.jurnal")}</Link>
            <Link to="">{t("footer.links.moodle")}</Link>
          </Row>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Footer;
