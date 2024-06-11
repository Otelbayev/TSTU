import React, { memo, useState } from "react";
import logo1 from "../../assets/icons/logo1.png";
import logo2 from "../../assets/icons/logo2.png";
import logo3 from "../../assets/icons/logo3.png";
import logo4 from "../../assets/icons/logo4.png";
import menu from "../../assets/icons/menu1.svg";
import search from "../../assets/icons/search.svg";
import eye from "../../assets/icons/eye.svg";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Button, Menu as Antmenu } from "antd";
import {
  Div,
  Img,
  Left,
  Container,
  Wrapper,
  Menus,
  Menu,
  Icon,
  Right,
  Link,
  Search,
  Language,
} from "./style";
import { Input, Lang } from "../Generics";
import { useLanguageContext } from "../../context/LanguageContext";
import axios from "axios";

const items = [
  {
    key: "sub1",
    label: "Navigation One",
    children: [
      {
        key: "5",
        label: "Option 5",
      },
      {
        key: "6",
        label: "Option 6",
      },
      {
        key: "7",
        label: "Option 7",
      },
      {
        key: "8",
        label: "Option 8",
      },
    ],
  },
  {
    key: "sub2",
    label: "Navigation Two",
    children: [
      {
        key: "9",
        label: "Option 9",
      },
      {
        key: "10",
        label: "Option 10",
      },
    ],
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { language } = useLanguageContext();

  const getData = async () => {
    const res = await axios.get(
      language === "uz"
        ? "/api/menu/sitegetallmenu?top_menu=false"
        : `/api/menu/sitegetallmenutranslation?language_code=${language}&top_menu=false`
    );
  };

  return (
    <div>
      <Container>
        <div className="root-container">
          <div className="root-wrapper">
            <Wrapper>
              <Menus style={{ width: "70px" }}>
                <Menu
                  loading="lazy"
                  src={menu}
                  onClick={() => setIsOpen(!isOpen)}
                />
              </Menus>
              <Left>
                <Link to={`/${language}`}>
                  <Img loading="lazy" src={logo1} />
                </Link>
                <Div>
                  <Link to={`/${language}`}>
                    <Img loading="lazy" src={logo2} />
                  </Link>
                  <Link
                    target="_blank"
                    to="https://www.timeshighereducation.com/world-university-rankings/tashkent-state-transport-university"
                  >
                    <Img loading="lazy" src={logo3} />
                  </Link>
                  <Link target="_blank" to="https://www.4icu.org/uz/">
                    <Img loading="lazy" src={logo4} $last="true" />
                  </Link>
                </Div>
              </Left>
              <Right $isopen={isOpen.toString()}>
                <div className="item-desktop">
                  <Link
                    target="_blank"
                    to="https://student.tstu.uz/dashboard/login"
                  >
                    Talaba
                  </Link>
                  <Link
                    target="_blank"
                    to="https://hemis.tstu.uz/dashboard/login"
                  >
                    Xodim
                  </Link>
                  <Link to="/arm">Elektron kutubxona</Link>
                  <Link>Alumni</Link>
                  <Search onClick={() => setIsSearchOpen(!isSearchOpen)}>
                    <Icon loading="lazy" src={search} width={24} />
                    <div>Qidiruv</div>
                  </Search>
                  <Link className="bvi-show">
                    <Icon loading="lazy" src={eye} width={27} />
                  </Link>
                </div>
                <div className="item-mobile">
                  <Antmenu
                    mode="inline"
                    theme="dark"
                    items={items}
                  />
                </div>
              </Right>
              <Language>
                <Lang width={80} />
              </Language>
            </Wrapper>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default memo(Header);
