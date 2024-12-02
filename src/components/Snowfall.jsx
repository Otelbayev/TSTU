import React from "react";
import Snowfall from "react-snowfall";

const SnowFall = ({ children }) => {
  return (
    <div>
      <Snowfall color={"#dee4fd"} snowflakeCount={200} />

      {children}
    </div>
  );
};

export default SnowFall;
