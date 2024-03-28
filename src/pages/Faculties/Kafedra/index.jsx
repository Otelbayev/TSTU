import React, { useEffect } from "react";
import bg from "../../../assets/Faculties/bgKaf.png";
import Header from "../../../components/Faculties/Header";
import Showcase from "../../../components/Faculties/Showcase";
import Dekans from "../../../components/Faculties/Dekan";
import dekan from "../../../assets/Faculties/rustam.png";
import { Grid } from "./style";
import DekanCart from "../../../components/Faculties/DekanCart";
import Footer from "../../../components/Faculties/Footer";
import FackBottom from "../../../components/Faculties/FakBottom";
import { data as data1, kafData } from "../mock";
import { Wrap, Yonalish } from "../FacultiesId/style";
import Yonalishlar from "../../../components/Faculties/Yonalishlar";
import { Title } from "../../../components/Generics";

const Kafedra = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const data = [
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
  return (
    <div style={{ overflow: "hidden" }}>
      <Header />
      <Showcase
        $bg={bg}
        title={"Vagonlar va vagon xo’jaligi kafedrasi xush kelibsiz"}
        button={"kafedra haqida batafsil bilish"}
      ></Showcase>
      <div className="root-container">
        <div className="root-wrapper">
          <Wrap>
            <FackBottom data={data1} />
            <Title title="Fakultet dekani" $border={"none"} />
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
            <Title
              title="Kafedra professor o‘qtuvchilari tarkibi"
              $border={"none"}
            />
            <Grid>
              {kafData.map(({ id, img, name, position, links }) => (
                <DekanCart
                  key={id}
                  img={img}
                  name={name}
                  position={position}
                  links={links}
                />
              ))}
            </Grid>
            <Yonalish>
              <Yonalish.Left data-aos="fade-right">
                <Yonalish.Title>Bakalavr yo‘nalishlari</Yonalish.Title>
                <Yonalishlar data={data} />
              </Yonalish.Left>
              <Yonalish.Right data-aos="fade-left">
                <Yonalish.Title>Magistratura yo‘nalishlari</Yonalish.Title>
                <Yonalishlar data={data} />
              </Yonalish.Right>
            </Yonalish>
          </Wrap>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Kafedra;
