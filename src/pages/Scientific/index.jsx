import { useNavigate } from "react-router-dom";
import IlmiyMarkazCart from "../../components/IlmiyMarkazCart";
import { Content } from "./style";
import React, { useEffect } from "react";

const Scientific = () => {
  const navigate = useNavigate();
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="root-container">
      <div className="root-wrapper">
        <Content data-aos="fade-up">
          {arr.map((e) => (
            <IlmiyMarkazCart
              key={e}
              $border={`var(--borderCart)`}
              borderHover={`var(--bgHover)`}
              onClick={() => navigate(`${e}`)}
              dataAos={"zoom-in"}
            />
          ))}
        </Content>
      </div>
    </div>
  );
};

export default Scientific;
