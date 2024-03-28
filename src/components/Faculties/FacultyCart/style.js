import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 200px;
`;

export const Content = styled.div`
  position: absolute;
  transform-style: preserve-3d;
  width: 100%;
  height: 100%;
  transition: all 0.8s ease;
  &:hover {
    transform: rotateY(180deg);
  }
`;

Content.Front = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 3px;
  border: 1px solid #cecece;
  background: #fdfdfd;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 19px 16px;
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

Content.Back = styled.div`
  position: absolute;
  width: 100%;
  height: 200px;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  cursor: pointer;
  border-radius: 3px;
  img {
    position: absolute;
    top: 0;
    left: 0;
    height: 200px;
    border-radius: 3px;
    width: 100%;
    z-index: -1;
  }
`;

Content.MinTitle = styled.div`
  color: var(--titleLight);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  padding: 18px 10px;
`;
