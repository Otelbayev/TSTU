import { NavLink } from "react-router-dom";
import styled from "styled-components";
import search from "../../../assets/ARM/search.svg?react";
import menu from "../../../assets/icons/menu1.svg?react";

export const Container = styled.div`
  background: #0056b1;
  height: 70px;
`;

export const Link = styled.div`
  cursor: pointer;
  color: #fff;
  font-size: 15px;
  font-style: normal;
  font-family: "Inter";
  font-weight: 600;
  line-height: normal;
  text-decoration: none;
  display: flex;
  align-items: center;
  &:hover {
    color: #fff;
  }
`;
