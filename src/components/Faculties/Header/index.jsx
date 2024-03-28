import React, { useState } from "react";
import logo1 from "../../../assets/Faculties/LOGO.svg";
import { Container, Content } from "./style";
import SearchBox from "../../../components/SearchBox";

const Header = ({}) => {
  const width = window.innerWidth;
  const [searchIsOpen, setSearchIsOpen] = useState(true);
  return (
    <Container>
      <div className="root-container">
        <div className="root-wrapper" style={{ position: "relative" }}>
          <Content data-aos="fade-down" type={"header"}>
            {width <= 1000 && <Content.Menu />}
            <Content.Logo src={logo1} />
            {width > 1000 && (
              <Content.Right>
                <Content.Link to="/">Fakultet haqida</Content.Link>
                <Content.Link to="/">Ta’lim</Content.Link>
                <Content.Link to="/">Kafedralar</Content.Link>
                <Content.Link to="/">Tadqiqot</Content.Link>
                <Content.Link onClick={() => setSearchIsOpen(!searchIsOpen)}>
                  Qidirish <Content.Search />
                </Content.Link>
              </Content.Right>
            )}
            {width <= 1000 && <Content.Search />}
          </Content>
          <SearchBox $check={searchIsOpen} />
        </div>
      </div>
    </Container>
  );
};

export default Header;
