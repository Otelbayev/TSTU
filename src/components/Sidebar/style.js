import styled, { css } from "styled-components";
import arrowDown from "../../assets/icons/down.svg?react";
import arrowUp from "../../assets/icons/up.svg?react";
import earth from "../../assets/icons/earth.svg?react";
import menu from "../../assets/icons/menu.svg?react";
import { NavLink } from "react-router-dom";

export const Icons = styled.div``;
Icons.Down = styled(arrowDown)`
  @media (max-width: 1250px) {
    width: 10px;
  }
`;
Icons.Up = styled(arrowUp)`
  @media (max-width: 1250px) {
    width: 10px;
  }
`;
Icons.Earth = styled(earth)`
  @media (max-width: 1250px) {
    width: 30px;
  }
`;
Icons.Menu = styled(menu)`
  @media (max-width: 1250px) {
    width: 20px;
  }
`;
export const Container = styled.div`
  position: absolute;
  top: 26px;
  left: 0;
  width: 100%;
  @media (max-width: 1000px) {
    display: none;
  }
`;
const flex = css`
  display: flex;
  align-items: center;
`;
export const Wrapper = styled.div`
  position: relative;
  transition: 30ms;
  @media (max-width: 1000px) {
    display: none;
  }
  z-index: 10;
`;
export const Content = styled.div`
  ${flex}
  justify-content: space-between;
`;
export const Left = styled.div`
  ${flex}
`;
export const Right = styled.div`
  ${flex}
  gap:10px;
  @media (max-width: 1250px) {
    & > div {
      gap: 2px;
    }
  }
`;
export const Item = styled.div`
  transition: 0.3s;
  color: var(--white);
  font-size: 18.147px;
  font-style: normal;
  font-weight: 600;
  border-radius: 3px 3px 0 0;
  padding: 6.5px 9px 8.5px;
  ${flex}
  cursor:pointer;
  white-space: nowrap;
  border-bottom: 2px solid transparent;
  gap: 10px;
  &:hover {
    border-bottom: ${({ $select }) =>
      $select === "false" && "2px solid var(--white)"};
  }
  @media (max-width: 1250px) {
    font-size: 16px;
    padding: 5px 7px;
    gap: 5px;
  }
`;

export const Hover = styled.div`
  background: var(--white);
  padding: 22px;
  position: absolute;
  top: 40px;
  right: 0;
  display: flex;
  align-items: flex-start;
  gap: 25px;
  overflow-x: auto;
  border-radius: 3px;
  &::-webkit-scrollbar {
    height: 4px;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-track {
    background: #d2d2d2;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--bgHover);
  }
`;
Hover.Item = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 30%;
`;
Hover.Links = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  column-gap: 30px;
  height: 400px;
`;
Hover.Title = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--titleDark);
  font-size: 20px;
  text-transform: capitalize;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
Hover.Sub = styled.div`
  color: var(--date);
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding: 5px 0;
  margin-top: ${({ $top }) => $top && "30px"};
`;
Hover.Link = styled(NavLink)`
  transition: 0.3s;
  color: var(--sidebarLink);
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 160%;
  text-decoration: none;
  width: 220px;
  & > div {
    padding: 0px 5px;
    border-bottom: 1px solid #ededed;
    &:hover {
      background: #ededed;
    }
  }
`;
Hover.LinkTitle = styled.div`
  color: var(--sidebarLink);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  text-decoration: none;
  padding: 0px 5px;
  border-bottom: 1px solid #ededed;
  white-space: nowrap;
`;
