import React, { useState } from "react";
import { Container } from "./style";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";

const ShowcaseBottom = ({ prop }) => {
  const [count, setCount] = useState(false);
  return (
    <Container data-aos="fade-up">
      {prop?.length &&
        prop.map((item) => (
          <ScrollTrigger
            onEnter={() => setCount(true)}
            onExit={() => setCount(false)}
            key={item.id}
          >
            <Container.Item>
              <Container.Count>
                {count && <CountUp end={item?.num} duration={2} />}
                {item?.add}
              </Container.Count>
              <Container.Sub>{item?.sub}</Container.Sub>
            </Container.Item>
          </ScrollTrigger>
        ))}
    </Container>
  );
};

export default ShowcaseBottom;
