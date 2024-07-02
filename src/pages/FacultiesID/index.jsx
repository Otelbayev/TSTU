import React, { useEffect, useRef, useState } from "react";
import Header from "../../components/Faculties/Header";
import bg from "../../assets/Faculties/bgFak.png";
import Showcase from "../../components/Faculties/Showcase";
import IlmiyMarkazCart from "../../components/IlmiyMarkazCart";
import {
  IlmiyMarkaz,
  Kafedra,
  KafedraWrap,
  Malumot,
  News,
  Orinbosar,
  Yonalish,
  Wrap,
} from "./style";
import { useNavigate, useParams } from "react-router-dom";
import DekanCart from "../../components/Faculties/DekanCart";
import Dekans from "../../components/Faculties/Dekan";
import Footer from "../../components/Footer";
import FackBottom from "../../components/Faculties/FakBottom";
import FakNews from "../../components/Faculties/FakNews";
import Yonalishlar from "../../components/Faculties/Yonalishlar";
import { Title } from "../../components/Generics";
import { useLanguageContext } from "../../context/LanguageContext";
import axios from "axios";
import { useFrontDepartmentContext } from "./../../context/DepartmentContext/index";
import { useTranslation } from "react-i18next";
import { useHandleScroll } from "../../hooks/useHandleScroll";

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

const FacultiesID = () => {
  const naviagte = useNavigate();

  const aboutRef = useRef();
  const kafedraRef = useRef();
  const centerRef = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [data, setData] = useState([]);

  const [orinbosar, setOrinBosar] = useState([]);
  const [dekan, setDekan] = useState({});

  const { t } = useTranslation();

  const { id } = useParams();
  const { language } = useLanguageContext();
  const { favoMarkaz, kafedras } = useFrontDepartmentContext();

  const kafedraData = kafedras?.filter(
    (e) => e?.parent_id == id || e?.departament_?.parent_id == id
  );

  const getPersonData = async () => {
    const res = await axios.get(
      language === "uz"
        ? `/api/persondata/sitegetallpersondatadepid/${id}`
        : `/api/persondata/sitegetallpersondatatranslationdepuzid/${id}?language_code=${language}`
    );
    if (res.status === 200) {
      setDekan(
        res.data?.find(
          (e) =>
            e?.persons_?.employee_type_?.title?.toLowerCase()?.trim() ===
              "dekan" ||
            e?.persons_translation_?.employee_type_translation_?.employee_?.title
              ?.toLowerCase()
              ?.trim() === "dekan"
        )
      );

      setOrinBosar(
        res.data?.filter(
          (e) =>
            e?.persons_?.employee_type_?.title?.toLowerCase()?.trim() ===
              "dekan o'rinbosari" ||
            e?.persons_translation_?.employee_type_translation_?.employee_?.title
              ?.toLowerCase()
              ?.trim() === "dekan o'rinbosari"
        )
      );
    }
  };

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
    getPersonData();
    fetchData();
  }, [id, language]);

  const links = [
    { title: t("facultet.links.link1"), refs: aboutRef },
    { title: t("facultet.links.link2"), refs: kafedraRef },
    { title: t("facultet.links.link3"), refs: centerRef },
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
        bg={`${import.meta.env.VITE_BASE_URL}/${data?.img_?.url}`}
        title={getTitle(data?.title, language)}
        button={t("facultet.btn")}
        onClick={() => useHandleScroll(aboutRef)}
      ></Showcase>
      <div className="root-container">
        <div className="root-wrapper">
          <Wrap>
            <div ref={aboutRef}>
              {/* <Title title={t("facultet.about")} $border={"none"} /> */}
              {/* <div
                dangerouslySetInnerHTML={{ __html: data?.text }}
                data-aos="fade-up"
                className="text"
              /> */}
            </div>
            <Title title={t("facultet.dekan")} $border={"none"} />
            <Dekans img={dekan} data={dekan} />
            <Title title={t("facultet.orin")} $border={"none"} />
            <Orinbosar>
              {orinbosar.map((e) => (
                <DekanCart key={e?.id} data={e} />
              ))}
            </Orinbosar>
            {/* <Title title="Fakultet e’lon va  yangiliklari" $border={"none"} /> */}
            {/* <News ref={talimRef}>
              <News.Left data-aos="fade-right">
                <FakNews data={fakNewsData} />
                <FakNews data={fakNewsData} />
                <FakNews data={fakNewsData} />
                <FakNews data={fakNewsData} />
                <FakNews data={fakNewsData} />
                <FakNews data={fakNewsData} />
                <FakNews data={fakNewsData} />
                <FakNews data={fakNewsData} />
                <FakNews data={fakNewsData} />
              </News.Left>
              <News.Right data-aos="fade-left">
                <FakNews data={fakNewsData1} />
                <FakNews data={fakNewsData1} />
                <FakNews data={fakNewsData1} />
                <FakNews data={fakNewsData1} />
                <FakNews data={fakNewsData1} />
                <FakNews data={fakNewsData1} />
                <FakNews data={fakNewsData1} />
                <FakNews data={fakNewsData1} />
                <FakNews data={fakNewsData1} />
                <FakNews data={fakNewsData1} />
                <FakNews data={fakNewsData1} />
              </News.Right>
            </News> */}
            <div ref={kafedraRef}>
              <Title title={t("facultet.kafedra")} $border={"none"} />
              <KafedraWrap>
                <Kafedra>
                  {kafedraData?.map((e) => (
                    <Kafedra.Item
                      data-aos="zoom-in"
                      onClick={() =>
                        naviagte(
                          `/${language}/kafedra/${
                            language === "uz" ? e?.id : e?.departament_?.id
                          }`
                        )
                      }
                      $bg={`${import.meta.env.VITE_BASE_URL}/${e?.img_?.url}`}
                      key={e.id}
                    >
                      <Kafedra.Content>
                        {e?.title}
                        <Kafedra.Arrow />
                      </Kafedra.Content>
                    </Kafedra.Item>
                  ))}
                </Kafedra>
              </KafedraWrap>
            </div>
            <div ref={centerRef}>
              <Title title={t("facultet.markaz")} $border={"none"} />
              <IlmiyMarkaz>
                {favoMarkaz?.map((e) => (
                  <IlmiyMarkazCart
                    key={e?.id}
                    to={`department/${
                      language === "uz" ? e?.id : e?.departament_?.id
                    }`}
                    $border={"#CECECE"}
                    dataAos="zoom-in"
                    item={e}
                  />
                ))}
              </IlmiyMarkaz>
            </div>
            <Yonalish>
              <Yonalish.Left data-aos="fade-right">
                <Yonalish.Title>{t("facultet.bakalavr")}</Yonalish.Title>
                <Yonalishlar data={data1} />
              </Yonalish.Left>
              <Yonalish.Right data-aos="fade-left">
                <Yonalish.Title>{t("facultet.magistr")}</Yonalish.Title>
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

export default FacultiesID;
