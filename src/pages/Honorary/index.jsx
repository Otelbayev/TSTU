import React, { useEffect } from "react";
import { Content } from "../Scientific/ScientificId/style";
import Carousel from "../../components/Carousel";
import { Button } from "../../components/Generics";
import prof from "../../assets/images/faxriydoc.jpg";
import { useNavigate } from "react-router-dom";

const Honorary = () => {
  const naviagte = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="root-container">
      <div className="root-wrapper">
        <Content data-aos="fade-up">
          <Content.Flex style={{ gap: "50px", margin: "50px 0" }}>
            <div style={{ width: "50%" }}>
              <Carousel img={[prof, prof, prof]} />
            </div>
            <div style={{ width: "50%" }}>
              <Content.Title>Ism Familiya</Content.Title>
              <ul>
                <Content.Li>Lorem ipsum </Content.Li>
                <Content.Li>Lorem ipsum </Content.Li>
                <Content.Li>Lorem ipsum </Content.Li>
                <Content.Li>Lorem ipsum </Content.Li>
              </ul>
              <Content.P>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Content.P>
              <Button
                type={"primary"}
                $padding={"13px 30px"}
                onClick={() => naviagte("1")}
              >
                Button
              </Button>
            </div>
          </Content.Flex>
          <Content.Flex style={{ gap: "50px", margin: "50px 0" }}>
            <div style={{ width: "50%" }}>
              <Content.Title>Ism Familiya</Content.Title>
              <ul>
                <Content.Li>Lorem ipsum </Content.Li>
                <Content.Li>Lorem ipsum </Content.Li>
                <Content.Li>Lorem ipsum </Content.Li>
                <Content.Li>Lorem ipsum </Content.Li>
              </ul>
              <Content.P>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Content.P>
              <Button
                type={"primary"}
                $padding={"13px 30px"}
                onClick={() => naviagte("2")}
              >
                Button
              </Button>
            </div>
            <div style={{ width: "50%" }}>
              <Carousel img={[prof, prof, prof]} />
            </div>
          </Content.Flex>
          <Content.Flex style={{ gap: "50px", margin: "50px 0" }}>
            <div style={{ width: "50%" }}>
              <Carousel img={[prof, prof, prof]} />
            </div>
            <div style={{ width: "50%" }}>
              <Content.Title>Ism Familiya</Content.Title>
              <ul>
                <Content.Li>Lorem ipsum </Content.Li>
                <Content.Li>Lorem ipsum </Content.Li>
                <Content.Li>Lorem ipsum </Content.Li>
                <Content.Li>Lorem ipsum </Content.Li>
              </ul>
              <Content.P>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Content.P>
              <Button
                type={"primary"}
                $padding={"13px 30px"}
                onClick={() => naviagte("3")}
              >
                Button
              </Button>
            </div>
          </Content.Flex>
        </Content>
      </div>
    </div>
  );
};

export default Honorary;
