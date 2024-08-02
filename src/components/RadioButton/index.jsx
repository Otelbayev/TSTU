import React from "react";
import { Container, Wrapper } from "./style";

const RadioButton = ({ prop, dataAos }) => {
  return (
    <Wrapper data-aos={dataAos}>
      {prop.map(({ id, title }) => (
        <Container key={id}>
          <input type="radio" id={id} name="radio" />
          <label htmlFor={id}>{title}</label>
        </Container>
      ))}
    </Wrapper>
  );
};

export default RadioButton;
