import React, { useEffect } from "react";

const Honorary = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="root-container">
      <div className="root-wrapper">
        <h1>Honory</h1>
      </div>
    </div>
  );
};

export default Honorary;
