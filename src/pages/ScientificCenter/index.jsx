import { useNavigate } from "react-router-dom";
import IlmiyMarkazCart from "../../components/IlmiyMarkazCart";
import { Content } from "./style";
import React, { useEffect } from "react";
import { useFrontDepartmentContext } from "../../context/DepartmentContext";

const ScientificCenter = () => {
  const navigate = useNavigate();
  const { markazlar } = useFrontDepartmentContext();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="root-container">
      <div className="root-wrapper">
        <Content data-aos="fade-up">
          {markazlar?.map((e) => (
            <IlmiyMarkazCart
              key={e.id}
              $border={`var(--borderCart)`}
              borderHover={`var(--bgHover)`}
              onClick={() => navigate(`${e}`)}
              dataAos={"zoom-in"}
              item={e}
            />
          ))}
        </Content>
      </div>
    </div>
  );
};

export default ScientificCenter;
