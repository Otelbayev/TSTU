import React, { useEffect } from "react";
import { Icons } from "../Home/style";
import { Content } from "./style";
import { prop6 } from "../../mock/homeProps";
import { InteractiveCart } from "../../components/HomeElements";

const InteractiveServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const data = [...prop6, ...prop6, ...prop6];
  return (
    <div className="root-container">
      <div className="root-wrapper">
        <Content>
          {data.map((e, index) => (
            <InteractiveCart key={index} prop={e} />
          ))}
        </Content>
      </div>
    </div>
  );
};

export default InteractiveServices;
