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

const Footer = () => {
  return (
    <Container className="root-container">
      <Wrapper data-aos="fade-up" className="root-wrapper">
        <Left>
          <Title>Transport Universiteti</Title>
          <Icons>
            <NavLink to="">
              <img loading="lazy" src={logo} />
            </NavLink>
            <NavLink to="">
              <img loading="lazy" src={logo1} />
            </NavLink>
          </Icons>
          <P>
            Talaba – bizning asosiy kuchimiz. Shu bois universitetimizda biror
            yangilik qilmoqchi bо‘lsak, albatta, ular bilan fikrlashamiz kerak.
          </P>
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
              Toshkent shahar Mirobod tumani Temiryo‘lchilar ko‘chasi 1-uy
            </Link>
            <Btn>
              <I loading="lazy" src={loc} />
              manzil olish
            </Btn>
          </Row>
          <Row>
            <T>Biz haqimizda</T>
            <Link to="">Home</Link>
            <Link to="">Biz haqimizda</Link>
            <Link to="">T'lim</Link>
            <Link to="">Bitiruvchi</Link>
            <Link to="">Manaviyat</Link>
            <Link to="">Qabul komissiyasi</Link>
          </Row>
          <Row>
            <T>Havolalar</T>
            <Link to="">Hemins hodim</Link>
            <Link to="">Hemins talaba</Link>
            <Link to="">Kutubxona</Link>
            <Link to="">Corp mail</Link>
            <Link to="">Journal TSTU</Link>
            <Link to="">Moodle</Link>
          </Row>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Footer;
