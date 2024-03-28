import styled from "styled-components";

export const Content = styled.div`
  overflow: hidden;
  border: 1px solid #a6a6a6;
  border-radius: 3px;
  height: 100%;
  .flex-name {
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30%;
    padding: 10px 5px;
    transform: translateY(-6px);
    .name {
      text-align: center;
      font-size: ${({ $slider }) => ($slider === "true" ? "24px" : "16px")};
      font-weight: ${({ $slider }) => ($slider === "true" ? "700" : "600")};
      line-height: 22px;
      letter-spacing: 0em;
      color: var(--titleDark);
      text-align: center;
      text-decoration: none;
    }
  }
  .img {
    width: 100%;
    height: 70%;
    transition: 0.3s;
    border-radius: 3px 3px 0 0;
    &:hover {
      transform: scale(1.1);
    }
  }
  @media (max-width: 800px) {
    .flex-name {
      .name {
        font-size: ${({ $slider }) => ($slider === "true" ? "20px" : "16px")};
      }
    }
  }
`;
