import React from "react";
import { Dekan } from "./style";
import { useLanguageContext } from "../../../context/LanguageContext";
import { useNavigate } from "react-router-dom";

const Dekans = ({ data }) => {
  const { language } = useLanguageContext();

  const naviagte = useNavigate();
  return (
    <Dekan>
      <Dekan.Left data-aos="fade-right">
        <Dekan.Img
          loading="lazy"
          src={`/public/api/${data?.persons_?.img_?.url}`}
        />
      </Dekan.Left>
      <Dekan.Right data-aos="fade-left">
        <Dekan.Name>
          {data?.persons_?.firstName} {data?.persons_?.lastName}{" "}
          {data?.persons_?.fathers_name}
        </Dekan.Name>
        <Dekan.Contact>
          <Dekan.User />
          <div>{data?.degree}</div>
        </Dekan.Contact>
        <Dekan.Contact>
          <Dekan.Phone />
          <div>{data?.phone_number1}</div>
        </Dekan.Contact>
        <Dekan.Contact>
          <Dekan.Email />
          <div>{data?.persons_?.email}</div>
        </Dekan.Contact>
        <Dekan.Ul>
          {data?.experience_json?.split(";").map((e, index) => (
            <Dekan.Li key={index}>{e}.</Dekan.Li>
          ))}{" "}
        </Dekan.Ul>

        <Dekan.Btn
          type="primary"
          onClick={() =>
            naviagte(
              `/${language}/employee/${
                language === "uz" ? data?.id : data?.persons_id
              }`
            )
          }
        >
          Batafsil
        </Dekan.Btn>
      </Dekan.Right>
    </Dekan>
  );
};

export default Dekans;
