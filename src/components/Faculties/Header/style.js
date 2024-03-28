import { NavLink } from "react-router-dom";
import styled from "styled-components";
import arrow from "../../../assets/ARM/SVG.svg";
import search from "../../../assets/ARM/search.svg?react";
import menu from "../../../assets/icons/menu1.svg?react";

export const Container = styled.div`
  background: #0056b1;
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

Content.Logo = styled.img`
  width: 98px;
  height: 68px;
`;

Content.Link = styled(NavLink)`
  color: #fff;
  font-size: 15px;
  font-style: normal;
  font-family: "Inter";
  font-weight: 600;
  line-height: normal;
  text-decoration: none;
  display: flex;
  align-items: center;
  &::after {
    content: url("${arrow}");
    opacity: 0;
    /* padding: 15px; */
    height: 28px;
    padding-left: 5px;
  }
  &:hover {
    &::after {
      opacity: 1;
    }
  }
`;

Content.Right = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  & > div {
    display: flex;
    align-items: center;
    gap: 49px;
  }
  @media (max-width: 1200px) {
    gap: 20px;
    & > div {
      gap: 10px;
    }
  }
`;

Content.Search = styled(search)`
  cursor: pointer;
  padding: 3px;
  margin-left: 5px;
`;

Content.Menu = styled(menu)`
  cursor: pointer;
`;
