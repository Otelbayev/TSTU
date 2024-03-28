import React, { useState } from "react";
import { Pagination } from "antd";

const Paginations = ({ current, style, total, dataAos }) => {
  const [num, setNum] = useState(current);
  const onChange = (page) => {
    setNum(page);
  };
  return (
    <Pagination
      style={style}
      current={num || 1}
      onChange={onChange}
      total={total || 10}
      data-aos={dataAos}
    />
  );
};
export default Paginations;
