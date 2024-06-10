import React, { useEffect, useState } from "react";
import { Center, Content, Flex, Grid, Layout } from "./style";
import NewsItem from "../../components/News/NewsItem";
import newcar from "../../assets/New/newcar.png";
import { useNavigate } from "react-router-dom";
import MiniItem from "../../components/News/MiniItem";
import Pagination from "../../components/Pagination";
import RadioButton from "../../components/RadioButton";
import { useId } from "../../hooks/useId";
import { Title } from "../../components/Generics";
import flag from "../../assets/New/flag.png";
import NewsCart from "../../components/News/NewsCart";
import videoflag from "../../assets/New/flags.png";
import VideoCart from "../../components/News/VideoCart";
import video from "../../assets/New/video.mp4";

const prop1 = {
  left: "TOP istalgani",
  right: "TSTU | Yan 04, 2023",
  title: "Yangi avtomobil modeli o‘ylab topildi",
  img: newcar,
  button: "Batafsil",
};

const prop2 = {
  title: "International Vienna Energy And Climate 2023",
  left: "Ilm-fan",
  right: "TSTU | Yan 04, 2023",
};

const prop3 = [
  { id: useId(), title: "Barchasi", name: 1, checked: true },
  { id: useId(), title: "Ilm-fan", name: 2 },
  { id: useId(), title: "Ilm-fan", name: 3 },
  { id: useId(), title: "Ilm-fan", name: 4 },
  { id: useId(), title: "Ilm-fan", name: 5 },
  { id: useId(), title: "Ilm-fan", name: 6 },
];

const prop4 = [
  {
    id: useId(),
    img: flag,
    mintitle: "Ilm-fan",
    title:
      "18-noyabr - Oʻzbekiston Respublikasi davlat bayrogʻi qabul qilinganligining 32 yilligi munosabati bilan bayram dasturi boʻlib oʻtdi",
    left: "Ilm-fan",
    right: "TSTU | Yan 04, 2023",
  },
  {
    id: useId(),
    img: flag,
    mintitle: "Ilm-fan",
    title:
      "18-noyabr - Oʻzbekiston Respublikasi davlat bayrogʻi qabul qilinganligining 32 yilligi munosabati bilan bayram dasturi boʻlib oʻtdi",
    left: "Ilm-fan",
    right: "TSTU | Yan 04, 2023",
  },
  {
    id: useId(),
    img: flag,
    mintitle: "Ilm-fan",
    title:
      "18-noyabr - Oʻzbekiston Respublikasi davlat bayrogʻi qabul qilinganligining 32 yilligi munosabati bilan bayram dasturi boʻlib oʻtdi",
    left: "Ilm-fan",
    right: "TSTU | Yan 04, 2023",
  },
  {
    id: useId(),
    img: flag,
    mintitle: "Ilm-fan",
    title:
      "18-noyabr - Oʻzbekiston Respublikasi davlat bayrogʻi qabul qilinganligining 32 yilligi munosabati bilan bayram dasturi boʻlib oʻtdi",
    left: "Ilm-fan",
    right: "TSTU | Yan 04, 2023",
  },
  {
    id: useId(),
    img: flag,
    mintitle: "Ilm-fan",
    title:
      "18-noyabr - Oʻzbekiston Respublikasi davlat bayrogʻi qabul qilinganligining 32 yilligi munosabati bilan bayram dasturi boʻlib oʻtdi",
    left: "Ilm-fan",
    right: "TSTU | Yan 04, 2023",
  },
  {
    id: useId(),
    img: flag,
    mintitle: "Ilm-fan",
    title:
      "18-noyabr - Oʻzbekiston Respublikasi davlat bayrogʻi qabul qilinganligining 32 yilligi munosabati bilan bayram dasturi boʻlib oʻtdi",
    left: "Ilm-fan",
    right: "TSTU | Yan 04, 2023",
  },
  {
    id: useId(),
    img: flag,
    mintitle: "Ilm-fan",
    title:
      "18-noyabr - Oʻzbekiston Respublikasi davlat bayrogʻi qabul qilinganligining 32 yilligi munosabati bilan bayram dasturi boʻlib oʻtdi",
    left: "Ilm-fan",
    right: "TSTU | Yan 04, 2023",
  },
  {
    id: useId(),
    img: flag,
    mintitle: "Ilm-fan",
    title:
      "18-noyabr - Oʻzbekiston Respublikasi davlat bayrogʻi qabul qilinganligining 32 yilligi munosabati bilan bayram dasturi boʻlib oʻtdi",
    left: "Ilm-fan",
    right: "TSTU | Yan 04, 2023",
  },
  {
    id: useId(),
    img: flag,
    mintitle: "Ilm-fan",
    title:
      "18-noyabr - Oʻzbekiston Respublikasi davlat bayrogʻi qabul qilinganligining 32 yilligi munosabati bilan bayram dasturi boʻlib oʻtdi",
    left: "Ilm-fan",
    right: "TSTU | Yan 04, 2023",
  },
];

const prop5 = [
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

const News = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  return (
    <div className="root-container">
      <div className="root-wrapper">
        <Content $modal={modal.toString()}>
          <div className="title">Universitet yangiliklari</div>
          <Layout>
            <Layout.Item data-aos="fade-right">
              <NewsItem onClick={() => navigate("/news/id")} prop={prop1} />
              <Layout.Second>
                <MiniItem prop={prop2} onClick={() => navigate("id")} />
                <MiniItem prop={prop2} onClick={() => navigate("id")} />
                <MiniItem prop={prop2} onClick={() => navigate("id")} />
                <MiniItem prop={prop2} onClick={() => navigate("id")} />
                <MiniItem prop={prop2} onClick={() => navigate("id")} />
              </Layout.Second>
            </Layout.Item>
            <Layout.Item data-aos="fade-left">
              <NewsItem onClick={() => navigate("/news/id")} prop={prop1} />
              <Layout.Second>
                <MiniItem prop={prop2} onClick={() => navigate("id")} />
                <MiniItem prop={prop2} onClick={() => navigate("id")} />
                <MiniItem prop={prop2} onClick={() => navigate("id")} />
                <MiniItem prop={prop2} onClick={() => navigate("id")} />
                <MiniItem prop={prop2} onClick={() => navigate("id")} />
              </Layout.Second>
            </Layout.Item>
          </Layout>
          <Center>
            <Pagination total="30" dataAos="fade-right" />
            <RadioButton prop={prop3} dataAos="fade-left" />
          </Center>
          <Grid>
            {prop4.map((e) => (
              <NewsCart
                dataAos="zoom-in"
                onClick={() => navigate("id")}
                key={e.id}
                prop={e}
              />
            ))}
          </Grid>
          <Title
            title="Tadbirlardan video lavhalar"
            component={<Pagination total="50" dataAos={"fade-left"} />}
          >
            <Flex>
              {prop5.map((e) => (
                <VideoCart
                  dataAos={"zoom-in"}
                  key={e.id}
                  prop={e}
                  onClick={() => navigate("id")}
                  state={[modal, setModal]}
                />
              ))}
            </Flex>
          </Title>
          <div className="video-cart-video">
            <div
              className="video-cart-video__bg"
              onClick={() => setModal(!modal)}
            ></div>
            <video muted controls src={video}></video>
          </div>
        </Content>
      </div>
    </div>
  );
};

export default News;
