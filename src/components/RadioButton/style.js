import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  label {
    cursor: pointer;
    padding: 0;
    margin: 0;
    font-size: 16px;
    color: var(--titleDark);
    font-weight: 600;
    user-select: none;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  white-space: nowrap;
  gap: 10px;
`;
