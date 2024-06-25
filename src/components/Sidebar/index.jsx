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
          {topData
            ?.sort((a, b) => a.position - b.position)
            ?.map((item) => (
              <Item
                className="top-menu__item"
                onMouseEnter={() => {
                  if (!item?.link_) {
                    setId(item.id);
                    setHover(true);
                  }
                }}
                onMouseLeave={() => {
                  setHover(false);
                }}
                onClick={() => {
                  if (item?.link_) {
                    navigate(`/${language}/${item?.link_}`);
                  }
                }}
                key={item.id}
                $hover={id === item.id && hover}
                $check={hover}
                id={id}
                $link={item?.link_}
              >
                {item.title}
                {!item?.link_ ? (
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
          <div className="top-right__all">
            <Icons.Menu
              onMouseEnter={() => {
                setHover(true);
                setId("alldata");
              }}
              onMouseLeave={() => setHover(false)}
              onClick={() => setHover(!hover)}
            />
          </div>
        </div>
      </div>
      <Content
        title={res?.title}
        desc={res?.description}
        hover={hover}
        setHover={setHover}
        data={allData?.filter(
          (e) => e?.parent_id === id || !e.high_menu || id === "alldata"
        )}
        id={id}
      />
    </Wrapper>
  );
};

export default Sidebar;
