import React, { useState } from "react";
import { FakGrid, Fakultetlar } from "./style";
import { Title } from "../../Generics";
import KafedraCart from "../KafedraCart";
import FacultetCart from "../FacultetCart";
import { useTranslation } from "react-i18next";
import { useFrontDepartmentContext } from "../../../context/DepartmentContext";

const Faculties = () => {
  const { t } = useTranslation();

  const { fakultet, kafedra } = useFrontDepartmentContext();

  const [id, setId] = useState(null);
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
                {fakultet?.map((e) => (
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
                <div className="fak-right__title">Kafedralar</div>
                <div className="fak-right__cards">
                  {/* {Fac.find((e) => e.id === id)?.kafedra?.map((e) => (
                    <KafedraCart
                      onClick={() => navigate(`/faculties/${id}/${e.id}`)}
                      key={e.id}
                      prop={e}
                    />
                  ))} */}

                  {kafedra
                    ?.filter((e) => e?.parent_id === id)
                    ?.map((item) => (
                      <KafedraCart
                        onClick={() => navigate(`/faculties/${id}/${item?.id}`)}
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
