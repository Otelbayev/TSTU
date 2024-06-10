import React from "react";
import { Container, Content } from "./style";

const Showcase = ({ $bg, title, button, children, onClick }) => {
  return (
    <Container>
      <img src={$bg} alt="" />
      <div className="root-container">
        <div className="root-wrapper" style={{ position: "relative" }}>
          <Content data-aos="zoom-in">
            <Content.Title>{title || "title"}</Content.Title>
            <Content.Btn onClick={onClick} type="primary">
              {button || "button"}
            </Content.Btn>
          </Content>
          {children}
        </div>
      </div>
    </Container>
  );
};

export default Showcase;
