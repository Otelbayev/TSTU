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
} from "./style";

const all = [
  {
    id: 154,
    parent_id: 111,
    title: "Sign in",
    path: "signin",
  },
  {
    id: 155,
    parent_id: 111,
    title: "Structure",
    path: "structure",
  },
  {
    id: 156,
    parent_id: 111,
    title: "Ilmiy markaz",
    path: "scientific-center",
  },
  {
    id: 157,
    parent_id: 111,
    title: "Tarix",
    path: "history",
  },
  {
    id: 158,
    parent_id: 111,
    title: "Sport",
    path: "sport",
  },
  {
    id: 159,
    parent_id: 111,
    title: "Qabul",
    path: "admisson",
  },
  {
    id: 160,
    parent_id: 111,
    title: "Markazlar",
    path: "centers",
  },
  {
    id: 161,
    parent_id: 111,
    title: "Faxriy",
    path: "honorary",
  },
  {
    id: 162,
    parent_id: 111,
    title: "Rektorat",
    path: "rectorat",
  },
  {
    id: 163,
    parent_id: 111,
    title: "Departments",
    path: "departments",
  },
  {
    id: 164,
    parent_id: 111,
    title: "Interaktive xizmatlar",
    path: "interactive-services",
  },
  {
    id: 165,
    parent_id: 111,
    title: "International",
    path: "international",
  },
  {
    id: 166,
    parent_id: 111,
    title: "Department",
    path: "department",
  },
  {
    id: 167,
    parent_id: 111,
    title: "Talaba hayoti",
    path: "student-life",
  },
  {
    id: 168,
    parent_id: 111,
    title: "Faq",
    path: "faq",
  },
  {
    id: 169,
    parent_id: 111,
    title: "Contact",
    path: "contact",
  },
  {
    id: 170,
    parent_id: 111,
    title: "Rektorga murojaat",
    path: "rector",
  },
  {
    id: 171,
    parent_id: 111,
    title: "Yangiliklar",
    path: "news",
  },
  {
    id: 173,
    parent_id: 111,
    title: "Fakultetlar",
    path: "faculties",
  },
  {
    id: 174,
    parent_id: 111,
    title: "Kafedra",
    path: "faculties/faculty-0/kafedra-3",
  },
];

const obj = {
  id: 111,
  parent_id: 0,
  position: 1,
  high_menu: null,
  menu_type_: {
    id: 1,
    title: "Main",
  },
  title: "Asosiy",
  description:
    "Rasmiy veb-sayt, ommaviy axborot vositalari, telegramm-kanal, Facebook sahifalarini axborot bilan ta'minlashi hamda boshqa axborot manbalari bilan ishlab, shu jumladan, matbuot anjumanlari, brifing va press-turlarni tashkil qilish orqali universitet faoliyati haqidagi axborotlarni muntazam, to‘liq va o‘z vaqtida berib borishi kerak.",
  icon_: null,
  link_: null,
  top_menu: true,
  blog_: null,
  page_: null,
  departament_: {
    id: 1,
    title_short: null,
    title: "Rektor",
    parent_id: 0,
    departament_type_: {
      id: 1,
      type: "Rektor",
    },
  },
};

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

  const items = [obj, ...topMenu].map((item) => {
    return {
      key: item.id,
      label: item.title,
      children: [...all, ...data]
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
    // open
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);
      setStateOpenKeys(
        openKeys
          // remove repeat key
          .filter((_, index) => index !== repeatIndex)
          // remove current level all child
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey])
      );
    } else {
      // close
      setStateOpenKeys(openKeys);
    }
  };

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
              <Sidebar
                uni={uni}
                topData={[obj, ...topMenu]}
                allData={[...all, ...data]}
              />
            </Desktop>
          </div>
        </div>
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
