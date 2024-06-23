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
import dekan from "../../assets/Faculties/dekan.png";
import DekanCart from "../../components/Faculties/DekanCart";
import kaf1 from "../../assets/Faculties/kaf1.png";
import kaf2 from "../../assets/Faculties/kaf2.png";
import kaf3 from "../../assets/Faculties/kaf3.png";
import Dekans from "../../components/Faculties/Dekan";
import Footer from "../../components/Footer";
import FackBottom from "../../components/Faculties/FakBottom";
import {
  data as bottomData,
  fakNewsData1,
  orinbosar,
  fakNewsData,
} from "../Faculties/mock";
import FakNews from "../../components/Faculties/FakNews";
import Yonalishlar from "../../components/Faculties/Yonalishlar";
import { Title } from "../../components/Generics";
import { useLanguageContext } from "../../context/LanguageContext";
import axios from "axios";
import { useFrontDepartmentContext } from "./../../context/DepartmentContext/index";
const FacultiesID = () => {
  const naviagte = useNavigate();

  const aboutRef = useRef();
  const talimRef = useRef();
  const kafedraRef = useRef();
  const tadqiqotRef = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const [data, setData] = useState([]);

  const { id } = useParams();
  const { language } = useLanguageContext();
  const { favoMarkaz } = useFrontDepartmentContext();

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        language === "uz"
          ? `/api/departament/sitegetbyiddepartament/${id}`
          : `/api/departament/sitegetbyiddepartamenttranslation/${id}`
      );
      if (res.status === 200) {
        setData(res.data);
      } else {
        setData([]);
      }
    };

    fetchData();
  }, [id, language]);

  const links = [
    { title: "Fakultet haqida" },
    { title: "Kafedralar" },
    { title: "Markazlar" },
  ];

  return (
    <div>
      <Header links={links} />
      <Showcase
        bg={bg}
        title={`${data?.title} fakultetiga xush kelibsiz!`}
        button={"Fakultet haqida batafsil bilish"}
        onClick={() => aboutRef.current.scrollIntoView({ block: "nearest" })}
      ></Showcase>
      <div className="root-container">
        <div className="root-wrapper">
          <Wrap>
            <Title title="Fakultet haqida." $border={"none"} />
            <div dangerouslySetInnerHTML={{ __html: data?.text }} />
            <Title title="Fakultet dekani." $border={"none"} />
            <Dekans
              img={dekan}
              name={"Rasulov Marufdjan Xalikovich"}
              position={" Dekan, Professor, Texnika fanlari nomzodi"}
              phone={"+99871 299 00 10"}
              email={"marufdzhan.rasulov@bk.ru"}
              li={[
                "1976-1981 yy. – Toshkent temir yо‘l muhandislari instituti talabasi",
                "1987-1990 yy. – Moskva temir yо‘l muhandislari instituti aspiranti.",
              ]}
              button={"/"}
            />
            <Title
              ref={aboutRef}
              title="Fakultet dekani o‘rinbosarlari"
              $border={"none"}
            />
            <Orinbosar>
              {orinbosar.map(({ id, name, position, links, img }) => (
                <DekanCart
                  key={id}
                  name={name}
                  position={position}
                  links={links}
                  img={img}
                />
              ))}
            </Orinbosar>
            <Title title="Fakultet e’lon va  yangiliklari" $border={"none"} />
            <News ref={talimRef}>
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
            </News>
            <Title title="Kafedralar" $border={"none"} />
            <KafedraWrap ref={kafedraRef}>
              <Kafedra>
                <Kafedra.Item
                  data-aos="zoom-in"
                  onClick={() => naviagte(`kafedra-1`)}
                  height={350}
                  $col={"1/2"}
                  $row={"1/3"}
                  $bg={kaf1}
                >
                  <Kafedra.Content>
                    Transport intellektual tizimlari muhandislig
                    <Kafedra.Arrow />
                  </Kafedra.Content>
                </Kafedra.Item>
                <Kafedra.Item
                  data-aos="zoom-in"
                  onClick={() => naviagte(`kafedra-2`)}
                  height={170}
                  $col={"2/3"}
                  $row={"1/2"}
                  $bg={kaf2}
                >
                  <Kafedra.Content>
                    Transport logistikasi <Kafedra.Arrow />
                  </Kafedra.Content>
                </Kafedra.Item>
                <Kafedra.Item
                  data-aos="zoom-in"
                  onClick={() => naviagte(`kafedra-3`)}
                  height={170}
                  $col={"2/3"}
                  $row={"2/3"}
                  $bg={kaf3}
                >
                  <Kafedra.Content>
                    Yo'l harakatini tashkil etish <Kafedra.Arrow />
                  </Kafedra.Content>
                </Kafedra.Item>
                <Kafedra.Item
                  data-aos="zoom-in"
                  onClick={() => naviagte(`kafedra-4`)}
                  height={350}
                  $col={"3/4"}
                  $row={"1/3"}
                  $bg={kaf1}
                >
                  <Kafedra.Content>
                    Transport intellektual tizimlari muhandislig
                    <Kafedra.Arrow />
                  </Kafedra.Content>
                </Kafedra.Item>
              </Kafedra>
              <Kafedra>
                <Kafedra.Item
                  data-aos="zoom-in"
                  onClick={() => naviagte(`kafedra-5`)}
                  height={254}
                  $col={"1/2"}
                  $row={"1/2"}
                  $bg={kaf3}
                >
                  <Kafedra.Content>
                    Transport intellektual tizimlari muhandislig
                    <Kafedra.Arrow />
                  </Kafedra.Content>
                </Kafedra.Item>
                <Kafedra.Item
                  data-aos="zoom-in"
                  onClick={() => naviagte(`kafedra-6`)}
                  height={254}
                  $col={"2/3"}
                  $row={"1/2"}
                  $bg={kaf3}
                >
                  <Kafedra.Content>
                    Transport intellektual tizimlari muhandislig
                    <Kafedra.Arrow />
                  </Kafedra.Content>
                </Kafedra.Item>
              </Kafedra>
            </KafedraWrap>
            <Title title="Ilmiy markazlar" $border={"none"} />
            <IlmiyMarkaz ref={tadqiqotRef}>
              {favoMarkaz?.map((e) => (
                <IlmiyMarkazCart
                  key={e?.id}
                  onClick={() => naviagte(`/${language}/department/${e?.id}`)}
                  $border={"#CECECE"}
                  dataAos="zoom-in"
                  item={e}
                />
              ))}
            </IlmiyMarkaz>
            <Yonalish>
              <Yonalish.Left data-aos="fade-right">
                <Yonalish.Title>Bakalavr yo‘nalishlari</Yonalish.Title>
                <Yonalishlar data={data1} />
              </Yonalish.Left>
              <Yonalish.Right data-aos="fade-left">
                <Yonalish.Title>Magistratura yo‘nalishlari</Yonalish.Title>
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
