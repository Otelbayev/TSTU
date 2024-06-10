import styled from "styled-components";
import user from "../../../assets/Faculties/user.svg?react";
import phone from "../../../assets/Faculties/phone.svg?react";
import email from "../../../assets/Faculties/email.svg?react";
import { Button } from "../../Generics";

export const Dekan = styled.div`
  display: flex;
  gap: 40px;
  padding: 50px 0;
`;
Dekan.Left = styled.div``;
Dekan.Right = styled.div``;
Dekan.Img = styled.img`
  width: 100%;
  height: 500px;
  border-radius: 22px;
  border: 1px solid #cecece;
`;
Dekan.Name = styled.div`
  color: #1c1c1c;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px;
  margin-bottom: 18px;
`;
Dekan.Btn = styled(Button)`
  padding: 7px 40px;
  color: var(--white);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
`;
Dekan.Contact = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 8px 0;
  div {
    color: #a6a6a6;
    font-family: "Inter";
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    width: 200px;
  }
`;
Dekan.Ul = styled.ul`
  margin: 16px 0;
  transform: translateX(20px);
  /* width: 90%; */
`;
Dekan.Li = styled.li`
  color: #585757;
  font-family: "Inter";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px; /* 150% */
  letter-spacing: -0.3px;
`;
Dekan.User = styled(user)``;
Dekan.Phone = styled(phone)``;
Dekan.Email = styled(email)``;
