import React, { memo, useEffect, useState } from "react";
import logo1 from "../../assets/icons/logo1.png";
import logo2 from "../../assets/icons/logo2.png";
import logo3 from "../../assets/icons/logo3.png";
import logo4 from "../../assets/icons/logo4.png";
import logo5 from "../../assets/icons/qsstars2024.png";
import menu from "../../assets/icons/menu1.svg";
import search from "../../assets/icons/search.svg";
import eye from "../../assets/icons/eye.svg";
import { Menu as Antmenu } from "antd";
import { Lang } from "../Generics";
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
  const { i18n } = useTranslation();

  const setNavigate = (type, id, link) => {
    switch (type) {
      case "Link":
        return `${link}`;
      case "Blog":
        return `/${i18n.language}/blog/${id}`;
      case "Page":
        return id
          ? `/${i18n.language}/page/${id}`
          : `/${i18n.language}/${link}`;
      case "Faculty":
        return id
          ? `/${i18n.language}/department/${id}`
          : `/${i18n.language}/faculty`;
      case "Kafedra":
        return id
          ? `/${i18n.language}/department/${id}`
          : `/${i18n.language}/kafedra`;
      case "Department":
        return `/${i18n.language}/department/${id}`;

      case "Havola":
        return `${link}`;
      case "Blog":
        return `/${i18n.language}/blog/${id}`;
      case "Sahifa":
        return id
          ? `/${i18n.language}/page/${id}`
          : `/${i18n.language}/${link}`;
      case "Fakultet":
        return id
          ? `/${i18n.language}/department/${id}`
          : `/${i18n.language}/faculty`;
      case "Bo'lim":
        return `/${i18n.language}/department/${id}`;
      default:
        return "/";
    }
  };

  const { t } = useTranslation();

  const [data, setData] = useState([]);
  const [topMenu, setTopMenu] = useState([]);

  const getData = async (value) => {
    const res = await axios.get(
      i18n.language === "uz"
        ? `${
            import.meta.env.VITE_BASE_URL_API
          }/menu/sitegetallmenu?top_menu=${value}`
        : `${
            import.meta.env.VITE_BASE_URL_API
          }/menu/sitegetallmenutranslation?language_code=${
            i18n.language
          }&top_menu=${value}`
    );

    return res.data;
  };

  useEffect(() => {
    getData("false").then((res) => setData(res));
    getData("true").then((res) => setTopMenu(res));
  }, [i18n.language]);

  const items = topMenu.map((item) => {
    return {
      key: item.id,
      label: !item?.link_ ? (
        item.title
      ) : (
        <NavLink to={`/${i18n.language}/${item?.link_}`}>{item.title}</NavLink>
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
                  // to={
                  //   i.path
                  //     ? `/${i18n.language}/${i.path}`
                  //     : `/${i18n.language}/${
                  //         i?.menu_type_?.title?.toLowerCase() ||
                  //         i?.menu_type_translation_?.menu_type_?.title?.toLowerCase()
                  //       }/${i.id}`
                  // }
                  to={setNavigate(
                    i?.menu_type_?.title ||
                      i?.menu_type_translation_?.menu_type_?.title,
                    i?.blog_?.id ||
                      i?.blog_translation_?.blog_id ||
                      i?.departament_?.id ||
                      i?.departament_translation_?.departament_id ||
                      i?.page_?.id ||
                      i?.page_translation_?.page_id,
                    i?.link_
                  )}
                  target={
                    (i?.link_ && i?.menu_type_?.title === "Link") ||
                    i?.menu_type_?.title === "Link" ||
                    i?.menu_type_?.title === "Havola" ||
                    i?.menu_type_?.title === "Havola"
                      ? "_blank"
                      : "_self"
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
                            // to={`/${i18n.language}/${
                            //   h?.menu_type_?.title?.toLowerCase() ||
                            //   h?.menu_type_translation_?.menu_type_?.title?.toLowerCase()
                            // }/${h.id}`}
                            to={setNavigate(
                              h?.menu_type_?.title ||
                                h?.menu_type_translation_?.menu_type_?.title,
                              h?.blog_?.id ||
                                h?.blog_translation_?.blog_id ||
                                h?.departament_?.id ||
                                h?.departament_translation_?.departament_id ||
                                h?.page_?.id ||
                                h?.page_translation_?.page_id,
                              h?.link_
                            )}
                            target={
                              (h?.link_ && h?.menu_type_?.title === "Link") ||
                              h?.menu_type_?.title === "Link" ||
                              h?.menu_type_?.title === "Havola" ||
                              h?.menu_type_?.title === "Havola"
                                ? "_blank"
                                : "_self"
                            }
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

  const url = window.location.href;
  const objectURL = new URL(url);
  const param = new URLSearchParams(objectURL.search);

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
                <Link
                  to={`/${i18n.language}`}
                  onClick={() =>
                    navigate(window.location.pathname, { replace: true })
                  }
                >
                  <Img loading="lazy" src={logo1} />
                </Link>
                <Div>
                  <Link to={`/${i18n.language}`}>
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
                  <Link
                    target="_blank"
                    to="https://www.topuniversities.com/universities/tashkent-state-transport-university"
                  >
                    <Img
                      loading="lazy"
                      style={{ height: "40px" }}
                      src={logo5}
                      $last="true"
                    />
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
                  <Link to="https://elib.tstu.uz/" target="_blank">
                    {t("header.kutubxona")}
                  </Link>
                  <Link to="http://alumni.tstu.uz/">{t("header.alumni")}</Link>
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
