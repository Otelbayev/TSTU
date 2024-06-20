import styled from "styled-components";
import bg from "../assets/images/gridBg.jpg";
import vr from "../assets/images/vr.png";
import intIcon1 from "../assets/icons/intIcon1.svg?react";
import intIcon2 from "../assets/icons/intIocn2.svg?react";
import intIcon3 from "../assets/icons/intIcon3.svg?react";
import intIcon4 from "../assets/icons/intIcon4.svg?react";
import user from "../assets/icons/user.svg?react";
import calendar from "../assets/icons/calendar.svg?react";
import facIcon from "../assets/Faculties/facItem.svg";
import facIcon2 from "../assets/Faculties/faclight.svg";
import kaf from "../assets/images/kafedra.png";
import arrow from "../assets/icons/arrow-dark.svg?react";
import arm from "../assets/images/arm.jpg";
import yoshlar from "../assets/images/yoshlar.jpg";
import run from "../assets/images/run.jpg";
import ramatova from "../assets/images/ramatova.jpg";

const Icons = styled.div``;
Icons.Arrow = styled(arrow)`
  transform: translateY(5px);
`;

const Person = styled(user)``;
const Calendar = styled(calendar)``;
Icons.Int1 = styled(intIcon1)`
  width: 75px;
  height: 75px;
`;
Icons.Int2 = styled(intIcon2)`
  width: 75px;
  height: 75px;
`;
Icons.Int3 = styled(intIcon3)`
  width: 75px;
  height: 75px;
`;
Icons.Int4 = styled(intIcon4)`
  width: 75px;
  height: 75px;
`;

export const prop1 = {
  left: "TOP istalgani",
  right: "TSTU | Yan 04, 2023",
  title: "Yangi avtomobil modeli o‘ylab topildi",
  img: bg,
};

export const prop2 = {
  left: "Talim",
  date: "TSTU | Yan 04, 2023",
  title: "Yangi avtomobil modeli o‘ylab topildi",
  img: bg,
};

export const prop3 = {
  right: "Pedagog",
  left: "18:00, Dek 10, 2023",
  rightIcon: <Person />,
  leftIcon: <Calendar />,
  title: "Xalqaro seminar",
  img: bg,
};

export const prop4 = {
  right: "Pedagog",
  left: "18:00, Dek 10, 2023",
  rightIcon: <Person />,
  leftIcon: <Calendar />,
  title: "Transport vaziri o‘rinbosarining tashrifi",
  desc: "Transport vaziri o‘rinbosari universitetda olib borilayotgan ilmiy-tadqiqot va innovatsion faoliyat bilan tanishdi",
  img: vr,
};

export const prop5 = {
  day: 10,
  month: "Dek",
  year: 2024,
  where: "TSTU Universiteti",
  title: '"Olmaliq kon-metallurgiya talabalar kombinati"ga ekskursiya',
  link: "Barcha",
};

export const prop6 = [
  {
    id: 1,
    title: "Moodle masofaviy ta'lim",
    icon: <Icons.Int1 />,
    link: "/interactive-services",
  },
  {
    id: 2,
    title: "Moodle masofaviy ta'lim",
    icon: <Icons.Int2 />,
    link: "/interactive-services",
  },
  {
    id: 3,
    title: "Moodle masofaviy ta'lim",
    icon: <Icons.Int3 />,
    link: "/interactive-services",
  },
  {
    id: 4,
    title: "Moodle masofaviy ta'lim",
    icon: <Icons.Int4 />,
    link: "/interactive-services",
  },
];

export const prop7 = {
  title: "ARM o‘quv zallari",
  img: arm,
};
export const prop8 = {
  title: "Yoshlar ittifoqining boshlang‘ich tashkiloti",
  img: yoshlar,
};
export const prop9 = {
  title: "«Transportchilar» sport klubi",
  img: run,
  desc: "«Transportchilar» sport klubi Voleybol sport turi bo‘yicha Respublika oliy ligasida umumjamoa hisobida 5-o‘rinni egalladi.",
};

