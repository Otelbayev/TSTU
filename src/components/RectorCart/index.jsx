import React from "react";
import { Container, Content } from "./style";
import email from "../../assets/icons/rectorEmail.png";
import phone from "../../assets/icons/rectorPhone.png";

const RectorCart = ({ data }) => {
  return (
    <Container>
      <Content>
        <Content.Front>
          <img src={data?.img} alt="" />
          <div className="position">{data?.position}</div>
          <div className="name">{data?.name}</div>
        </Content.Front>
        <Content.Back>
          <img src={data?.img} alt="" />
          <div className="position">{data?.position}</div>
          <div className="name">{data?.name}</div>
          <div className="desc">{data?.desc}</div>
          <div className="wrap">
            <img src={phone} alt="" />
            <div>
              {data?.phone.map((e, index) => (
                <div key={index} className="phone">
                  {e}
                </div>
              ))}
            </div>
          </div>
          <div className="wrap">
            <img src={email} alt="" />
            <div>
              {data?.email.map((e, index) => (
                <div key={index} className="phone">
                  {e}
                </div>
              ))}
            </div>
          </div>
        </Content.Back>
      </Content>
    </Container>
  );
};

export default RectorCart;
