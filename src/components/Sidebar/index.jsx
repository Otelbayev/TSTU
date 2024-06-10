import React, { useEffect, useState } from "react";
import { Container, Wrapper, Icons, Item } from "./style";
import { Lang } from "../Generics";
import axios from "axios";
import Content from "./Content";
import { useLanguageContext } from "../../context/LanguageContext";

export const UniversalSidebr = () => {
  const [topData, setTopData] = useState([]);
  const [allData, setAllData] = useState([]);
  const [hover, setHover] = useState(false);
  const [id, setId] = useState(null);

  const { language } = useLanguageContext();

  const getData = async (value, language) =>
    await axios.get(
      language === "uz"
        ? `/api/menu/sitegetallmenu?top_menu=${value}`
        : `/api/menu/sitegetallmenutranslation?language_code=${language}&top_menu=${value}`
    );

  useEffect(() => {
    getData("true", language).then((res) => setTopData(res.data));
    getData("false", language).then((res) =>
      setAllData(res.data?.filter((e) => e?.top_menu === false))
    );
  }, [language]);

  const res = topData?.find((e) => e?.id === id);

  return (
    <Wrapper data-aos="fade-down">
      <div className="top">
        <div className="top-menu">
          {topData.map((item) => (
            <Item
              className="top-menu__item"
              onMouseEnter={() => {
                setId(item.id);
                setHover(true);
              }}
              onMouseLeave={() => {
                setHover(false);
              }}
              key={item.id}
              $hover={id === item.id && hover}
              $check={hover}
              id={id}
            >
              {item.title}
              {id === item.id && hover ? <Icons.Arrow /> : <Icons.Arrow1 />}
            </Item>
          ))}
        </div>
        <div className="top-right">
          <Lang />
        </div>
      </div>
      <Content
        title={res?.title}
        desc={res?.description}
        hover={hover}
        setHover={setHover}
        data={allData.filter((e) => e?.parent_id === id || !e.high_menu)}
        id={id}
      />
    </Wrapper>
  );
};

const Sidebar = () => {
  return (
    <Container>
      <div className="root-container">
        <div className="root-wrapper">
          <UniversalSidebr />
        </div>
      </div>
    </Container>
  );
};

export default Sidebar;
