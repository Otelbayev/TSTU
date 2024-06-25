import React, { useEffect, useRef, useState } from "react";
import bg from "../../assets/Faculties/bgFak2.jpeg";
import Header from "../../components/Faculties/Header";
import Showcase from "../../components/Faculties/Showcase";
import Dekans from "../../components/Faculties/Dekan";
import dekan from "../../assets/Faculties/rustam.png";
import DekanCart from "../../components/Faculties/DekanCart";
import Footer from "../../components/Footer";
import FackBottom from "../../components/Faculties/FakBottom";
import { data as data1, kafData } from "../Faculties/mock";
import { Orinbosar, Wrap, Yonalish } from "../FacultiesID/style";
import Yonalishlar from "../../components/Faculties/Yonalishlar";
import { Title } from "../../components/Generics";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useLanguageContext } from "../../context/LanguageContext";
import { useHandleScroll } from "../../hooks/useHandleScroll";
import { useTranslation } from "react-i18next";

const KafedraID = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [data, setData] = useState([]);

  const { t } = useTranslation();

  const { id } = useParams();
  const { language } = useLanguageContext();

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        language === "uz"
          ? `/api/departament/sitegetbyiddepartament/${id}`
          : `/api/departament/sitegetbyuziddepartamenttranslation/${id}?language_code=${language}`
      );
      if (res.status === 200) {
        setData(res.data);
      } else {
        setData([]);
      }
    };

    fetchData();
  }, [id, language]);

  console.log(data)

  const data1 = [
    { id: 1, label: "60640102 Transport logistikasi (avtomobil transporti)" },
    { id: 2, label: "60640102 Transport logistikasi (avtomobil transporti)" },
    { id: 3, label: "60640102 Transport logistikasi (avtomobil transporti)" },
    { id: 4, label: "60640102 Transport logistikasi (avtomobil transporti)" },
    { id: 5, label: "60640102 Transport logistikasi (avtomobil transporti)" },
    { id: 6, label: "60640102 Transport logistikasi (avtomobil transporti)" },
    { id: 7, label: "60640102 Transport logistikasi (avtomobil transporti)" },
    { id: 8, label: "60640102 Transport logistikasi (avtomobil transporti)" },
    { id: 9, label: "60640102 Transport logistikasi (avtomobil transporti)" },
  ];

  const aboutRef = useRef();
  const mudirRef = useRef();
  const yonalishRef = useRef();

  const links = [
    { title: t("kafedra.links.link1"), refs: aboutRef },
    { title: t("kafedra.links.link2"), refs: yonalishRef },
  ];

  const getTitle = (title, language) => {
    const obj = {
      uz: `${title} fakultetiga xush kelibsiz!`,
      en: `Welcome to the Faculty of ${title}!`,
      ru: `Добро пожаловать на факультет ${title}!`,
    };

    return obj[language];
  };

  return (
    <div className="overflow-hidden">
      <Header links={links} />
      <Showcase
        bg={bg}
        title={getTitle(data?.title, language)}
        button={t("kafedra.btn")}
        onClick={() => useHandleScroll(aboutRef)}
      ></Showcase>

      <div className="root-container">
        <div className="root-wrapper">
          <Wrap>
            <Title ref={aboutRef} title={t("kafedra.about")} $border={"none"} />
            <p
              dangerouslySetInnerHTML={{ __html: data?.text }}
              data-aos="fade-up"
            />
            <Title ref={mudirRef} title={t("kafedra.mudir")} $border={"none"} />
            <Dekans
              img={dekan}
              name={"Raximov Rustam Vyacheslavovich"}
              position={"Kafedra mudiri, professor, Texnika fanlari doktori"}
              phone={"+99871 299 00 10"}
              email={"marufdzhan.rasulov@bk.ru"}
              li={[
                "1976-1981 yy. – Toshkent temir yо‘l muhandislari instituti talabasi",
                "1987-1990 yy. – Moskva temir yо‘l muhandislari instituti aspiranti.",
              ]}
              button={"/"}
            />
            <Title title={t("kafedra.teachers")} $border={"none"} />
            <Orinbosar>
              {kafData.map(({ id, img, name, position, links }) => (
                <DekanCart
                  key={id}
                  img={img}
                  name={name}
                  position={position}
                  links={links}
                />
              ))}
            </Orinbosar>
            <Yonalish ref={yonalishRef}>
              <Yonalish.Left data-aos="fade-right">
                <Yonalish.Title>{t("kafedra.bakalavr")}</Yonalish.Title>
                <Yonalishlar data={data1} />
              </Yonalish.Left>
              <Yonalish.Right data-aos="fade-left">
                <Yonalish.Title>{t("kafedra.bakalavr")}</Yonalish.Title>
                <Yonalishlar data={data1} />
              </Yonalish.Right>
            </Yonalish>
          </Wrap>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default KafedraID;
