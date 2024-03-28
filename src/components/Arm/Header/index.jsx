import React from "react";
import { Container, Content } from "../Footer/style";
import logo1 from "../../../assets/ARM/logo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const naviagte = useNavigate();
  const width = window.innerWidth;
  return (
    <Container>
      <div className="root-container">
        <div className="root-wrapper">
          <Content type={"header"} data-aos="fade-down">
            {width <= 1000 && <Content.Menu />}
            <Content.Logo src={logo1} />
            <Content.Right>
              {width > 1000 && (
                <div>
                  <Content.Link to="/">Asosiy</Content.Link>
                  <Content.Link to="/">Elektron baza</Content.Link>
                  <Content.Link to="/arm">ARM</Content.Link>
                  <Content.Link to="/">Kolleksiya</Content.Link>
                  <Content.Link to="/news">Yangiliklar</Content.Link>
                  <Content.Link to="/contact">Aloqa</Content.Link>
                  <Content.Search />
                </div>
              )}
              <Content.Btn type="primary" onClick={() => naviagte("/signin")}>
                Sign In
              </Content.Btn>
            </Content.Right>
          </Content>
        </div>
      </div>
    </Container>
  );
};

export default Header;
