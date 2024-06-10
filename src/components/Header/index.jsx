import React, { memo, useState } from "react";
import logo1 from "../../assets/icons/logo1.png";
import logo2 from "../../assets/icons/logo2.png";
import logo3 from "../../assets/icons/logo3.png";
import logo4 from "../../assets/icons/logo4.png";
import menu from "../../assets/icons/menu1.svg";
import search from "../../assets/icons/search.svg";
import eye from "../../assets/icons/eye.svg";
import { Menu as Dropdown } from "antd";
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
import SearchBoxComp from "../SearchBox";
import { useLanguageContext } from "../../context/LanguageContext";

function getItem(label, key, children, type) {
  return {
    key,
    children,
    label,
    type,
  };
}
const items = [
  getItem("Navigation One", "sub1", [
    getItem("Option 1", "1"),
    getItem("Option 2", "2"),
    getItem("Option 3", "3"),
    getItem("Option 4", "4"),
  ]),
  getItem("Navigation Two", "sub2", [
    getItem("Option 5", "5"),
    getItem("Option 6", "6"),
    getItem("Submenu", "sub3", [
      getItem("Option 7", "7"),
      getItem("Option 8", "8"),
    ]),
  ]),
  getItem("Navigation Three", "sub4", [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Option 11", "11"),
    getItem("Option 12", "12"),
  ]),
  getItem(
    <Input
      type="text"
      placeholder={"Qidiruv..."}
      $padding={"5px 10px"}
      $borderRadius={"3px"}
    />
  ),
];
const rootSubmenuKeys = ["sub1", "sub2", "sub4"];

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [openKeys, setOpenKeys] = useState([""]);
  const { language } = useLanguageContext();

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
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
                <Link
                  target="_blank"
                  to="https://student.tstu.uz/dashboard/login"
                  className="mobile-none"
                >
                  Talaba
                </Link>
                <Link
                  className="mobile-none"
                  target="_blank"
                  to="https://hemis.tstu.uz/dashboard/login"
                >
                  Xodim
                </Link>
                <Link className="mobile-none" to="/arm">
                  Elektron kutubxona
                </Link>
                <Link className="mobile-none">Alumni</Link>
                <Search
                  className="mobile-none"
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                >
                  <Icon loading="lazy" src={search} width={24} />
                  <div>Qidiruv</div>
                </Search>
                <Link className="bvi-show mobile-none">
                  <Icon loading="lazy" src={eye} width={27} />
                </Link>
                <Dropdown
                  className="header-dropdown"
                  mode="inline"
                  openKeys={openKeys}
                  onOpenChange={onOpenChange}
                  onClick={() => setIsOpen(false)}
                  items={items}
                />
              </Right>
              <Language>
                <Lang width={80} />
              </Language>
            </Wrapper>
            <div style={{ position: "relative" }}>
              {props.children}
              <SearchBoxComp
                $check={isSearchOpen.toString()}
                $uni={props.$uni}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default memo(Header);
