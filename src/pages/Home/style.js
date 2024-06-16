// import styled, { css } from "styled-components";
// import intIcon4 from "../../assets/icons/intIcon4.svg?react";
// import bigDarkArrow from "../../assets/icons/darkArrow.svg?react";
// import darkArrow from "../../assets/icons/arrow-dark.svg?react";
// import filter from "../../assets/images/filterBg.png";
// import bggg from "../../assets/images/bggggg.png";

// import lightArrow from "../../assets/icons/arrow-light.svg?react";
// export const Icons = styled.div``;
// Icons.LightArrow = styled(lightArrow)``;

// Icons.DarkArrow = styled(darkArrow)`
//   transform: translateY(3px);
// `;
// Icons.Int4 = styled(intIcon4)`
//   width: 75px;
//   height: 75px;
// `;
// Icons.BigDarkArrow = styled(bigDarkArrow)`
//   transform: translateY(5px);
// `;
// Icons.ArrowLight = styled(lightArrow)``;
// Icons.ArrowDark = styled(bigDarkArrow)``;

// export const DarkSection = styled.div`
//   padding: 50px 0 50px;
//   background: url(${bggg});
//   background-repeat: no-repeat;
//   background-size: cover;
//   .tadqiqot {
//     display: grid;
//     grid-template-columns: repeat(3, 1fr);
//     padding: 50px 0;
//     &__item {
//       text-align: center;
//       &__title {
//         color: var(--titleLight);
//         font-size: 30px;
//         font-style: normal;
//         font-weight: 700;
//         padding-bottom: 10px;
//         border-bottom: 2px solid #99d8ff;
//       }
//       &__count {
//         color: var(--titleLight);
//         font-size: 37px;
//         font-style: normal;
//         font-weight: 700;
//         padding-top: 10px;
//       }
//       &__p {
//         color: var(--white);
//         font-size: 18px;
//         font-style: normal;
//         font-weight: 600;
//         line-height: 18.2px;
//       }
//     }
//   }
//   .markaz {
//     display: grid;
//     grid-template-columns: repeat(4, 1fr);
//     transition: 0.4s;
//     padding-top: 50px;
//     gap: 8px;
//   }
//   @media only screen and (max-width: 1100px) {
//     .markaz {
//       grid-template-columns: 1fr 1fr;
//       padding: 30px 0;
//     }
//   }
//   @media only screen and (max-width: 560px) {
//     .markaz {
//       grid-template-columns: 1fr;
//       padding: 15px 0;
//     }
//   }
//   @media only screen and (max-width: 776px) {
//     .tadqiqot {
//       grid-template-columns: 1fr;
//       border-top: 2px solid #99d8ff;
//       border-bottom: 2px solid #99d8ff;
//       padding: 20px 0;
//       margin: 20px 0;
//       gap: 15px;
//       &__item {
//         text-align: start;
//         .mobile-flex {
//           display: flex;
//           gap: 10px;
//         }
//         &__title {
//           padding-bottom: 0;
//           border-bottom: 0;
//           font-size: 22px;
//         }
//         &__count {
//           padding-top: 0;
//           font-size: 22px;
//         }
//         &__p {
//           font-size: 14px;
//         }
//       }
//     }
//     .markaz {
//       flex-direction: column;
//       height: auto;
//       justify-content: center;
//       align-items: center;
//     }
//   }
// `;
// export const InteraktiveCarts = styled.div`
//   margin-bottom: 20px;
//   .first {
//     background: var(--white);
//     border-radius: 3px;
//     margin: 50px 0 15px;
//     display: flex;
//     justify-content: space-between;
//     padding: 20px 20px 0 20px;
//     &__left {
//       width: 35%;
//       &__title {
//         color: var(--titleDark);
//         font-size: 32px;
//         font-style: normal;
//         font-weight: 600;
//         line-height: 119%;
//         cursor: pointer;
//         text-decoration: none;
//         display: block;
//         margin-top: 20px;
//       }
//     }
//     &__right {
//       transform: translateY(-50px);
//       display: flex;
//       align-items: flex-end;
//       width: 65%;
//       &__macbook {
//         max-width: 340px;
//         max-height: 200px;
//         height: 45%;
//         width: 40%;
//       }
//       &__imac {
//         max-width: 400px;
//         height: 350px;
//         width: 60%;
//       }
//     }
//   }
//   .second {
//     display: grid;
//     grid-template-columns: repeat(4, 1fr);
//     gap: 15px;
//   }
//   @media only screen and (max-width: 1023px) {
//     .first {
//       padding: 20px;
//       &__left {
//         width: 50%;
//         &__title {
//           font-size: 25px;
//           margin-top: 10px;
//         }
//       }
//       &__right {
//         transform: translateY(0);
//         width: 50%;
//         &__macbook {
//           width: 40%;
//           height: auto;
//         }
//         &__imac {
//           width: 60%;
//           height: auto;
//         }
//       }
//     }
//     .second {
//       grid-template-columns: repeat(2, 1fr);
//     }
//   }
//   @media only screen and (max-width: 650px) {
//     .first {
//       flex-wrap: wrap;
//       height: auto;
//       gap: 30px;
//       margin: 25px 0 10px;
//       &__left {
//         width: 100%;
//         display: flex;
//         &__title {
//           padding-left: 20px;
//           font-size: 20px;
//         }
//       }
//       &__right {
//         width: 100%;
//       }
//     }
//     .second {
//       grid-template-columns: 1fr;
//       gap: 10px;
//     }
//   }
// `;

// export const Ramatov = styled.div`
//   background: url(${filter});
//   background-repeat: no-repeat;
//   background-size: cover;
//   .content {
//     padding: 50px 0;
//     text-align: center;
//     &__img {
//       width: 230px;
//       height: 230px;
//       border-radius: 50%;
//       margin-bottom: 6px;
//     }
//     &__name {
//       color: var(--white);
//       text-align: center;
//       font-size: 25px;
//       font-style: normal;
//       font-weight: 600;
//       line-height: 140%;
//     }
//     &__sub {
//       color: var(--white);
//       font-size: 20px;
//       font-style: normal;
//       font-weight: 600;
//       line-height: 140%;
//     }
//     &__p {
//       padding: 10px 20px;
//       color: var(--white);
//       text-align: center;
//       font-size: 20px;
//       font-style: normal;
//       font-weight: 600;
//       line-height: 140%;
//     }
//   }
//   .slider {
//     padding: 20px 0;
//   }
//   @media only screen and (max-width: 1023px) {
//     .content {
//       &__img {
//         width: 200px;
//         height: 200px;
//       }
//       &__name {
//         font-size: 22px;
//       }
//       &__sub {
//         font-size: 17px;
//       }
//       &__p {
//         font-size: 14px;
//       }
//     }
//   }
//   @media only screen and (max-width: 599px) {
//     padding: 20px 0;
//     .content {
//       &__img {
//         width: 156px;
//         height: 156px;
//       }
//       &__name {
//         font-size: 22px;
//       }
//       &__sub {
//         font-size: 17px;
//       }
//       &__p {
//         font-size: 14px;
//         padding: 0;
//       }
//     }
//   }
// `;
