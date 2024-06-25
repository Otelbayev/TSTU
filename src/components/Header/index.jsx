import React, { memo, useEffect, useState } from "react";
import logo1 from "../../assets/icons/logo1.png";
import logo2 from "../../assets/icons/logo2.png";
import logo3 from "../../assets/icons/logo3.png";
import logo4 from "../../assets/icons/logo4.png";
import menu from "../../assets/icons/menu1.svg";
import search from "../../assets/icons/search.svg";
import eye from "../../assets/icons/eye.svg";
import { Menu as Antmenu } from "antd";
import { Lang } from "../Generics";
import { useLanguageContext } from "../../context/LanguageContext";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Sidebar from "../Sidebar";
import { useTranslation } from "react-i18next";
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
  Mobile,
  Line,
  Desktop,
  SearchBox,
} from "./style";


const Header = ({ uni }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { language } = useLanguageContext();

  const { t } = useTranslation();

  const [data, setData] = useState([]);
  const [topMenu, setTopMenu] = useState([]);

  const getData = async (value) => {
    const res = await axios.get(
      language === "uz"
        ? `/api/menu/sitegetallmenu?top_menu=${value}`
        : `/api/menu/sitegetallmenutranslation?language_code=${language}&top_menu=${value}`
    );

    return res.data;
  };

  useEffect(() => {
    getData("false").then((res) => setData(res));
    getData("true").then((res) => setTopMenu(res));
  }, [language]);

  const items = topMenu.map((item) => {
    return {
      key: item.id,
      label: !item?.link_ ? (
        item.title
      ) : (
        <NavLink to={`/${language}/${item?.link_}`}>{item.title}</NavLink>
      ),
      children:
        !item?.link_ &&
        data
          .filter((i) => i.parent_id === item.id)
          .map((i) => {
            return {
              key: i.id,
              label: i.high_menu ? (
                i.title
              ) : (
                <NavLink
                  onClick={() => setIsOpen(false)}
                  to={
                    i.path
                      ? `/${language}/${i.path}`
                      : `/${language}/${
                          i?.menu_type_?.title?.toLowerCase() ||
                          i?.menu_type_translation_?.menu_type_?.title?.toLowerCase()
                        }/${i.id}`
                  }
                >
                  {i.title}
                </NavLink>
              ),
              children: i.high_menu
                ? data
                    .filter((f) => f.parent_id === i.id)
                    .map((h) => {
                      return {
                        key: h.id,
                        label: (
                          <NavLink
                            onClick={() => setIsOpen(false)}
                            to={`/${language}/${
                              h?.menu_type_?.title?.toLowerCase() ||
                              h?.menu_type_translation_?.menu_type_?.title?.toLowerCase()
                            }/${h.id}`}
                          >
                            {h.title}
                          </NavLink>
                        ),
                      };
                    })
                : null,
            };
          }),
    };
  });

  const getLevelKeys = (items1) => {
    const key = {};
    const func = (items2, level = 1) => {
      items2.forEach((item) => {
        if (item.key) {
          key[item.key] = level;
        }
        if (item.children) {
          func(item.children, level + 1);
        }
      });
    };
    func(items1);
    return key;
  };

  const levelKeys = getLevelKeys(items);

  const [stateOpenKeys, setStateOpenKeys] = useState([]);

  const onOpenChange = (openKeys) => {
    const currentOpenKey = openKeys.find(
      (key) => stateOpenKeys.indexOf(key) === -1
    );

    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);
      setStateOpenKeys(
        openKeys
          .filter((_, index) => index !== repeatIndex)
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey])
      );
    } else {
      setStateOpenKeys(openKeys);
    }
  };

  useEffect(() => {
    setIsSearchOpen(false);
  }, [window.location.pathname]);

  return (
    <div style={{ position: "relative" }}>
      <Container $uni={uni}>
        <div className="root-container">
          <div className="root-wrapper">
            <Wrapper>
              <Menus style={{ width: "70px" }}>
                <Menu
                  loading="lazy"
                  src={menu}
                  onClick={() => {
                    setIsOpen(!isOpen);
                    setStateOpenKeys([]);
                  }}
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
              <Right>
                <div className="item-desktop">
                  <Link
                    target="_blank"
                    to="https://student.tstu.uz/dashboard/login"
                  >
                    {t("header.talaba")}
                  </Link>
                  <Link
                    target="_blank"
                    to="https://hemis.tstu.uz/dashboard/login"
                  >
                    {t("header.xodim")}
                  </Link>
                  <Link to="/arm">{t("header.kutubxona")}</Link>
                  <Link>{t("header.alumni")}</Link>
                  <Search onClick={() => setIsSearchOpen(!isSearchOpen)}>
                    <Icon loading="lazy" src={search} width={24} />
                    <div>{t("header.qidiruv")}</div>
                  </Search>
                  <Link className="bvi-show">
                    <Icon loading="lazy" src={eye} width={27} />
                  </Link>
                </div>
              </Right>
              <Language>
                <Lang width={80} />
              </Language>
            </Wrapper>
            <Desktop>
              {uni && <Line />}
              <Sidebar uni={uni} topData={topMenu} allData={data} />
            </Desktop>
          </div>
        </div>
        <SearchBox $isopen={isSearchOpen.toString()}>
          <div className="root-container">
            <div className="root-wrapper">
              <input type="text" placeholder={`${t("header.qidiruv")}...`} />
            </div>
          </div>
        </SearchBox>
      </Container>
      <Mobile $isopen={isOpen.toString()}>
        <Antmenu
          mode="inline"
          openKeys={stateOpenKeys}
          onOpenChange={onOpenChange}
          theme="dark"
          items={items}
        />
      </Mobile>
    </div>
  );
};

export default memo(Header);
