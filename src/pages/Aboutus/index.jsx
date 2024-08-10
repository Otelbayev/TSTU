import React from "react";
import UniShowcase from "./../../components/UniShowcase/index";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import img1 from "../../assets/images/about1.png";
import img2 from "../../assets/images/about2.png";
import { useDepartment } from "../../hooks/useDepartment";

const Content = styled.div`
  display: flex;
  gap: 20px;
  .desc {
    flex: 1;
    text-align: justify;
  }
  .cart {
    flex: 1;
    img {
      width: 100%;
    }
    ul {
      li {
        margin-left: 20px;
      }
    }
  }
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const Aboutus = () => {
  const { t } = useTranslation();
  const { data } = useDepartment("Fakultet");

  return (
    <div>
      <UniShowcase title={t("Aboutus.title")} />
      <div className="root-container">
        <div className="root-wrapper py-3">
          <Content>
            <div className="desc">{t("Aboutus.desc")}</div>
            <div className="cart">
              <img src={img1} alt="" />
              <ul>
                {data?.list?.slice(0, 4)?.map((e) => (
                  <li>{e.title}</li>
                ))}
              </ul>
            </div>
            <div className="cart">
              <img src={img2} alt="" />
              <ul>
                {data?.list?.slice(4)?.map((e) => (
                  <li>{e.title}</li>
                ))}
              </ul>
            </div>
          </Content>

          <div className="title"> {t("Aboutus.title1")}</div>
          <p dangerouslySetInnerHTML={{ __html: t("Aboutus.data1") }}></p>
          <div className="title"> {t("Aboutus.title2")}</div>
          <p dangerouslySetInnerHTML={{ __html: t("Aboutus.data2") }}></p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
