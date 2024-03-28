import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Showcase from "../../components/Showcase";
import mackbook from "../../assets/images/Macbook.png";
import iMac from "../../assets/images/iMac.png";
import { Button, Title } from "../../components/Generics";
import prof from "../../assets/images/prof.jpg";
import filterSt from "../../assets/images/filterSt.png";
import jasco from "../../assets/images/jasco.jpg";
import ramatova from "../../assets/images/ramatova.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import IlmiyMarkazCart from "../../components/IlmiyMarkazCart";
import {
  Fac,
  prop1,
  prop10,
  prop2,
  prop3,
  prop4,
  prop5,
  prop6,
  prop7,
  prop8,
  prop9,
  sliderProp,
} from "../../mock/homeProps";
import Slider from "react-slick";
import {
  Cart,
  InteractiveCart,
  LargeBanner,
  NewsItem,
  RamatovSlider,
} from "../../components/HomeElements";
import CountUp from "react-countup";
import {
  About,
  Layout,
  DarkSection,
  InteraktiveCarts,
  Fakultetlar,
  Faxriy,
  Talaba,
  FakGrid,
  Icons,
  Line,
  Talim,
  Ramatov,
} from "./style";
import FacultetCart from "../../components/Faculties/FacultetCart";
import { KafedraCart } from "../../components/Kafedra";
import ScrollTrigger from "react-scroll-trigger";

