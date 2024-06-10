import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  label {
    cursor: pointer;
    font-size: 16px;
    color: var(--titleDark);
    font-weight: 600;
    user-select: none;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
