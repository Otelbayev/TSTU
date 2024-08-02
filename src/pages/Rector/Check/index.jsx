import React from "react";
import { Btn } from "../style";
import { Input } from "../../../components/Generics";

const Check = () => {
  return (
    <div className="content__right__form" data-aos="fade-up">
      <Input placeholder={"Email"} type="text" />
      <Btn type="primary">Yuborish</Btn>
    </div>
  );
};

export default Check;
