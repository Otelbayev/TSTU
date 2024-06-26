import React, { useEffect } from "react";
import { useFrontPersonContext } from "../../context/PersonContext";
import DekanCart from "../../components/Faculties/DekanCart";
import { Container } from "./style";
import { Title } from "../../components/Generics";
import UniShowcase from "./../../components/UniShowcase/index";

const Honorary = () => {
  const { faxriyBitiruvchi } = useFrontPersonContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="root-container">
      <div className="root-wrapper my-4">
        <UniShowcase title="Faxriy bitiruvchilari" />
        <Container></Container>
      </div>
    </div>
  );
};

export default Honorary;
