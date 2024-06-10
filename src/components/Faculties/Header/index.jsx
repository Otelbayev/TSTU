import React, { useState } from "react";
import logo1 from "../../../assets/icons/logo1.png";
import { Container, Content } from "./style";
import SearchBoxComp from "../../../components/SearchBox";

const Header = ({
  name,
  aboutRef,
  talimRef,
  kafedraRef,
  tadqiqotRef,
  kafedra,
}) => {
  const width = window.innerWidth;
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  return (
    <Container>
      <div className="root-container">
        <div className="root-wrapper" style={{ position: "relative" }}>
          <Content data-aos="fade-down" type={"header"}>
            {width <= 1000 && <Content.Menu />}
            <Content.Logo loading="lazy" src={logo1} />
            {width > 1000 && (
              <Content.Right>
                <Content.Link
                  onClick={() =>
                    aboutRef.current.scrollIntoView({ block: "nearest" })
                  }
                >
                  {name} haqida
                </Content.Link>
                <Content.Link
                  onClick={() =>
                    talimRef.current.scrollIntoView({ block: "nearest" })
                  }
                >
                  Ta’lim
                </Content.Link>
                {kafedra && (
                  <Content.Link
                    onClick={() =>
                      kafedraRef.current.scrollIntoView({ block: "nearest" })
                    }
                  >
                    Kafedralar
                  </Content.Link>
                )}
                <Content.Link
                  onClick={() =>
                    tadqiqotRef.current.scrollIntoView({ block: "nearest" })
                  }
                >
                  Tadqiqot
                </Content.Link>
                <Content.Link onClick={() => setSearchIsOpen(!searchIsOpen)}>
                  Qidirish <Content.Search />
                </Content.Link>
              </Content.Right>
            )}
            {width <= 1000 && <Content.Search />}
          </Content>
          <SearchBoxComp $check={searchIsOpen.toString()} />
        </div>
      </div>
    </Container>
  );
};

export default Header;
