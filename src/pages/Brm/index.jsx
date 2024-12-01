import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { brm } from "../../mock";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { useShowcaseTitleContext } from "../../context/ShowcaseTitleContext";
import { useBreadcrumbContext } from "../../context/BreadcrumbContext";

export const Content = styled.div`
  margin-top: 15px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  .link {
    transition: 0.3s;
    &:hover {
      transform: scale(1.06);
    }
  }
  img {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 972px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 667px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 467px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Brm = () => {
  const { t, i18n } = useTranslation();
  const { setTitle } = useShowcaseTitleContext();

  const { setBreadcrumb } = useBreadcrumbContext();

  useEffect(() => {
    setTitle(t("Brm.title"));
    setBreadcrumb([{ path: "/brm", name: t("Brm.title") }]);
  }, [i18n.language]);
  return (
    <div>
      <Helmet>
        <title>{t("Brm.title")}</title>
      </Helmet>

      <div className="root-container">
        <div className="root-wrapper py-2">
          <div>{t("Brm.desc")}</div>
          <Content>
            {brm.map(({ id, img }) => (
              <NavLink className="link" to={`/${i18n.language}/page/${id}`}>
                <img loading="lazy" src={img} alt="" />
              </NavLink>
            ))}
          </Content>
        </div>
      </div>
    </div>
  );
};

export default Brm;
