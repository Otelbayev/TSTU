import React, { useState } from "react";
import callCenter from "../../assets/images/callRector.png";
import { Content, Item } from "./style";
import Oferma from "./Oferma";
import Check from "./Check";
import Form from "./Form";

const Rector = () => {
  const [send, setSend] = useState(true);
  const [check, setCheck] = useState(false);
  const [oferma, setOferma] = useState(false);

  const onItemClick = ({ target: { id } }) => {
    switch (id) {
      case "send":
        setSend(true);
        setCheck(false);
        setOferma(false);
        break;
      case "check":
        setSend(false);
        setCheck(true);
        setOferma(false);
        break;
      case "oferma":
        setSend(false);
        setCheck(false);
        setOferma(true);
        break;
    }
  };

  return (
    <div className="root-container">
      <div className="root-wrapper">
        <Content data-aos="fade-up">
          <div className="content">
            <div className="content__left">
              <div className="content__left__title">
                Toshkent davlat Transport universiteti rektori
                <span className="content__left__title__span">
                  Abduraxmonov Odil Kalandarovich
                </span>
                virtual qabulxonasi
              </div>
              <div className="content__left__img">
                <img loading="lazy" src={callCenter} alt="" />
              </div>
            </div>
            <div className="content__right">
              <div className="content__right__top">
                <Item
                  type={send.toString()}
                  className="content__right__top__item"
                  onClick={onItemClick}
                  id={"send"}
                >
                  Murojat yuborish
                </Item>
                <Item
                  type={check.toString()}
                  className="content__right__top__item"
                  onClick={onItemClick}
                  id={"check"}
                >
                  Murojatni tekshirish
                </Item>
                <Item
                  type={oferma.toString()}
                  className="content__right__top__item"
                  onClick={onItemClick}
                  id={"oferma"}
                >
                  Ommaviy offerta
                </Item>
              </div>
              <div className="content__right__desc">
                {send &&
                  "Sizda hal etilmagan masalalar, muammolar, ariza, shikoyat yoki takliflar bormi? U holda murojaatingizni to‘g‘ridan-to‘g‘ri Toshkent davlat transport universiteti rektoriga yuborishingiz mumkin."}
                {check &&
                  "Murojatni tekshirish uchun elektron pochta manjilingizni kiriting"}
                {oferma && ""}
              </div>
              {send && <Form />}
              {check && <Check />}
              {oferma && <Oferma />}
            </div>
          </div>
        </Content>
      </div>
    </div>
  );
};

export default Rector;
