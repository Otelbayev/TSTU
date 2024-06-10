import React, { useEffect } from "react";
import { Container } from "./style";
import car from "../../../assets/New/car.png";
import ads from "../../../assets/New/ads.png";
import TopNews from "../../../components/News/TopNews";
import { Title } from "../../../components/Generics";
import { useId } from "../../../hooks/useId";
import videoflag from "../../../assets/New/flags.png";
import VideoCart from "../../../components/News/VideoCart";

const NewsId = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const prop = [
    {
      id: useId(),
      img: videoflag,
      title:
        "18-noyabr - Oʻzbekiston Respublikasi davlat bayrogʻi qabul qilinganligining 32 yilligi munosabati bilan bayram dasturi boʻlib oʻtdi",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing ",
      left: "Tadbr",
      right: "Yan 05, 2023",
    },
    {
      id: useId(),
      img: videoflag,
      title:
        "18-noyabr - Oʻzbekiston Respublikasi davlat bayrogʻi qabul qilinganligining 32 yilligi munosabati bilan bayram dasturi boʻlib oʻtdi",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing ",
      left: "Tadbr",
      right: "Yan 05, 2023",
    },
  ];

  return (
    <div className="root-container">
      <div className="root-wrapper">
        <Container>
          <div className="title">International Vienna Energy And Climate</div>
          <div className="news-date">
            <span>April 24, 2021</span>
            <span>Reading Time: 2 Min Read</span>
          </div>
          <div className="content">
            <div className="content__left">
              <img
                loading="lazy" src={car}
                className="content__left__img1"
                data-aos="fade-right"
                alt=""
              />
              <p data-aos="fade-right">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur? Quis autem vel eum iure
                reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur, vel illum qui dolorem eum fugiat quo
                voluptas nulla pariatur?
              </p>
              <div className="content__left__wrap" data-aos="fade-right">
                <img loading="lazy" src={car} alt="" className="content__left__img2" />
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia .
                </p>
              </div>
              <p data-aos="fade-right">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur? Quis autem vel eum iure
                reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur, vel illum qui dolorem eum fugiat quo
                voluptas nulla pariatur?
              </p>
              <p data-aos="fade-right">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur? Quis autem vel eum iure
                reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur, vel illum qui dolorem eum fugiat quo
                voluptas nulla pariatur?
              </p>
            </div>
            <div className="content__right">
              <TopNews dataAos="fade-left" />
              <img loading="lazy" src={ads} alt="" data-aos="fade-left" />
              <TopNews dataAos="fade-left" />
              <img loading="lazy" src={ads} alt="" data-aos="fade-left" />
            </div>
          </div>
          <Title title="Universitet yangiliklari" button="Barchasini ko‘rish">
            <div className="newsid-bottom">
              {prop.map((e) => (
                <VideoCart dataAos={"zoom-in"} key={e.id} prop={e} />
              ))}
            </div>
          </Title>
        </Container>
      </div>
    </div>
  );
};

export default NewsId;
