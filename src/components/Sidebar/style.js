import styled, { css } from "styled-components";
import arrowDown from "../../assets/icons/down.svg?react";
import arrowUp from "../../assets/icons/up.svg?react";
import earth from "../../assets/icons/earth.svg?react";
import menu from "../../assets/icons/menu.svg?react";

export const Wrapper = styled.div`
  height: 50px;
  margin-top: ${({ $uni }) => !$uni && "30px"};
  .top {
    display: flex;
    align-items: end;
    justify-content: space-between;
    .top-menu {
      display: flex;
      gap: 5px;
    }
  }
`;

export const Item = styled.div`
  transition: 0.3s;
  color: ${({ $hover }) => ($hover ? "var(--titleDark)" : "#fff")};
  background-color: ${({ $hover }) => ($hover ? "#fff" : "")};
  display: flex;
  gap: 5px;
  font-size: 14px;
  font-family: "Source Sans Pro";
  font-weight: 600;
  align-items: center;
  white-space: nowrap;
  cursor: pointer;
  padding: 5px 8px;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
  ${({ $hover }) =>
    $hover
      ? css`
          background-color: #fff;
          color: var(--titleDark);
        `
      : css`
          &:hover {
            background-color: "";
            color: #fff;
          }
        `}
`;

export const Icons = styled.div``;

Icons.Arrow = styled(arrowUp)``;
Icons.Arrow1 = styled(arrowDown)``;
