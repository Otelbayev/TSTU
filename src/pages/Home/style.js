import styled, { css } from "styled-components";
import icon1 from "../../assets/icons/university-03.svg?react";
import icon2 from "../../assets/icons/university-20.svg?react";
import icon3 from "../../assets/icons/university-26.svg?react";
import icon4 from "../../assets/icons/university-07.svg?react";
import icon5 from "../../assets/icons/university-18.svg?react";
import icon6 from "../../assets/icons/university-09.svg?react";
import intIcon4 from "../../assets/icons/intIcon4.svg?react";
import bigDarkArrow from "../../assets/icons/darkArrow.svg?react";
import lightArrow from "../../assets/icons/arrow-light.svg?react";
import darkArrow from "../../assets/icons/arrow-dark.svg?react";
import filter from "../../assets/images/filterBg.png";
import bggg from "../../assets/images/bggggg.png";

export const Icons = styled.div``;
const iconStyle = css`
  margin-bottom: 14px;
  width: 70px;
  height: 70px;
  @media only screen and (min-width: 600px) and (max-width: 1023px) {
    width: 60px;
    height: 60px;
    margin-bottom: 0px;
  }
`;
Icons.Icon1 = styled(icon1)`
  ${iconStyle}
`;
Icons.Icon2 = styled(icon2)`
  ${iconStyle}
`;
Icons.Icon3 = styled(icon3)`
  ${iconStyle}
`;
Icons.Icon4 = styled(icon4)`
  ${iconStyle}
`;
Icons.Icon5 = styled(icon5)`
  ${iconStyle}
`;
Icons.Icon6 = styled(icon6)`
  ${iconStyle}
`;
Icons.LightArrow = styled(lightArrow)``;
Icons.DarkArrow = styled(darkArrow)`
  transform: translateY(3px);
`;
Icons.BigDarkArrow = styled(bigDarkArrow)`
  transform: translateY(5px);
`;
Icons.Int4 = styled(intIcon4)`
  width: 75px;
  height: 75px;
`;
Icons.ArrowLight = styled(lightArrow)``;
Icons.ArrowDark = styled(bigDarkArrow)``;

