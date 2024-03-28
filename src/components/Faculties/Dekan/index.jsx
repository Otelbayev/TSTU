import React from "react";
import { Dekan } from "./style";
import { useNavigate } from "react-router-dom";

const Dekans = ({ img, name, position, phone, email, li, button }) => {
  const naviagte = useNavigate();
  return (
    <Dekan>
      <Dekan.Left data-aos="fade-right">
        <Dekan.Img src={img} />
      </Dekan.Left>
      <Dekan.Right data-aos="fade-left">
        <Dekan.Name>{name}</Dekan.Name>
        <Dekan.Contact>
          <Dekan.User />
          <div>{position}</div>
        </Dekan.Contact>
        <Dekan.Contact>
          <Dekan.Phone />
          <div>{phone}</div>
        </Dekan.Contact>
        <Dekan.Contact>
          <Dekan.Email />
          <div>{email}</div>
        </Dekan.Contact>
        <Dekan.Ul>
          {li.map((e) => (
            <Dekan.Li key={e}> {e}</Dekan.Li>
          ))}
        </Dekan.Ul>
        <Dekan.Btn type="primary" onClick={() => naviagte(`${button}`)}>
          Biz haqimizda
        </Dekan.Btn>
      </Dekan.Right>
    </Dekan>
  );
};

export default Dekans;
