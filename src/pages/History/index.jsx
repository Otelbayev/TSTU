import React, { useEffect } from "react";

const History = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="root-container">
      <div className="root-wrapper">
        <h1>History</h1>
      </div>
    </div>
  );
};

export default History;
