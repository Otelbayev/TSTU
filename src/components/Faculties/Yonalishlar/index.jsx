import React from "react";
import { Content, Icon } from "./style";

const Yonalishlar = ({ data }) => {
  return (
    <Content>
      {data.map((e) => (
        <Content.Wrap key={e.id}>
          <Icon /> <Content.Item>{e.label}</Content.Item>
        </Content.Wrap>
      ))}
    </Content>
  );
};

export default Yonalishlar;
