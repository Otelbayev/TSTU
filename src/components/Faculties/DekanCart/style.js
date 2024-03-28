import styled from "styled-components";
import f from "../../../assets/Faculties/facebook.svg?react";
import w from "../../../assets/Faculties/whatsapp.svg?react";
import i from "../../../assets/Faculties/instagram.svg?react";

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 11px;
`;

Content.Img = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  border: 1px solid #cecece;
`;
Content.Name = styled.div`
  color: #1b192a;
  text-align: center;
  font-size: 24px;
  width: 160px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
Content.Position = styled.div`
  color: #34314f;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  width: 250px;
`;
Content.Media = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

Content.Facebook = styled(f)``;
Content.Whatsup = styled(w)``;
Content.Instagram = styled(i)``;
