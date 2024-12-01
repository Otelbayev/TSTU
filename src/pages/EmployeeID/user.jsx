import { Card, Flex, Image, Typography } from "antd";
import React from "react";
const { Text } = Typography;

const User = ({ img, fio, degree, score }) => {
  console.log(score);
  return (
    <Card bordered={false}>
      <Flex
        justify="center"
        align="middle"
        style={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          gap: "10px",
        }}
      >
        <Image src={img} />
        <Text strong style={{ fontSize: "25px" }}>
          {fio}
        </Text>
        <Text style={{ fontSize: "18px" }}>{degree}</Text>
        <Text style={{ fontSize: "18px" }}>{score}</Text>
      </Flex>
    </Card>
  );
};

export default User;
