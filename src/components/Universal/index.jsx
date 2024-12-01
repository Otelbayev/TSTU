import React, { useEffect, useMemo, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Link, Outlet } from "react-router-dom";
import { Breadcrumb, Flex } from "antd";
import styled, { keyframes } from "styled-components";
import uniShow from "../../assets/images/uniShow.png";
import mobile from "../../assets/images/mobileback.png";
import { useShowcaseTitleContext } from "../../context/ShowcaseTitleContext";
import { useBreadcrumbContext } from "../../context/BreadcrumbContext";
import { useTranslation } from "react-i18next";
import { FcHome } from "react-icons/fc";

const Min = styled.div`
  min-height: calc(100dvh - 500px);
`;

const Universal = ({ showcase }) => {
  const { title } = useShowcaseTitleContext();
  const { breadcrumb } = useBreadcrumbContext();
  const { t } = useTranslation();

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
    <div>
      <Header uni={true} />
      {showcase && (
        <Container className="root-container">
          <div className="root-wrapper">
            <Container.Title data-aos="fade-right">{title}</Container.Title>
          </div>
        </Container>
      )}
      <div className="root-container">
        <div className="root-wrapper">
          <Breadcrumb style={{ padding: "6px 0" }} items={items} />
        </div>
      </div>
      <Min>
        <Outlet />
      </Min>
      <Footer />
    </div>
  );
};

export default Universal;

const anim = keyframes`
  from {
    background-size: 150% 150%;
  } 
  to{
    background-size: 100% 100%;
  }
`;

const Container = styled.div`
  background: url(${uniShow});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 370px;
  background-size: 100% 100%;
  animation: ${anim};
  animation-duration: 5s;
  @media screen and (max-width: 900px) {
    min-height: 250px;
    background: url(${mobile});
    background-repeat: no-repeat;
    background-size: cover;
  }
  @media screen and (max-width: 650px) {
    min-height: 200px;
  }
`;

Container.Title = styled.div`
  color: var(--white);
  font-size: 50px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  width: 80%;
  padding: 50px 0;

  @media screen and (max-width: 950px) {
    font-size: 50px;
  }
  @media screen and (max-width: 650px) {
    font-size: 30px;
  }
`;