export const Fac = [
  {
    id: 1,
    icon: facIcon,
    light: facIcon2,
    title: "Xalqaro ta’lim dasturlari fakulteti",
    kafedra: [
      {
        id: 1,
        name: "Shahar yo’llari va ko’chalari",
        img: kaf,
      },
      {
        id: 2,
        name: "Avtomobil yo’llaridagi sun’iy inshoatlar",
        img: kaf,
      },
      {
        id: 3,
        name: "Avtomobil yo’llarini qidiruv va loyihalash",
        img: kaf,
      },
      {
        id: 4,
        name: "Avtomobil yo’llarini qurish va eksplutatsiya qilish",
        img: kaf,
      },
    ],
  },
  {
    id: 2,
    icon: facIcon,
    light: facIcon2,
    title: "Transport tizimlari boshqaruvi fakulteti",
    kafedra: [
      {
        id: 1,
        name: "Transport logistikasi",
        img: kaf,
      },
      {
        id: 2,
        name: "Texnosfera xavfsizligi",
        img: kaf,
      },
      {
        id: 3,
        name: "Yuk transport tizimlari",
        img: kaf,
      },
      {
        id: 4,
        name: "Temir yo'ldan foydalanish ishlarini boshqarish",
        img: kaf,
      },
      {
        id: 5,
        name: "Transport intellektual tizimlari muhandisligi",
        img: kaf,
      },
      {
        id: 6,
        name: "Yo'l harakatini tashkil etish",
        img: kaf,
      },
    ],
  },
  {
    id: 3,
    icon: facIcon,
    light: facIcon2,
    title: "Avtomobil transporti muhandisligi fakulteti",
    kafedra: [
      {
        id: 1,
        name: "Transport energetik qurilmalari",
        img: kaf,
      },
      {
        id: 2,
        name: "Avtomobil va avtomobil xo’jaligi",
        img: kaf,
      },
      {
        id: 3,
        name: "Transport vositalari muhandisligi",
        img: kaf,
      },
      {
        id: 4,
        name: "Texnologik mashinalar muhandisligi",
        img: kaf,
      },
      {
        id: 5,
        name: "Avtomobilsozlik va ishlab chiqarish muhandisligi",
        img: kaf,
      },
    ],
  },
  {
    id: 4,
    icon: facIcon,
    light: facIcon2,
    title: "Avtomobil yo’llari muhandisligi fakulteti",
    kafedra: [
      {
        id: 1,
        name: "Shahar yo’llari va ko’chalari",
        img: kaf,
      },
      {
        id: 2,
        name: "Avtomobil yo’llaridagi sun’iy inshoatlar",
        img: kaf,
      },
      {
        id: 3,
        name: "Avtomobil yo’llarini qidiruv va loyihalash",
        img: kaf,
      },
      {
        id: 4,
        name: "Avtomobil yo’llarini qurish va eksplutatsiya qilish",
        img: kaf,
      },
    ],
  },
  {
    id: 5,
    icon: facIcon,
    light: facIcon2,
    title: "Aviatsiya transporti muhandisligi fakulteti",
    kafedra: [
      {
        id: 1,
        name: "Aviatsiya injiniringi",
        img: kaf,
      },
      {
        id: 2,
        name: "Aeronavigatsiya tizimlari",
        img: kaf,
      },
    ],
  },
  {
    id: 6,
    icon: facIcon,
    light: facIcon2,
    title: "Qurilish muhandisligi fakulteti",
    kafedra: [
      {
        id: 1,
        name: "Oliy matematika",
        img: kaf,
      },
      {
        id: 2,
        name: "Amaliy mexanika",
        img: kaf,
      },
      {
        id: 3,
        name: "Ko’priklar va tonnellar",
        img: kaf,
      },
      {
        id: 4,
        name: "Temir yo’l muhandisligi",
        img: kaf,
      },
      {
        id: 5,
        name: "Bino va sanoat inshootlari qurilishi",
        img: kaf,
      },
      {
        id: 6,
        name: "Muhandislik kommunikatsiyalari va tizimlari",
        img: kaf,
      },
    ],
  },
  {
    id: 7,
    icon: facIcon,
    light: facIcon2,
    title: "Iqtisodiyot fakulteti",
    kafedra: [
      {
        id: 1,
        name: "Chet tillari",
        img: kaf,
      },
      {
        id: 2,
        name: "Ijtimoiy fanlar",
        img: kaf,
      },
      {
        id: 3,
        name: "O’zbek (Rus) tili",
        img: kaf,
      },
      {
        id: 4,
        name: "Hisob va biznes",
        img: kaf,
      },
      {
        id: 5,
        name: "Transport iqtisodiyoti",
        img: kaf,
      },
      {
        id: 6,
        name: "Korporativ boshqaruv",
        img: kaf,
      },
      {
        id: 7,
        name: "Xalqaro ommaviy huquq va tarix",
        img: kaf,
      },
      {
        id: 8,
        name: "Transportda axborot tizimlari va texnologiyalari",
        img: kaf,
      },
    ],
  },
  {
    id: 8,
    icon: facIcon,
    light: facIcon2,
    title: "Elektrotexnika va kompyuter muhandisligi",
    kafedra: [
      {
        id: 1,
        name: "Elektrotexnika",
        img: kaf,
      },
      {
        id: 2,
        name: "Elektr ta’minoti",
        img: kaf,
      },
      {
        id: 3,
        name: "Avtomatika va telemexanika",
        img: kaf,
      },
      {
        id: 4,
        name: "Informatika va kompyuter grafikasi",
        img: kaf,
      },
      {
        id: 5,
        name: "Radioelektron qurilmalar va tizimlar",
        img: kaf,
      },
    ],
  },
  {
    id: 9,
    icon: facIcon,
    light: facIcon2,
    title: "Temir yo‘l transporti muhandisligi",
    kafedra: [
      {
        id: 1,
        name: "Vagonlar va vagon xo’jaligi",
        img: kaf,
      },
      {
        id: 2,
        name: "Elektr harakat tarkibi",
        img: kaf,
      },
      {
        id: 3,
        name: "Materialshunoslik va mashinasozlik",
        img: kaf,
      },
      {
        id: 4,
        name: "Tabiiy fanlar",
        img: kaf,
      },
      {
        id: 5,
        name: "Lokomotivlar va lokomotiv xo’jaligi",
        img: kaf,
      },
    ],
  },
];

