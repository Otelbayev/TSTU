import styled from "styled-components";
import logo from "../../assets/Galereya/logo.svg?react";
import earth from "../../assets/Galereya/earth.svg?react";
import { NavLink } from "react-router-dom";
import { Button } from "../../components/Generics";

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
Header.Logo = styled(logo)`
  width: 291px;
`;
Header.Right = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;
Header.Link = styled(NavLink)`
  color: #033787;
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
  text-decoration: none;

  display: flex;
  align-items: center;
`;

export const Showcase = styled.div`
  margin-top: 150px;
  position: relative;
`;
export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${({ $col }) => `repeat(${$col}, 1fr)`};
  grid-template-rows: ${({ $row }) => `repeat(${$row}, 1fr)`};
  gap: 10px;
`;
Grid.Item = styled.img`
  grid-column: ${({ $col }) => $col};
  grid-row: ${({ $row }) => $row};
  width: 100%;
  height: 100%;
`;

export const Absolute = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 55%;
`;
Absolute.Title = styled.div`
  color: #033787;
  font-size: 70px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
Absolute.Desc = styled.div`
  color: #636363;
  font-family: Poppins;
  width: 80%;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 28px 0 20px;
`;
Absolute.Btn = styled(Button)`
  display: flex;
  align-items: center;
  padding: 0;
  color: #fff;
  font-size: 19.306px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  padding: 13px 15px 13px 0;
  img {
    width: 74px;
    height: 60px;
  }
`;
