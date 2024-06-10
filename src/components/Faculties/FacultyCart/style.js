import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 200px;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
`;

Content.Front = styled.div`
  cursor: pointer;
  transition: 0.3s;
  width: 100%;
  height: 100%;
  border-radius: 3px;
  border: 1px solid #cecece;
  background: #fdfdfd;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 19px 16px;
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
`;
Content.Title = styled.div`
  color: var(--titleDark);
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  padding: 16px;
`;
Content.Icon = styled.img`
  width: 64px;
`;
