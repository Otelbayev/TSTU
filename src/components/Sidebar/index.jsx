import React, { useState } from "react";
import { Container, Wrapper, Icons, Item } from "./style";
import { Lang } from "../Generics";
import Content from "./Content";

export const Sidebar = ({ topData, allData, uni }) => {
  const [hover, setHover] = useState(false);
  const [id, setId] = useState(null);

  const res = topData?.find((e) => e?.id === id);

  return (
    <Wrapper $uni={uni} data-aos="fade-down">
      <div className="top">
        <div className="top-menu">
          {topData
            ?.sort((a, b) => a.position - b.position)
            ?.map((item) => (
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
        data={allData?.filter((e) => e?.parent_id === id || !e.high_menu)}
        id={id}
      />
    </Wrapper>
  );
};

export default Sidebar;
