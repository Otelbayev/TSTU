import React, { useEffect } from "react";

const Department = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="root-container">
      <div className="root-wrapper">
        <h1>Department</h1>
      </div>
    </div>
  );
};

export default Department;
