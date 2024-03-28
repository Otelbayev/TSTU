import React, { useState } from "react";
import { sidebar, hoverContent, umumiySidebar } from "../../utils/sidebar";
import {
  Container,
  Wrapper,
  Content,
  Left,
  Right,
  Item,
  Icons,
  Hover,
} from "./style";
import { useNavigate } from "react-router-dom";
import { Lang } from "../Generics";

export const UniversalSidebr = () => {
  const [hover, setHover] = useState(null);
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  return (
    <Wrapper data-aos="fade-down">
      <Content>
        <Left>
          {sidebar.map(({ id, content, isSelect, path }) => (
            <Item
              onMouseEnter={() => setHover(id)}
              onMouseLeave={() => setHover(null)}
              $select={isSelect ? "true" : "false"}
              key={id}
              onClick={() => isSelect === false && navigate(path)}
              style={{
                background: !path && hover == id && "var(--white)",
                color: !path && hover == id && "var(--titleDark)",
              }}
            >
              {content}
              {isSelect && (id === hover ? <Icons.Up /> : <Icons.Down />)}
            </Item>
          ))}
        </Left>
        <Right>
          <Lang />
          <Item onClick={() => setMenu(!menu)}>
            <Icons.Menu />
          </Item>
        </Right>
      </Content>
      {hoverContent.map(
        (item) =>
          item?.id === hover && (
            <Hover
              key={item.id}
              onMouseEnter={() => setHover(item.id)}
              onMouseLeave={() => setHover(null)}
            >
              <Hover.Item>
                <Hover.Title>
                  {item?.icon} {item?.title}
                </Hover.Title>
                <Hover.Sub $top="true">{item?.desc}</Hover.Sub>
              </Hover.Item>
              <Hover.Links>
                {item?.links?.map(({ id, path, link, title }) =>
                  title ? (
                    <Hover.Sub key={id}>{title}</Hover.Sub>
                  ) : (
                    <Hover.Link
                      key={id}
                      to={path}
                      onClick={() => setHover(null)}
                    >
                      <div>{link}</div>
                    </Hover.Link>
                  )
                )}
              </Hover.Links>
            </Hover>
          )
      )}
      {menu && (
        <Hover
          onMouseEnter={() => setMenu(true)}
          onMouseLeave={() => setMenu(false)}
          style={{
            width: "100%",
            overflow: "auto",
            justifyContent: "space-between",
          }}
        >
          {umumiySidebar.map((item) => (
            <div key={item.id}>
              <Hover.Title style={{ marginBottom: "10px" }}>
                {item.title}
              </Hover.Title>
              {item.links.map((e) => (
                <div key={e.id}>
                  {e.name && (
                    <Hover.Link to="/" style={{ fontSize: "14px" }}>
                      <div>{e.name}</div>
                    </Hover.Link>
                  )}
                  {e.title && (
                    <Hover.LinkTitle style={{ padding: "10px 0" }}>
                      <span>{e.title}</span>
                    </Hover.LinkTitle>
                  )}
                </div>
              ))}
            </div>
          ))}
        </Hover>
      )}
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
