import React, { useState } from "react";
import { Pagination } from "antd";

const Paginations = ({ current, style, total, dataAos, onChange }) => {
  const [num, setNum] = useState(current);

  return (
    <Pagination
      style={style}
      current={num || 1}
      total={total || 10}
      data-aos={dataAos}
      onChange={onChange}
    />
  );
};
export default Paginations;
