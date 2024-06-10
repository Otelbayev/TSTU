import React, { useEffect } from "react";
import { Content, Left, Right, Btn, Inputs } from "./style";
import { Select } from "../../components/Generics";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const st = {
    color: "#363940",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "140%",
  };

  const items = [{ id: 0, label: <p style={st}>none</p>, value: "none" }];

  return (
    <div className="root-container">
      <div className="root-wrapper">
        <Content data-aos="fade-up">
          <Left>
            <Left.Title>Contact us</Left.Title>
            <Left.Desc>
              The harder you work for something, the greater you’ll feel when
              you achieve it.
            </Left.Desc>
            <Left.Form>
              <Select
                height={46}
                defaultSelected={"none"}
                options={items}
                defaultValue={"none"}
              />
              <Left.Div>
                <Inputs placeholder="Your name" />
                <Inputs placeholder="Email" />
              </Left.Div>
              <Inputs placeholder="Description (optional)" />
              <Btn type={"primary"}>button</Btn>
            </Left.Form>
          </Left>
          <Right>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11993.81247292006!2d69.2820477!3d41.2772419!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8aac316ee659%3A0xc5be678c10cbba9b!2z0KLQsNGI0LrQtdC90YLRgdC60LjQuSDQk9C-0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0KLRgNCw0L3RgdC_0L7RgNGC0L3Ri9C5INCj0L3QuNCy0LXRgNGB0LjRgtC10YI!5e0!3m2!1sru!2s!4v1711655518141!5m2!1sru!2s"
              loading="lazy"
            ></iframe>
          </Right>
        </Content>
      </div>
    </div>
  );
};

export default Contact;
