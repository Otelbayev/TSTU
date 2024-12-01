import IlmiyMarkazCart from "../../components/IlmiyMarkazCart";
import { Content } from "./style";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDepartment } from "../../hooks/useDepartment";
import Loading2 from "../../components/Loading2";
import { Helmet } from "react-helmet";
import { useShowcaseTitleContext } from "../../context/ShowcaseTitleContext";
import { useBreadcrumbContext } from "../../context/BreadcrumbContext";

const ScientificCenter = () => {
  const { t, i18n } = useTranslation();
  const { data, loading, error } = useDepartment("Ilmiy markaz", true);
  const { setTitle } = useShowcaseTitleContext();
  const { setBreadcrumb } = useBreadcrumbContext();
  useEffect(() => {
    window.scrollTo(0, 0);
    setTitle(t("centers.title"));
    setBreadcrumb([{ path: "/scientific-center", name: t("centers.title") }]);
  }, [data]);

  if (loading) {
    return <Loading2 />;
  }

  if (!loading && error) {
    return <h1 className="text-center">Xatolik!</h1>;
  }

  return (
    <div>
      <Helmet>
        <title>{t("centers.title")}</title>
      </Helmet>
      <div className="root-container">
        <div className="root-wrapper">
          <Content data-aos="fade-up">
            {data?.list?.map((e) => (
              <IlmiyMarkazCart
                key={e.id}
                $border={`var(--borderCart)`}
                borderHover={`var(--bgHover)`}
                to={`department/${
                  i18n.language === "uz" ? e.id : e.departament_?.id
                }`}
                dataAos={"zoom-in"}
                item={e}
              />
            ))}
          </Content>
        </div>
      </div>
    </div>
  );
};

export default ScientificCenter;
