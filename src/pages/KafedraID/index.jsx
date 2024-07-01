import React, { useEffect, useRef, useState } from "react";
import Header from "../../components/Faculties/Header";
import Showcase from "../../components/Faculties/Showcase";
import Dekans from "../../components/Faculties/Dekan";
import dekan from "../../assets/Faculties/rustam.png";
import DekanCart from "../../components/Faculties/DekanCart";
import Footer from "../../components/Footer";
import FackBottom from "../../components/Faculties/FakBottom";
import { Orinbosar, Wrap, Yonalish } from "../FacultiesID/style";
import Yonalishlar from "../../components/Faculties/Yonalishlar";
import { Title } from "../../components/Generics";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useLanguageContext } from "../../context/LanguageContext";
import { useHandleScroll } from "../../hooks/useHandleScroll";
import { useTranslation } from "react-i18next";

const KafedraID = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const { language } = useLanguageContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [data, setData] = useState([]);

  const [mudir, setMudir] = useState({});
  const [professor, setProfessor] = useState([]);
  const [katta, setKatta] = useState([]);
  const [assistent, setAssistent] = useState([]);
  const [dotsent, setDotsent] = useState([]);
  const [doktarant, setDoktarant] = useState([]);
  const [y, setY] = useState([]);

  const [transId, settransId] = useState(null);
  const getPersonData = async () => {
    const res = await axios.get(
      language === "uz"
        ? `/api/persondata/sitegetallpersondatadepid/${id}`
        : `/api/persondata/sitegetallpersondatatranslationdepuzid/${id}?language_code=${language}`
    );
    if (res.status === 200) {
      setMudir(
        res.data?.find(
          (e) =>
            e?.persons_?.employee_type_?.title?.toLowerCase()?.trim() ===
              "kafedra mudiri" ||
            e?.persons_translation_?.employee_type_translation_?.employee_?.title
              ?.toLowerCase()
              ?.trim() === "kafedra mudiri"
        )
      );
      setKatta(
        res.data?.filter(
          (e) =>
            e?.persons_?.employee_type_?.title?.toLowerCase()?.trim() ===
              "katta o'qituvchi" ||
            e?.persons_translation_?.employee_type_translation_?.employee_?.title
              ?.toLowerCase()
              ?.trim() === "katta o'qituvchi"
        )
      );
      setProfessor(
        res.data?.filter(
          (e) =>
            e?.persons_?.employee_type_?.title?.toLowerCase()?.trim() ===
              "professor" ||
            e?.persons_translation_?.employee_type_translation_?.employee_?.title
              ?.toLowerCase()
              ?.trim() === "professor"
        )
      );
      setAssistent(
        res.data?.filter(
          (e) =>
            e?.persons_?.employee_type_?.title?.toLowerCase()?.trim() ===
              "assistent" ||
            e?.persons_translation_?.employee_type_translation_?.employee_?.title
              ?.toLowerCase()
              ?.trim() === "assistent"
        )
      );
      setDotsent(
        res.data?.filter(
          (e) =>
            e?.persons_?.employee_type_?.title?.toLowerCase()?.trim() ===
              "dotsent" ||
            e?.persons_translation_?.employee_type_translation_?.employee_?.title
              ?.toLowerCase()
              ?.trim() === "dotsent"
        )
      );
      setDoktarant(
        res.data?.filter(
          (e) =>
            e?.persons_?.employee_type_?.title?.toLowerCase()?.trim() ===
              "doktorant" ||
            e?.persons_translation_?.employee_type_translation_?.employee_?.title
              ?.toLowerCase()
              ?.trim() === "doktorant"
        )
      );
    }
  };

  const getYon = async () => {
    const res = await axios.get(
      language === "uz"
        ? `/api/departament/sitegetalldepartamentchild/${id}`
        : `/api/departament/sitegetalldepartamenttranslationchild/${transId}?language_code=${language}`
    );

    if (res.status === 200) {
      setY(res.data);
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
        settransId(res.data.id);
      } else {
        setData([]);
      }
    };
    fetchData();
    getPersonData();
    getYon();
  }, [id, language]);

  const aboutRef = useRef();
  const mudirRef = useRef();
  const yonalishRef = useRef();

  const links = [
    { title: t("kafedra.links.link1"), refs: aboutRef },
    { title: t("kafedra.links.link2"), refs: yonalishRef },
  ];

  const getTitle = (title, language) => {
    const obj = {
      uz: `${title} kafedrasiga xush kelibsiz!`,
      en: `Welcome to the department of ${title}!`,
      ru: `Добро пожаловать на кафедру ${title}!`,
    };

    return obj[language];
  };

  return (
    <div className="overflow-hidden">
      <Header links={links} />
      <Showcase
        bg={`/public/api/${data?.img_?.url}`}
        title={getTitle(data?.title, language)}
        button={t("kafedra.btn")}
        onClick={() => useHandleScroll(aboutRef)}
      ></Showcase>

      <div className="root-container">
        <div className="root-wrapper">
          <Wrap>
            {/* <Title ref={aboutRef} title={t("kafedra.about")} $border={"none"} />
            <p
              dangerouslySetInnerHTML={{ __html: data?.text }}
              data-aos="fade-up"
            /> */}
            <Title ref={mudirRef} title={t("kafedra.mudir")} $border={"none"} />
            <Dekans img={dekan} data={mudir} />
            <Title title={t("kafedra.teachers")} $border={"none"} />
            <Orinbosar>
              {professor.map((e) => (
                <DekanCart key={id} data={e} />
              ))}
              {katta.map((e) => (
                <DekanCart key={id} data={e} />
              ))}
              {dotsent.map((e) => (
                <DekanCart key={id} data={e} />
              ))}
              {assistent.map((e) => (
                <DekanCart key={id} data={e} />
              ))}
              {doktarant.map((e) => (
                <DekanCart key={id} data={e} />
              ))}
            </Orinbosar>
            <Yonalish ref={yonalishRef}>
              <Yonalish.Left data-aos="fade-right">
                <Yonalish.Title>{t("kafedra.bakalavr")}</Yonalish.Title>
                <Yonalishlar data={y} />
              </Yonalish.Left>
              <Yonalish.Right data-aos="fade-left">
                <Yonalish.Title>{t("kafedra.magistr")}</Yonalish.Title>
                <Yonalishlar data={y} />
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
