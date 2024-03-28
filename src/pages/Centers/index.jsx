import React, { useEffect } from "react";
import { Content } from "./style";
import center from "../../assets/images/center.jpg";
import { useNavigate } from "react-router-dom";

const Centers = () => {
  const naviagte = useNavigate();
  const arr = [1, 2, 3, 4, 5, 6];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="root-container">
      <div className="root-wrapper">
        <Content data-aos="fade-up">
          {arr.map((e) => (
            <Content.Item key={e} onClick={() => naviagte(`${e}`)}>
              <Content.Img src={center} />
              <Content.Title>
                Raqamli ta’lim va texnologiyalar markazi
              </Content.Title>
            </Content.Item>
          ))}
        </Content>
      </div>
    </div>
  );
};

export default Centers;