const scrollStyle = css`
  &::-webkit-scrollbar {
    width: 4px;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-track {
    background: #d2d2d2;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--bgHover);
  }
`;
export const About = styled.div`
  background: url(${bggg});
  color: var(--white);
  text-align: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 37px 0 30px;
  .about {
    &__title {
      color: var(--titleLight);
      text-align: center;
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
    }
    &__desc {
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
      padding: 20px 160px 0;
      color: var(--titleLight);
    }
    &__boxes {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 40px 0;
      gap: 80px;
      &__box {
        &__count {
          color: var(--white);
          font-size: 23.771px;
          font-style: normal;
          font-weight: 500;
          line-height: 120%;
        }
        &__min {
          font-size: 12.678px;
          font-style: normal;
          font-weight: 400;
          line-height: 140%;
        }
      }
    }
    &__button {
      font-size: 16px;
      border-radius: 7px;
      padding: 7px 38px;
    }
  }
  @media only screen and (min-width: 600px) and (max-width: 1023px) {
    .about {
      &__desc {
        padding: 10px 15px;
      }
      &__boxes {
        flex-wrap: wrap;
        margin: 0;
        gap: 0;
        &__box {
          width: 30%;
          margin: 20px 0;
        }
      }
    }
  }
  @media only screen and (max-width: 599px) {
    .about {
      display: flex;
      flex-direction: column;
      &__title {
        text-align: start;
        border-left: 3px solid var(--titleLight);
        padding-left: 8px;
        font-size: 22px;
        order: 1;
      }
      &__desc {
        text-align: start;
        order: 2;
        padding: 0;
        font-size: 16px;
        padding-top: 10px;
      }
      &__boxes {
        flex-wrap: wrap;
        margin: 0;
        order: 4;
        gap: 0;
        &__box {
          text-align: center;
          width: 50%;
          margin: 15px 0;
        }
      }
      &__button {
        order: 3;
        display: inline-block;
        width: 165px;
        font-size: 12px;
        padding: 5px;
        margin-top: 20px;
      }
    }
  }
`;
export const Layout = styled.div`
  margin: 40px 0 20px;
  .flex {
    display: grid;
    margin: 20px 0;
    grid-template-rows: 300px 300px;
    gap: 10px;
    &__item1 {
      grid-column: 1/3;
    }
    &__item2 {
      grid-column: 3/4;
    }
    &__item3 {
      grid-column: 4/5;
    }
    &__item4 {
      grid-column: 1/2;
    }
    &__item5 {
      grid-column: 2/3;
    }
    &__item6 {
      grid-column: 3/5;
    }
    @media (max-width: 900px) {
      grid-template-rows: repeat(3, auto);
      &__item1 {
        grid-column: 1/2;
      }
      &__item2 {
        grid-column: 2/3;
      }
      &__item3 {
        grid-column: 1/2;
      }
      &__item4 {
        grid-column: 2/3;
      }
      &__item5 {
        grid-column: 1/2;
      }
      &__item6 {
        grid-column: 2/3;
      }
    }
    @media (max-width: 650px) {
      grid-template-rows: 300px auto auto 300px auto auto;
      &__item1 {
        grid-column: 1/2;
        order: 1;
      }
      &__item2 {
        grid-column: 1/2;
        order: 2;
      }
      &__item3 {
        grid-column: 1/2;
        order: 3;
      }
      &__item4 {
        grid-column: 1/2;
        order: 6;
      }
      &__item5 {
        grid-column: 1/2;
        order: 5;
      }
      &__item6 {
        grid-column: 1/2;
        order: 4;
      }
    }
  }
  .grid {
    display: grid;
    grid-template-columns: 315px 1fr 1fr;
    grid-template-rows: 527px;
    grid-auto-flow: column;
    grid-gap: 7px;
    margin: 30px 0;
    &__item {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 7px;
    }
    &__large {
      position: relative;
      &__img {
        width: 100%;
        height: 100%;
        border-radius: 3px;
      }
    }
    &__news {
      display: flex;
      flex-direction: column;
      gap: 10px;
      overflow-y: scroll;
      height: 100%;
      padding-right: 5px;
      ${scrollStyle}
    }
    @media (max-width: 950px) {
      grid-template-columns: 1fr;
      grid-template-rows: 300px 400px 527px;
      &__item {
        flex-direction: row;
      }
    }
    @media (max-width: 600px) {
      grid-template-columns: 1fr;
      grid-template-rows: 600px 600px 527px;
      &__item {
        flex-direction: column;
      }
      .first {
        order: 2;
      }
      .second {
        order: 1;
      }
      .thrid {
        order: 3;
      }
    }
  }
  .next {
    position: absolute;
    right: 0;
    bottom: 20px;
    background: var(--bgHover);
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .student {
    position: absolute;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 20px;
    bottom: 0;
    top: 0;
    left: 0;
    &__img {
      border-radius: 50%;
      width: 150px;
      height: 150px;
      margin-bottom: 17px;
    }
    &__name {
      color: var(--white);
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: 18.2px; /* 91% */
    }
    &__group {
      color: var(--white);
      text-shadow: 0px 2px 12px var(--black);
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 18.2px; /* 113.75% */
    }
    &__p {
      margin-top: 10px;
      color: var(--white);
      text-shadow: 0px 2px 12px var(--black);
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 18.2px;
    }
  }
`;
export const DarkSection = styled.div`
  padding: 50px 0 50px;
  background: url(${bggg});
  background-repeat: no-repeat;
  background-size: cover;
  .tadqiqot {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 50px 0;
    &__item {
      text-align: center;
      &__title {
        color: var(--titleLight);
        font-size: 30px;
        font-style: normal;
        font-weight: 700;
        padding-bottom: 10px;
        border-bottom: 2px solid #99d8ff;
      }
      &__count {
        color: var(--titleLight);
        font-size: 37px;
        font-style: normal;
        font-weight: 700;
        padding-top: 10px;
      }
      &__p {
        color: var(--white);
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 18.2px;
      }
    }
  }
  .markaz {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    transition: 0.4s;
    padding-top: 50px;
    gap: 8px;
  }
  @media only screen and (max-width: 1100px) {
    .markaz {
      grid-template-columns: 1fr 1fr;
      padding: 30px 0;
    }
  }
  @media only screen and (max-width: 560px) {
    .markaz {
      grid-template-columns: 1fr;
      padding: 15px 0;
    }
  }
  @media only screen and (max-width: 776px) {
    .tadqiqot {
      grid-template-columns: 1fr;
      border-top: 2px solid #99d8ff;
      border-bottom: 2px solid #99d8ff;
      padding: 20px 0;
      margin: 20px 0;
      gap: 15px;
      &__item {
        text-align: start;
        .mobile-flex {
          display: flex;
          gap: 10px;
        }
        &__title {
          padding-bottom: 0;
          border-bottom: 0;
          font-size: 22px;
        }
        &__count {
          padding-top: 0;
          font-size: 22px;
        }
        &__p {
          font-size: 14px;
        }
      }
    }
    .markaz {
      flex-direction: column;
      height: auto;
      justify-content: center;
      align-items: center;
    }
  }
`;
export const InteraktiveCarts = styled.div`
  margin-bottom: 20px;
  .first {
    background: var(--white);
    border-radius: 3px;
    margin: 50px 0 15px;
    display: flex;
    justify-content: space-between;
    padding: 20px 20px 0 20px;
    &__left {
      width: 35%;
      &__title {
        color: var(--titleDark);
        font-size: 32px;
        font-style: normal;
        font-weight: 600;
        line-height: 119%;
        cursor: pointer;
        text-decoration: none;
        display: block;
        margin-top: 20px;
      }
    }
    &__right {
      transform: translateY(-50px);
      display: flex;
      align-items: flex-end;
      width: 65%;
      &__macbook {
        max-width: 340px;
        max-height: 200px;
        height: 45%;
        width: 40%;
      }
      &__imac {
        max-width: 400px;
        height: 350px;
        width: 60%;
      }
    }
  }
  .second {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
  }
  @media only screen and (max-width: 1023px) {
    .first {
      padding: 20px;
      &__left {
        width: 50%;
        &__title {
          font-size: 25px;
          margin-top: 10px;
        }
      }
      &__right {
        transform: translateY(0);
        width: 50%;
        &__macbook {
          width: 40%;
          height: auto;
        }
        &__imac {
          width: 60%;
          height: auto;
        }
      }
    }
    .second {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media only screen and (max-width: 650px) {
    .first {
      flex-wrap: wrap;
      height: auto;
      gap: 30px;
      margin: 25px 0 10px;
      &__left {
        width: 100%;
        display: flex;
        &__title {
          padding-left: 20px;
          font-size: 20px;
        }
      }
      &__right {
        width: 100%;
      }
    }
    .second {
      grid-template-columns: 1fr;
      gap: 10px;
    }
  }
`;
export const Fakultetlar = styled.div`
  margin: 50px 0;
`;
export const FakGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 12px;
  height: 530px;
  margin: 30px 0;
  .fak-left {
    grid-column: 1 / 3;
    overflow-y: auto;
    direction: rtl;
    margin: 0;
    ${scrollStyle}
    &__content {
      direction: ltr;
      padding-left: 10px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
  .wrap {
    grid-column: 3 / 6;
    overflow-y: auto;
    padding-right: 5px;
    ${scrollStyle}
    .fak-right {
      border-radius: 3px;
      background: var(--fakBg);
      min-height: 530px;
      padding: 18px;
      &__title {
        margin-bottom: 20px;
        color: var(--fakColor);
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        text-align: center;
        line-height: 140%;
      }
      &__cards {
        cursor: pointer;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 15px;
      }
    }
  }
  @media only screen and (max-width: 1023px) {
    height: 750px;
    grid-template-columns: 1fr;
    .fak-left {
      grid-column: 1/2;
    }
    .wrap {
      grid-column: 1/2;
    }
  }
  @media only screen and (max-width: 599px) {
    .fak-left {
      &__content {
        padding-left: 5px;
        &__item {
          &__title {
            font-size: 16px;
          }
        }
      }
    }
    .wrap {
      padding-right: 5px;
      .fak-right {
        &__cards {
          grid-template-columns: repeat(2, 1fr);
        }
      }
    }
  }
`;
export const Talim = styled.div`
  margin: 50px 0;
  .slider {
    margin-top: 20px;
    padding: 10px 0;
    &__item {
      border-radius: 5px;
      padding: 0 10px;
    }
  }
  @media (max-width: 900px) {
    .slider {
      &__item {
        padding: 0 5px;
      }
    }
  }
`;
export const Faxriy = styled.div`
  background: url(${filter});
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 30px;
  .faxriyAbs__img {
    width: 100%;
    min-height: 600px;
  }
  .content {
    padding: 50px 0;
    text-align: center;
    &__img {
      width: 230px;
      height: 230px;
      border-radius: 50%;
      margin-bottom: 6px;
    }
    &__name {
      color: var(--white);
      text-align: center;
      font-size: 25px;
      font-style: normal;
      font-weight: 600;
      line-height: 140%; /* 35px */
    }
    &__sub {
      color: var(--white);
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: 140%;
    }
    &__p {
      padding: 10px 20px;
      color: var(--white);
      text-align: center;
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: 140%; /* 28px */
    }
  }
  @media only screen and (max-width: 1023px) {
    .faxriyAbs__img {
      width: 100%;
      min-height: 500px;
    }
    .content {
      &__img {
        width: 200px;
        height: 200px;
      }
      &__name {
        font-size: 22px;
      }
      &__sub {
        font-size: 17px;
      }
      &__p {
        font-size: 14px;
      }
    }
  }
  @media only screen and (max-width: 599px) {
    padding: 20px 0;
    .faxriyAbs__img {
      width: 100%;
      min-height: 470px;
    }
    .content {
      &__img {
        width: 156px;
        height: 156px;
      }
      &__name {
        font-size: 22px;
      }
      &__sub {
        font-size: 17px;
      }
      &__p {
        font-size: 14px;
        padding: 0;
      }
    }
  }
`;
export const Talaba = styled.div`
  margin: 50px 0;
`;
export const Line = styled.div`
  background: ${(prop) =>
    prop.$type === "dark" ? "#99d8ff" : "var(--titleDark)"};
  height: 3px;
  width: 100%;
`;
export const Ramatov = styled.div`
  background: url(${filter});
  background-repeat: no-repeat;
  background-size: cover;
  .content {
    padding: 50px 0;
    text-align: center;
    &__img {
      width: 230px;
      height: 230px;
      border-radius: 50%;
      margin-bottom: 6px;
    }
    &__name {
      color: var(--white);
      text-align: center;
      font-size: 25px;
      font-style: normal;
      font-weight: 600;
      line-height: 140%;
    }
    &__sub {
      color: var(--white);
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: 140%;
    }
    &__p {
      padding: 10px 20px;
      color: var(--white);
      text-align: center;
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: 140%;
    }
  }
  .slider {
    padding: 20px 0;
  }
  @media only screen and (max-width: 1023px) {
    .content {
      &__img {
        width: 200px;
        height: 200px;
      }
      &__name {
        font-size: 22px;
      }
      &__sub {
        font-size: 17px;
      }
      &__p {
        font-size: 14px;
      }
    }
  }
  @media only screen and (max-width: 599px) {
    padding: 20px 0;
    .content {
      &__img {
        width: 156px;
        height: 156px;
      }
      &__name {
        font-size: 22px;
      }
      &__sub {
        font-size: 17px;
      }
      &__p {
        font-size: 14px;
        padding: 0;
      }
    }
  }
`;
