import React from "react";
import Snowfall from "react-snowfall";

const SnowFall = ({ children }) => {
  return (
    <div>
      <Snowfall
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          zIndex: 10,
          pointerEvents: "none",
        }}
        color={"#dee4fd"}
        snowflakeCount={200}
      />
      <div>{children}</div>
    </div>
  );
};

export default SnowFall;
