import React from "react";
import none from "../../../assets/images/404.png";
import { Container, Img, Wrapper, Status, Desc, Wrap } from "./style";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/Generics";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Container data-aos="zoom-in">
      <Wrapper>
        <Img src={none} />
        <Wrap>
          <Status>404</Status>
          <Desc>sahifa topilmadi</Desc>
          <Button
            type={"primary"}
            onClick={() => navigate("")}
            $padding={"13px 15px"}
            fontSize={"14px"}
          >
            Asosiyga qaytish
          </Button>
        </Wrap>
      </Wrapper>
    </Container>
  );
};

export default NotFound;
