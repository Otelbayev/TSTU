import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

const flex = css`
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  background-color: var(--bgSidebar);
  min-height: 50px;
  padding: 7px 0;
  @media (max-width: 1000px) {
    height: auto;
    padding: 11px 0;
  }
`;

export const Wrapper = styled.div`
  ${flex}
  justify-content: space-between;
`;

export const Left = styled.div`
  ${flex}
  gap:20px;
  @media screen and (max-width: 1100px) {
    gap: 10px;
  }
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;
export const Div = styled.div`
  ${flex}
  gap:20px;
  @media screen and (max-width: 1100px) {
    gap: 10px;
  }
  @media screen and (max-width: 500px) {
    img {
      width: auto;
      height: 28px;
    }
  }
`;
export const Img = styled.img`
  background: ${(props) => props.$last && "var(--white)"};
  border-radius: ${(props) => props.$last && "5px"};
  padding: ${(props) => props.$last && "2px"};
  @media screen and (max-width: 500px) {
    height: 32px;
    width: 129px;
  }
`;

export const Right = styled.div`
  ${flex};
  gap: 30px;
  .header-dropdown {
    display: none;
  }
  @media screen and (max-width: 1200px) {
    gap: 10px;
  }
  @media screen and (max-width: 1000px) {
    transition: 0.5s;
    position: absolute;
    z-index: 1;
    flex-direction: column;
    background: var(--bgSidebar);
    top: 112px;
    border-top: 1px solid #a6a6a6;
    width: 100%;
    left: 0;
    align-items: flex-start;
    gap: 20px;
    transform: ${({ $isopen }) =>
      $isopen === "false" ? "translateY(-500px)" : "translateY(0)"};
    .header-dropdown {
      display: block;
      width: 100%;
      background: transparent;
      color: #fff;
      border-right: none !important;
      & > li {
        border-bottom: 1px solid #a6a6a6;
        border-radius: 0;
      }
    }
    .mobile-none {
      display: none;
    }
  }
  @media screen and (max-width: 500px) {
    top: 92px;
  }
`;
export const Link = styled(NavLink)`
  ${flex}
  gap:4px;
  font-weight: 400;
  font-size: 18px;
  color: var(--white);
  text-decoration: none;
  @media screen and (max-width: 1100px) {
    font-size: 16px;
  }
  &:hover {
    color: #fff;
  }
`;

export const Menus = styled.div`
  width: 70px;
  display: none;
  @media screen and (max-width: 1000px) {
    display: block;
  }
`;

export const Menu = styled.img`
  cursor: pointer;
  width: 25px;
`;

export const Language = styled.div`
  display: none;

  @media screen and (max-width: 1000px) {
    ${flex}
    justify-content: flex-end;
  }
`;
export const Icon = styled.img`
  width: ${({ x }) => x && "20px"};
  cursor: ${({ x }) => x && "pointer"};
  position: ${({ x }) => x && "absolute"};
  right: ${({ x }) => x && "30px"};
  display: ${({ x }) => x && "none"};
  @media screen and (max-width: 1000px) {
    display: ${({ x }) => x && "block"};
    width: 18px;
  }
`;

export const Select = styled.select`
  border: none;
  background: transparent;
  color: var(--white);
  outline: none;
  cursor: pointer;
  font-size: 16px;
`;

export const Search = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    font-weight: 400;
    font-size: 18px;
    color: var(--white);
    text-decoration: none;
    @media screen and (max-width: 1100px) {
      font-size: 16px;
    }
  }
`;
