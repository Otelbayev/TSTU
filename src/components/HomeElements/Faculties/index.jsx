import React, { useState } from "react";
import { FakGrid, Fakultetlar } from "./style";
import { Title } from "../../Generics";
import KafedraCart from "../KafedraCart";
import FacultetCart from "../FacultetCart";
import { useTranslation } from "react-i18next";
import { useFrontDepartmentContext } from "../../../context/DepartmentContext";
import { useNavigate } from "react-router-dom";
import { useLanguageContext } from "../../../context/LanguageContext";

const Faculties = () => {
  const { t } = useTranslation();
  const { faculties, kafedras } = useFrontDepartmentContext();
  const [id, setId] = useState(faculties?.length ? faculties[0]?.id : 1);
  const navigate = useNavigate();
  const { language } = useLanguageContext();
  return (
    <Fakultetlar className="root-container">
      <div className="root-wrapper">
        <Title
          title={t("faculties.title")}
          button={t("faculties.btn")}
          to="facultet"
          $type={"light"}
        >
          <FakGrid>
            <div data-aos="fade-right" className="fak-left">
              <div className="fak-left__content">
                {faculties?.map((e) => (
                  <FacultetCart
                    key={e?.id}
                    id={id}
                    onClick={() => setId(e?.id)}
                    prop={e}
                  />
                ))}
              </div>
            </div>
            <div data-aos="fade-left" className="wrap">
              <div className="fak-right">
                <div className="fak-right__title">{t("faculties.kafedra")}</div>
                <div className="fak-right__cards">
                  {kafedras
                    ?.filter((e) => e?.parent_id === id)
                    ?.map((item) => (
                      <KafedraCart
                        onClick={() =>
                          navigate(`/${language}/kafedra/${item?.id}`)
                        }
                        key={item?.id}
                        prop={item}
                      />
                    ))}
                </div>
              </div>
            </div>
          </FakGrid>
        </Title>
      </div>
    </Fakultetlar>
  );
};

export default Faculties;
