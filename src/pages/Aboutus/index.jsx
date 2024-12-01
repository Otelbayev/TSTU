import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import img1 from "../../assets/images/about1.png";
import img2 from "../../assets/images/about2.png";
import { useDepartment } from "../../hooks/useDepartment";
import { Helmet } from "react-helmet";
import { useShowcaseTitleContext } from "../../context/ShowcaseTitleContext";
import { useBreadcrumbContext } from "../../context/BreadcrumbContext/index";

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
  const { t, i18n } = useTranslation();
  const { data } = useDepartment("Fakultet");
  const { setTitle } = useShowcaseTitleContext();
  const { setBreadcrumb } = useBreadcrumbContext();

  useEffect(() => {
    setTitle(t("Aboutus.title"));
    setBreadcrumb([{ path: "/aboutus", name: t("Aboutus.title") }]);
  }, [i18n.language]);

  return (
    <div>
      <Helmet>
        <title>{t("Aboutus.title")}</title>
        <meta name="description" content={t("Aboutus.desc")} />
      </Helmet>
      <div className="root-container">
        <div className="root-wrapper py-3">
          <Content>
            <div className="desc">{t("Aboutus.desc")}</div>
            <div className="cart">
              <img loading="lazy" src={img1} alt="" />
              <ul>
                {data?.list?.slice(0, 4)?.map((e) => (
                  <li>{e.title}</li>
                ))}
              </ul>
            </div>
            <div className="cart">
              <img loading="lazy" src={img2} alt="" />
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
