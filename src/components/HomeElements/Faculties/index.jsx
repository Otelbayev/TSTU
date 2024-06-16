import React, { useState } from "react";
import { FakGrid, Fakultetlar } from "./style";
import { Title } from "../../Generics";
import { Fac } from "../../../mock/homeProps";
import KafedraCart from "../KafedraCart";
import FacultetCart from "../FacultetCart";
import { useTranslation } from "react-i18next";

const Faculties = () => {
  const { t } = useTranslation();

  const [id, setId] = useState(1);
  return (
    <Fakultetlar className="root-container">
      <div className="root-wrapper">
        <Title
          title={t("faculties.title")}
          button={t("faculties.btn")}
          to="faculties"
        >
          <FakGrid>
            <div data-aos="fade-right" className="fak-left">
              <div className="fak-left__content">
                {Fac.map((e) => (
                  <FacultetCart
                    key={e.id}
                    id={id}
                    onClick={() => setId(e.id)}
                    prop={e}
                  />
                ))}
              </div>
            </div>
            <div data-aos="fade-left" className="wrap">
              <div className="fak-right">
                <div className="fak-right__title">Kafedralar</div>
                <div className="fak-right__cards">
                  {Fac.find((e) => e.id === id)?.kafedra?.map((e) => (
                    <KafedraCart
                      onClick={() => navigate(`/faculties/${id}/${e.id}`)}
                      key={e.id}
                      prop={e}
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
