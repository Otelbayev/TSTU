import styled from "styled-components";

export const Content = styled.div`
  padding: 50px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 45px;
`;
Content.Item = styled.div`
  border-radius: 10px;
  border: 1px solid var(--borderCart);
  cursor: pointer;
  height: 100%;
  transition: 0.5s;
  &:hover {
    box-shadow: 0 0 15px gray;
  }
`;
Content.Img = styled.img`
  border-radius: 10px;
  width: 100%;
`;
Content.Title = styled.div`
  color: #1c1c1c;
  text-align: center;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding: 10px;
`;

Content.P = styled.div`
  color: #585757;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  padding: 10px;
`;
