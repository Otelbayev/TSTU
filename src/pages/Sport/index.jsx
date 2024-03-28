import React, { useEffect } from "react";
import { Content } from "../Scientific/ScientificId/style";
import noimg1 from "../../assets/images/noimg1.jpg";
import noimg2 from "../../assets/images/noimg2.jpg";
import Carousel from "../../components/Carousel";
import noimg from "../../assets/images/noimg2.jpg";

const Sport = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="root-container">
      <div className="root-wrapper">
        <Content data-aos="fade-up">
          <Content.Title $first="true">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Content.Title>
          <Content.Flex>
            <Content.Img src={noimg2} />
            <Content.Img src={noimg1} />
            <Content.Img src={noimg2} />
          </Content.Flex>
          <Content.Flex>
            <Content.Img src={noimg2} />
            <Content.Img src={noimg2} />
            <Content.Img src={noimg1} />
          </Content.Flex>
          <Content.Flex style={{ gap: "50px", margin: "30px 0" }}>
            <div style={{ width: "50%" }}>
              <Carousel img={[noimg, noimg, noimg, noimg]} />
            </div>
            <div style={{ width: "50%" }}>
              <Content.Title>Lorem</Content.Title>
              <Content.P>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </Content.P>
            </div>
          </Content.Flex>
          <Content.Flex style={{ gap: "50px", margin: "30px 0" }}>
            <div style={{ width: "50%" }}>
              <Content.Title>Lorem</Content.Title>
              <Content.P>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </Content.P>
            </div>
            <div style={{ width: "50%" }}>
              <Carousel img={[noimg, noimg, noimg, noimg]} />
            </div>
          </Content.Flex>
          <Content.Flex style={{ gap: "50px", margin: "30px 0" }}>
            <div style={{ width: "50%" }}>
              <Carousel img={[noimg, noimg, noimg, noimg]} />
            </div>
            <div style={{ width: "50%" }}>
              <Content.Title>Lorem</Content.Title>
              <Content.P>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </Content.P>
            </div>
          </Content.Flex>
          <Content.Title>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Content.Title>
          <Content.P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies
            semper aenean sed sit ut. Risus interdum metus non facilisis aliquet
            erat aliquet imperdiet pulvinar. Justo magna odio pharetra est
            semper nisi. Nunc, euismod mauris nam sem. Velit fermentum porttitor
            praesent ac. Feugiat nam ipsum ut tincidunt at fermentum
            suspendisse. Nullam quam etiam hendrerit risus tellus rhoncus,
            bibendum.
          </Content.P>
          <Content.P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies
            semper aenean sed sit ut. Risus interdum metus non facilisis aliquet
            erat aliquet imperdiet pulvinar. Justo magna odio pharetra est
            semper nisi. Nunc, euismod mauris nam sem. Velit fermentum porttitor
            praesent ac. Feugiat nam ipsum ut tincidunt at fermentum
            suspendisse. Nullam quam etiam hendrerit risus tellus rhoncus,
            bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Ultricies semper aenean sed sit ut. Risus interdum metus non
            facilisis aliquet erat aliquet imperdiet pulvinar. Justo magna odio
            pharetra est semper nisi. Nunc, euismod mauris nam sem. Velit
            fermentum porttitor praesent ac. Feugiat nam ipsum ut tincidunt at
            fermentum suspendisse. Nullam quam etiam hendrerit risus tellus
            rhoncus, bibendum.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Ultricies semper aenean sed sit ut. Risus interdum metus non
            facilisis aliquet erat aliquet imperdiet pulvinar. Justo magna odio
            pharetra est semper nisi. Nunc, euismod mauris nam sem. Velit
            fermentum porttitor praesent ac. Feugiat nam ipsum ut tincidunt at
            fermentum suspendisse. Nullam quam etiam hendrerit risus tellus
            rhoncus, bibendum.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Ultricies semper aenean sed sit ut. Risus interdum metus non
            facilisis aliquet erat aliquet imperdiet pulvinar. Justo magna odio
            pharetra est semper nisi. Nunc, euismod mauris nam sem. Velit
            fermentum porttitor praesent ac. Feugiat nam ipsum ut tincidunt at
            fermentum suspendisse. Nullam quam etiam hendrerit risus tellus
            rhoncus, bibendum.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Ultricies semper aenean sed sit ut. Risus interdum metus non
            facilisis aliquet erat aliquet imperdiet pulvinar. Justo magna odio
            pharetra est semper nisi. Nunc, euismod mauris nam sem. Velit
            fermentum porttitor praesent ac. Feugiat nam ipsum ut tincidunt at
            fermentum suspendisse. Nullam quam etiam hendrerit risus tellus
            rhoncus, bibendum.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Ultricies semper aenean sed sit ut. Risus interdum metus non
            facilisis aliquet erat aliquet imperdiet pulvinar. Justo magna odio
            pharetra est semper nisi. Nunc, euismod mauris nam sem. Velit
            fermentum porttitor praesent ac. Feugiat nam ipsum ut tincidunt at
            fermentum suspendisse. Nullam quam etiam hendrerit risus tellus
            rhoncus, bibendum.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Ultricies semper aenean sed sit ut. Risus interdum metus non
            facilisis aliquet erat aliquet imperdiet pulvinar. Justo magna odio
            pharetra est semper nisi. Nunc, euismod mauris nam sem. Velit
            fermentum porttitor praesent ac. Feugiat nam ipsum ut tincidunt at
            fermentum suspendisse. Nullam quam etiam hendrerit risus tellus
            rhoncus, bibendum.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Ultricies semper aenean sed sit ut. Risus interdum metus non
            facilisis aliquet erat aliquet imperdiet pulvinar. Justo magna odio
            pharetra est semper nisi. Nunc, euismod mauris nam sem. Velit
            fermentum porttitor praesent ac. Feugiat nam ipsum ut tincidunt at
            fermentum suspendisse. Nullam quam etiam hendrerit risus tellus
            rhoncus, bibendum.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Ultricies semper aenean sed sit ut. Risus interdum metus non
            facilisis aliquet erat aliquet imperdiet pulvinar. Justo magna odio
            pharetra est semper nisi. Nunc, euismod mauris nam sem. Velit
            fermentum porttitor praesent ac. Feugiat nam ipsum ut tincidunt at
            fermentum suspendisse. Nullam quam etiam hendrerit risus tellus
            rhoncus, bibendum.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Ultricies semper aenean sed sit ut. Risus interdum metus non
            facilisis aliquet erat aliquet imperdiet pulvinar. Justo magna odio
            pharetra est semper nisi. Nunc, euismod mauris nam sem. Velit
            fermentum porttitor praesent ac. Feugiat nam ipsum ut tincidunt at
            fermentum suspendisse. Nullam quam etiam hendrerit risus tellus
            rhoncus, bibendum.
          </Content.P>
          <Content.Flex>
            <Content.Img src={noimg2} />
            <Content.Img src={noimg1} />
            <Content.Img src={noimg2} />
          </Content.Flex>
          <Content.Flex>
            <Content.Img src={noimg2} />
            <Content.Img src={noimg2} />
            <Content.Img src={noimg1} />
          </Content.Flex>
        </Content>
      </div>
    </div>
  );
};

export default Sport;