const HomePage = () => {
  const navigate = useNavigate();
  const [id, setId] = useState(1);

  let ilm = [1, 2, 3, 4];
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const ramatovSetting = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const [counterOn, setCounterOn] = useState(false);

  return (
    <div style={{ overflow: "hidden" }}>
      <Header />
      <Showcase />

      <About className="root-container">
        <div className="wrapper about" data-aos="fade-up">
          <div className="about__title">Transport universiteti haqida</div>
          <div className="about__desc">
            Lorem ipsum dolor sit amet consectetur. Ultricies sit et lacinia
            lorem at. A donec suspendisse tortor scelerisque sagittis nunc
            maecenas risus. Aliquam magna aliquam tincidunt hendrerit. Viverra
            sit non sagittis vivamus at molestie donec urna. Nisi placerat
            vivamus consequat tincidunt ac purus vel. Ultrices quis adipiscing
            quam pellentesque quam nullam nunc. Nulla ultricies ultrices
            faucibus nunc at vitae id cursus sit. Lacinia netus lorem eu vel
            enim ultrices semper lacus laoreet. Amet pellentesque leo netus
            tincidunt volutpat phasellus ut.
          </div>
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <div className="about__boxes">
              <div className="about__boxes__box">
                <Icons.Icon1 />
                <div className="about__boxes__box__count">
                  {counterOn && <CountUp end={18700} duration={2} />}+
                </div>
                <div className="about__boxes__box__min">talabalar soni</div>
              </div>
              <div className="about__boxes__box">
                <Icons.Icon2 />
                <div className="about__boxes__box__count">
                  {counterOn && <CountUp end={11900} duration={2} />}+
                </div>
                <div className="about__boxes__box__min">professorlar</div>
              </div>
              <div className="about__boxes__box">
                <Icons.Icon3 />
                <div className="about__boxes__box__count">
                  {counterOn && <CountUp end={140} duration={2} />}+
                </div>
                <div className="about__boxes__box__min">doktorantlar</div>
              </div>
              <div className="about__boxes__box">
                <Icons.Icon4 />
                <div className="about__boxes__box__count">
                  {counterOn && <CountUp end={57} duration={2} />}
                </div>
                <div className="about__boxes__box__min">
                  talim yo’nalishlari
                </div>
              </div>
              <div className="about__boxes__box">
                <Icons.Icon5 />
                <div className="about__boxes__box__count">
                  {counterOn && <CountUp end={12} duration={2} />}
                </div>
                <div className="about__boxes__box__min">qo’shma talim</div>
              </div>
              <div className="about__boxes__box">
                <Icons.Icon6 />
                <div className="about__boxes__box__count">
                  {counterOn && <CountUp end={9} duration={2} />}
                </div>
                <div className="about__boxes__box__min">fakultetlar</div>
              </div>
            </div>
          </ScrollTrigger>
          <Button type="primary" className="about__button">
            Yanada ko‘proq bilish
          </Button>
        </div>
      </About>

      <Layout className="root-container">
        <div className="root-wrapper">
          <Title
            title={"Universitet yangiliklari"}
            button={"Barchasini ko‘rish"}
          >
            <div className="flex">
              <div className="flex__item1" data-aos="fade-right">
                <LargeBanner
                  onClick={() => navigate("/news/id")}
                  prop={prop1}
                />
              </div>
              <div
                className="flex__item2"
                onClick={() => navigate("/news/id")}
                data-aos="fade-left"
              >
                <Cart prop={prop2} />
              </div>
              <div
                className="flex__item3"
                onClick={() => navigate("/news/id")}
                data-aos="fade-left"
              >
                <Cart prop={prop2} />
              </div>
              <div
                className="flex__item4"
                onClick={() => navigate("/news/id")}
                data-aos="fade-right"
              >
                <Cart prop={prop2} />
              </div>
              <div
                className="flex__item5"
                onClick={() => navigate("/news/id")}
                data-aos="fade-right"
              >
                <Cart prop={prop2} />
              </div>
              <div
                className="flex__item6"
                onClick={() => navigate("/news/id")}
                data-aos="fade-left"
              >
                <LargeBanner prop={prop1} />
              </div>
            </div>
          </Title>
        </div>
      </Layout>

      <Layout className="root-container">
        <div className="root-wrapper">
          <Title
            title={"Kutilyotgan tadbirlar"}
            button={"Barcha tadbirlarni ko‘rish "}
          >
            <div className="grid">
              <div className="grid__item first" data-aos="fade-right">
                <LargeBanner
                  prop={prop3}
                  onClick={() => navigate("/announcement/id")}
                />
                <LargeBanner
                  prop={prop3}
                  onClick={() => navigate("/announcement/id")}
                />
              </div>
              <div className="grid__item second" data-aos="fade-up">
                <LargeBanner
                  prop={prop4}
                  onClick={() => navigate("/announcement/id")}
                />
              </div>
              <div className="grid__news thrid" data-aos="fade-left">
                {arr.map((e) => (
                  <NewsItem key={e} prop={prop5} />
                ))}
              </div>
            </div>
          </Title>
        </div>
      </Layout>

      <DarkSection className="root-container">
        <div className="root-wrapper">
          <Title
            $type="dark"
            title="Interaktiv xizmatlar"
            button="Barchasini ko‘rish"
          >
            <InteraktiveCarts data-aos="fade-up">
              <div className="first">
                <div className="first__left">
                  <Icons.Int4 />
                  <NavLink
                    to="/interactive-services"
                    className="first__left__title"
                  >
                    Universitet interaktiv xizmatlaridan unumli foydalaning!
                    <Icons.DarkArrow />
                  </NavLink>
                </div>
                <div className="first__right">
                  <img
                    src={mackbook}
                    alt=""
                    className="first__right__macbook"
                  />
                  <img src={iMac} alt="" className="first__right__imac" />
                </div>
              </div>
              <div className="second">
                {prop6.map((e) => (
                  <InteractiveCart aos={"zoom-in"} key={e?.id} prop={e} />
                ))}
              </div>
            </InteraktiveCarts>
          </Title>
        </div>
      </DarkSection>

      <Fakultetlar className="root-container">
        <div className="root-wrapper">
          <Title title="Fakultet va kafedralar" button="Barchasini ko‘rish">
            <FakGrid>
              <div data-aos="fade-right" className="fak-left">
                <div className="fak-left__content">
                  {Fac.map((e) => (
                    <FacultetCart
                      key={e.id}
                      id={id}
                      onClick={() => setId(e.id)}
                      prop={e}
                    />
                  ))}
                </div>
              </div>
              <div data-aos="fade-left" className="wrap">
                <div className="fak-right">
                  <div className="fak-right__title">Kafedralar</div>
                  <div className="fak-right__cards">
                    {Fac.find((e) => e.id === id)?.kafedra?.map((e) => (
                      <KafedraCart
                        onClick={() => navigate(`/faculties/${id}/${e.id}`)}
                        key={e.id}
                        prop={e}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </FakGrid>
          </Title>
        </div>
      </Fakultetlar>

      <Talim className="root-container">
        <div className="root-wrapper">
          <Title
            title="Ta’lim"
            subtitle={
              "Fikr agar yaxshi tarbiyat topsa, Xanjar, olmosday bo’lur o’tkir."
            }
            button="Barchasini ko‘rish"
          >
            <div data-aos="fade-up">
              <Slider className="slider" {...settings}>
                {sliderProp.map((e) => (
                  <div className="slider__item" key={e.id}>
                    <KafedraCart $slider={"true"} prop={e} />
                  </div>
                ))}
              </Slider>
            </div>
          </Title>
        </div>
      </Talim>

      <div className="root-container">
        <div className="root-wrapper">
          <Title title="Faxriy professor-o‘qituvchilar" />
        </div>
      </div>

      <Faxriy>
        <div className="root-container">
          <div className="root-wrapper" data-aos="fade-up">
            <div className="content">
              <img src={prof} alt="" className="content__img" />
              <div className="content__name">
                Mirsalixov Baxodir Abdusamatovich
              </div>
              <div className="content__sub">
                Dotsent , Fizika-matematika fanlari nomzodi
              </div>
              <div className="content__p">
                Lorem ipsum dolor sit amet consectetur. Ullamcorper platea eu
                vel enim ultrices lectus odio malesuada euismod. Amet dolor eu
                vitae gravida fermentum lectus ut rutrum etiam. Diam ut dui a
                mauris non aenean fermentum. Ultrices nisi pellentesque eu
                tortor posuere in tellus congue. Adipiscing a neque eget aliquam
                egestas arcu pharetra amet. Etiam vel tincidunt quis porta massa
                vitae scelerisque pellentesque sem. At purus nec ante commodo
                venenatis hac. Dui ultrices vitae pulvinar in. Proin pretium
                nullam orci massa lectus interdum nisl.
              </div>
            </div>
          </div>
        </div>
      </Faxriy>

      <Talaba className="root-container">
        <div className="root-wrapper">
          <Title
            title="Talabaning hayoti"
            subtitle="Universitetda talabalar o'z vaqtlarini mazmunli o'tkazishlari
              uchun ko'plab sharoitlar yaratilgan"
          >
            <Layout $type="talaba">
              <div className="grid">
                <div className="grid__item" data-aos="fade-right">
                  <LargeBanner prop={prop7} />
                  <LargeBanner prop={prop8} />
                </div>
                <div data-aos="fade-up">
                  <LargeBanner prop={prop9} />
                </div>
                <div className="grid__large" data-aos="fade-left">
                  <img className="grid__large__img" src={filterSt} />
                  <div className="student">
                    <img src={jasco} alt="" className="student__img" />
                    <div className="student__name">O‘telbayev Jasurbek</div>
                    <div className="student__group">AT-3 gruh 3-kurs</div>
                    <div className="student__p">
                      Lorem ipsum dolor sit amet consectetur. Odio mattis lorem
                      adipiscing cursus in cursus enim mauris eget. Amet viverra
                      sit sociis amet viverra velit a. A integer congue etiam
                      condimentum penatibus at. Lectus magna facilisis maecenas
                      scelerisque in eget. Ultrices quam vel commodo feugiat
                      malesuada eget amet habitasse. Enim nullam neque in
                      viverra. Aenean ut est venenatis id tempor habitasse morbi
                      feugiat non. Purus amet nibh egestas vulputat
                    </div>
                  </div>
                </div>
              </div>
            </Layout>
          </Title>
        </div>
      </Talaba>

      <DarkSection className="root-container">
        <div className="root-wrapper">
          <Title
            $type="dark"
            title="Tadqiqotlar"
            button="Barcha tadqiqotlarni ko‘rish"
          >
            <div>
              <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
              >
                <div data-aos="fade-up" className="tadqiqot">
                  <div className="tadqiqot__item ">
                    <div className="mobile-flex">
                      <div className="tadqiqot__item__title">
                        Ilmiy markazlar
                      </div>
                      <div className="tadqiqot__item__count">
                        {counterOn && <CountUp end={12} duration={2} />} ta
                      </div>
                    </div>
                    <div className="tadqiqot__item__p">
                      Lorem ipsum dolor sit amet consectetur. Odio mattis lorem
                      adipiscing cursus in
                    </div>
                  </div>
                  <div className="tadqiqot__item ">
                    <div className="mobile-flex">
                      <div className="tadqiqot__item__title">Kutubxona</div>
                      <div className="tadqiqot__item__count">
                        {counterOn && <CountUp end={12} duration={2} />} ta
                      </div>
                    </div>
                    <div className="tadqiqot__item__p">
                      Lorem ipsum dolor sit amet consectetur. Odio mattis lorem
                      adipiscing cursus in
                    </div>
                  </div>
                  <div className="tadqiqot__item ">
                    <div className="mobile-flex">
                      <div className="tadqiqot__item__title">Kitoblar</div>
                      <div className="tadqiqot__item__count">
                        {counterOn && <CountUp end={12} duration={2} />} ta
                      </div>
                    </div>
                    <div className="tadqiqot__item__p">
                      Lorem ipsum dolor sit amet consectetur. Odio mattis lorem
                      adipiscing cursus in
                    </div>
                  </div>
                </div>
              </ScrollTrigger>
            </div>
          </Title>
          <Title
            $type="dark"
            title="Ilmiy markazlar"
            button="Barcha ko‘rish"
            subtitle={
              "Kashfiyotlar qilish bizning dunyomiz, sog'ligimiz va intellektual hayotimiz uchun muhimdir"
            }
          >
            <div className="markaz">
              {ilm.map((e) => (
                <IlmiyMarkazCart
                  dataAos={"zoom-in"}
                  key={e}
                  onClick={() => navigate(`/scientific-center/${e}`)}
                />
              ))}
            </div>
          </Title>
        </div>
      </DarkSection>

      <div className="root-container">
        <div className="root-wrapper">
          <Title
            title="Faxriy bitiruvchilar"
            button="Barchasini ko‘rish"
            subtitle="Bugungi kunda universitetning ko'plab bitiruvchilari O'zbekiston
              vazirliklari, idoralari va qonun chiqaruvchi organlarida rahbarlik
              lavozimlarini egallab,dunyoning yetakchi xalqaro tashkilotlari va
              yirik kompaniyalarida muvaffaqiyatli faoliyat yuritmoqdalar"
          />
        </div>
      </div>

      <Ramatov>
        <div className="root-container">
          <div className="root-wrapper" data-aos="fade-up">
            <div className="content">
              <img src={ramatova} alt="" className="content__img" />
              <div className="content__name">
                Ramatov Ochilboy Jumaniyazovich
              </div>
              <div className="content__sub">
                O‘zbekiston Bosh vazirini birinchi o‘rinbosar
              </div>
              <div className="content__p">
                Lorem ipsum dolor sit amet consectetur. Ullamcorper platea eu
                vel enim ultrices lectus odio malesuada euismod. Amet dolor eu
                vitae gravida fermentum lectus ut rutrum etiam. Diam ut dui a
                mauris non aenean fermentum. Ultrices nisi pellentesque eu
                tortor posuere in tellus congue. Adipiscing a neque eget aliquam
                egestas arcu pharetra amet. Etiam vel tincidunt quis porta massa
                vitae scelerisque pellentesque sem. At purus nec ante commodo
                venenatis hac. Dui ultrices vitae pulvinar in. Proin pretium
                nullam orci massa lectus interdum nisl.
              </div>
            </div>
          </div>
        </div>
        <Slider className="slider" {...ramatovSetting}>
          {prop10.map((e) => (
            <RamatovSlider key={e.id} prop={e} />
          ))}
        </Slider>
      </Ramatov>

      <Footer />
    </div>
  );
};

export default HomePage;
