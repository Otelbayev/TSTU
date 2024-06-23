import styled from "styled-components";

export const Container = styled.div`
  .ant-select-selector {
    background: transparent !important;
  }
  .ant-select-selection-item {
    color: ${({ $mode }) => ($mode === "light" ? "#01426f" : "#fff")};
    font-weight: 700;
  }
  .ant-select-arrow {
    svg {
      fill: ${({ $mode }) => ($mode === "light" ? "#01426f" : "#fff")};
    }
  }
  @media (max-width: 600px) {
    .select {
      height: 35px !important;
      width: 70px !important;
      font-size: 5px !important;
      padding: 0 !important;
    }
    .ant-select-selection-item,
    .ant-select-item-option-content {
      font-size: 12px !important;
    }
  }
`;
