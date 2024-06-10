import React from "react";
import bg from "../../assets/images/image.png";
import title from "../../assets/images/title.png";
import mobiletitle from "../../assets/images/mobiletitle.png";
import { Container, Img, Wrapper, Title } from "./style";
import Sidebar from "../Sidebar";

const Showcase = () => {
  return (
    <Container>
      <Sidebar />
      <Img src={bg} />
      <Wrapper>
        <Title data-aos="zoom-in" display="desktop" loading="lazy" src={title} />
        <Title data-aos="zoom-in" display="mobile" loading="lazy" src={mobiletitle} />
      </Wrapper>
    </Container>
  );
};

export default Showcase;
