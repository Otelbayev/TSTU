import React, { useState } from "react";
import { Wrapper, Icons, Item } from "./style";
import { Lang } from "../Generics";
import Content from "./Content";
import { useNavigate } from "react-router-dom";
import { useLanguageContext } from "../../context/LanguageContext";

export const Sidebar = ({ topData, allData, uni }) => {
  const [hover, setHover] = useState(false);
  const [id, setId] = useState(null);

  const res = topData?.find((e) => e?.id === id);

  const { language } = useLanguageContext();

  const navigate = useNavigate();

  return (
    <Wrapper $hover={hover} $uni={uni} data-aos="fade-down">
      <div className="top">
        <div className="top-menu">
          {[
            {
              id: 0,
              title: "Yangiliklar",
              parent_id: 0,
              position: 1,
              top_menu: true,
              link: "blog",
            },
            {
              id: 0,
              title: "E’lonlar",
              parent_id: 0,
              position: 1,
              top_menu: true,
              link: "blog",
            },
            ...topData,
          ]
            ?.sort((a, b) => a.position - b.position)
            ?.map((item) => (
              <Item
                className="top-menu__item"
                onMouseEnter={() => {
                  if (!item?.link) {
                    setId(item.id);
                    setHover(true);
                  }
                }}
                onMouseLeave={() => {
                  setHover(false);
                }}
                onClick={() => {
                  if (item?.link) {
                    navigate(`/${language}/${item?.link}`);
                  }
                }}
                key={item.id}
                $hover={id === item.id && hover}
                $check={hover}
                id={id}
                link={item?.link}
              >
                {item.title}
                {!item?.link ? (
                  id === item.id && hover ? (
                    <Icons.Arrow />
                  ) : (
                    <Icons.Arrow1 />
                  )
                ) : null}
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
        data={allData?.filter((e) => e?.parent_id === id || !e.high_menu)}
        id={id}
      />
    </Wrapper>
  );
};

export default Sidebar;
