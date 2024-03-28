import styled from "styled-components";
import email from "../../../assets/Faculties/email.svg?react";

export const Container = styled.footer`
  /* height: 260px; */
  background: #d9d9d9;
  padding: 25px 0;
`;

export const Content = styled.div`
  display: flex;
  gap: 55px;
`;

Content.Item = styled.div`
  width: 20%;
`;
Content.Title = styled.div`
  padding-bottom: 10px;
  color: #1b192a;
  font-size: 19.5px;
  font-style: normal;
  font-weight: 500;
  line-height: 22.5px;
`;
Content.P = styled.div`
  color: #34314f;
  font-family: "Inter";
  margin: 20px 0;
  font-size: 11.25px;
  font-style: normal;
  font-weight: 400;
  line-height: 16.5px;
`;
Content.Media = styled.div`
  display: flex;
  gap: 10px;
`;
Content.Link = styled.div``;
Content.Contact = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  & > div {
    margin: 5px 0;
    & div {
      white-space: nowrap;
    }
  }
`;
Content.Facebook = styled(email)``;
Content.Whatsapp = styled(email)``;
Content.Instagram = styled(email)``;
Content.Twitter = styled(email)``;
Content.Phone = styled(email)``;
Content.Email = styled(email)``;

Content.Loc = styled.iframe`
  width: 233px;
  height: 160px;
  border: none;
  margin-top: 10px;
`;
