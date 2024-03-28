import React, { useRef } from "react";
import { Arrow, Container } from "./style";
import arrow from "../../assets/icons/sliderArrow.svg";

const Carousel = ({ img }) => {
  const slider = useRef();
  const onMove = ({
    target: {
      dataset: { name },
    },
  }) => {
    if (name === "right") slider.current.next();
    if (name === "left") slider.current.prev();
  };
  return (
    <div style={{ position: "relative" }}>
      <Container ref={slider}>
        {img?.map((item, index) => (
          <Container.Item src={item} key={index} />
        ))}
      </Container>
      <Arrow data-name="left" onClick={onMove} $left="true" src={arrow} />
      <Arrow data-name="right" onClick={onMove} $right="true" src={arrow} />
    </div>
  );
};

export default Carousel;
