import React, { useEffect, useRef } from "react";
import bg from "../../assets/Faculties/afrosiyob.jpg";
import Header from "../../components/Faculties/Header";
import Showcase from "../../components/Faculties/Showcase";
import Dekans from "../../components/Faculties/Dekan";
import dekan from "../../assets/Faculties/rustam.png";
import { Grid } from "./style";
import DekanCart from "../../components/Faculties/DekanCart";
import Footer from "../../components/Faculties/Footer";
import FackBottom from "../../components/Faculties/FakBottom";
import { data as data1, kafData } from "../Faculties/mock";
import { Wrap, Yonalish } from "../FacultiesID/style";
import Yonalishlar from "../../components/Faculties/Yonalishlar";
import { Title } from "../../components/Generics";

const KafedraID = () => {
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
  const aboutRef = useRef();
  const talimRef = useRef();
  const tadqiqotRef = useRef();
  return (
    <div style={{ overflow: "hidden" }}>
      <Header
        name="Kafedra"
        aboutRef={aboutRef}
        talimRef={talimRef}
        kafedra={false}
        tadqiqotRef={tadqiqotRef}
      />
      <Showcase
        $bg={bg}
        title={"Vagonlar va vagon xo’jaligi kafedrasi xush kelibsiz"}
        button={"kafedra haqida batafsil bilish"}
        onClick={() => aboutRef.current.scrollIntoView({ block: "nearest" })}
      ></Showcase>
      <div className="root-container">
        <div className="root-wrapper">
          <Wrap>
            <FackBottom data={data1} />
            <Title ref={talimRef} title="Kafedra mudiri" $border={"none"} />
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
            <Title title="Kafedra haqida" $border={"none"} />
            <p ref={aboutRef}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
              tempore accusamus, quae voluptatem nostrum porro possimus
              repellendus eligendi vitae ipsam quas recusandae modi. Tempora,
              provident maxime. Placeat dolore consectetur unde ratione tenetur
              iste mollitia nemo molestiae! Labore similique hic praesentium
              atque officiis beatae velit cupiditate ipsam incidunt nisi, minima
              placeat eaque fuga est doloribus perferendis voluptatibus a nobis
              eos consectetur, ad officia quasi sapiente omnis! Minima eum odio
              cum? Atque doloremque nisi aut nemo? Porro pariatur ad iste,
              mollitia nam debitis dolore laudantium incidunt nesciunt
              voluptatem dolorem esse temporibus tempore quasi alias sit id
              sunt, eius facilis voluptate magni quo? Eos dolore nobis quae quos
              vero aliquid! Beatae repellendus, consequatur veritatis velit
              ipsa, optio adipisci dolor error sed, odio nulla distinctio?
              Quasi, expedita cumque repellendus iure dolores facilis. Sapiente
              itaque aut sequi iusto eius possimus labore asperiores in,
              obcaecati quis accusamus necessitatibus. Quod corrupti nam
              architecto nisi? Officiis ex aspernatur, dolores eum eos quis ut
              dignissimos maiores ipsam sed error. Tempora fugiat eum voluptate
              excepturi exercitationem dignissimos ratione accusantium
              architecto sequi culpa possimus, ex velit repellat repudiandae
              expedita quasi qui eligendi facere debitis? Exercitationem minima
              veritatis iste beatae quis neque error, consequuntur et aliquid
              corporis provident excepturi ut. Voluptatem, incidunt!
            </p>
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
            <Yonalish ref={tadqiqotRef}>
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

export default KafedraID;
