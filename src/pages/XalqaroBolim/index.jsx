import React, { useEffect } from "react";

const Xalqaro = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="root-container">
      <div className="root-wrapper">
        <h1>International Department</h1>
      </div>
    </div>
  );
};

export default Xalqaro;