export const sliderProp = [
  {
    id: 1,
    name: "Kunduzgi ta’lim",
    img: bg,
    arrow: <Icons.Arrow />,
  },
  {
    id: 2,
    name: "Sirtqi ta’lim",
    img: bg,
    arrow: <Icons.Arrow />,
  },
  {
    id: 3,
    name: "Magistratura",
    img: bg,
    arrow: <Icons.Arrow />,
  },
  {
    id: 4,
    name: "Kunduzgi ta’lim",
    img: bg,
    arrow: <Icons.Arrow />,
  },
  {
    id: 5,
    name: "Sirtqi ta’lim",
    img: bg,
    arrow: <Icons.Arrow />,
  },
  {
    id: 6,
    name: "Magistratura",
    img: bg,
    arrow: <Icons.Arrow />,
  },
  {
    id: 7,
    name: "Kunduzgi ta’lim",
    img: bg,
    arrow: <Icons.Arrow />,
  },
  {
    id: 8,
    name: "Sirtqi ta’lim",
    img: bg,
    arrow: <Icons.Arrow />,
  },
  {
    id: 9,
    name: "Magistratura",
    img: bg,
    arrow: <Icons.Arrow />,
  },
];

export const prop10 = [
  {
    id: 1,
    img: ramatova,
    name: "Ramatov Ochilboy Jumaniyozovich",
    position: "Oʻzbekiston Bosh vazirining birinchi oʻrinbosari",
    bottom:
      " 1984-yildan 1988-yilgacha Toshkent temir yoʻl muhandislari institutida tahsil olgan.",
  },
  {
    id: 2,
    img: ramatova,
    name: "Ramatov Ochilboy Jumaniyozovich",
    position: "Oʻzbekiston Bosh vazirining birinchi oʻrinbosari",
    bottom:
      " 1984-yildan 1988-yilgacha Toshkent temir yoʻl muhandislari institutida tahsil olgan.",
  },
  {
    id: 3,
    img: ramatova,
    name: "Ramatov Ochilboy Jumaniyozovich",
    position: "Oʻzbekiston Bosh vazirining birinchi oʻrinbosari",
    bottom:
      " 1984-yildan 1988-yilgacha Toshkent temir yoʻl muhandislari institutida tahsil olgan.",
  },
  {
    id: 4,
    img: ramatova,
    name: "Ramatov Ochilboy Jumaniyozovich",
    position: "Oʻzbekiston Bosh vazirining birinchi oʻrinbosari",
    bottom:
      " 1984-yildan 1988-yilgacha Toshkent temir yoʻl muhandislari institutida tahsil olgan.",
  },
  {
    id: 5,
    img: ramatova,
    name: "Ramatov Ochilboy Jumaniyozovich",
    position: "Oʻzbekiston Bosh vazirining birinchi oʻrinbosari",
    bottom:
      " 1984-yildan 1988-yilgacha Toshkent temir yoʻl muhandislari institutida tahsil olgan.",
  },
  {
    id: 6,
    img: ramatova,
    name: "Ramatov Ochilboy Jumaniyozovich",
    position: "Oʻzbekiston Bosh vazirining birinchi oʻrinbosari",
    bottom:
      " 1984-yildan 1988-yilgacha Toshkent temir yoʻl muhandislari institutida tahsil olgan.",
  },
];
