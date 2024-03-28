import { styled } from "styled-components";

export const SearchBox = styled.div`
  position: absolute;
  bottom: ${({ $uni }) => ($uni === "true" ? "-80px" : "-120px")};
  transition: 0.5s;
  transform: ${({ $check }) =>
    $check === "true" ? "translateY(0)" : "translateY(100px)"};
  z-index: ${({ $check }) => ($check === "true" ? 1 : -1)};
  opacity: ${({ $check }) => ($check === "true" ? 1 : 0)};
  width: 100%;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
