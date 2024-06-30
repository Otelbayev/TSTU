import React, { useEffect } from "react";
import { Container, Content } from "./style";
import email from "../../assets/icons/rectorEmail.png";
import phone from "../../assets/icons/rectorPhone.png";
import { NavLink } from "react-router-dom";
import { useLanguageContext } from "../../context/LanguageContext";

const RectorCart = ({ data }) => {
  const { language } = useLanguageContext();

  useEffect(() => {
  
  }, [language]);

  return (
    <Container>
      <Content className="content">
        <Content.Front>
          <img loading="lazy" src={data?.img} alt="" />
          <div className="position">{data?.position}</div>
          <div className="name">{data?.name}</div>
        </Content.Front>
        <Content.Back>
          <img loading="lazy" src={data?.img} alt="" />
          <div className="position">{data?.position}</div>
          <div className="name">{data?.name}</div>
          <div className="desc">{data?.desc}</div>
          <div className="wrap">
            <img loading="lazy" src={phone} alt="" />
            <div>
              {data?.phone.map((e, index) => (
                <div key={index} className="phone">
                  {e}
                </div>
              ))}
            </div>
          </div>
          <div className="wrap">
            <img loading="lazy" src={email} alt="" />
            <div>
              {data?.email.map((e, index) => (
                <div key={index} className="phone">
                  {e}
                </div>
              ))}
            </div>
          </div>
          <NavLink className={"btn btn-primary"} to={`/${language}/employee/1`}>
            Batafsil
          </NavLink>
        </Content.Back>
      </Content>
    </Container>
  );
};

export default RectorCart;
