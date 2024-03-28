import React from "react";
import Paginations from "../../../components/Pagination";

const Pagination = ({ className, current, style, total, dataAos }) => {
  return (
    <div className={className}>
      <Paginations
        current={current}
        style={style}
        total={total}
        dataAos={dataAos}
      />
    </div>
  );
};

export default Pagination;
