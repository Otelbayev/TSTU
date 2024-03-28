import React, { useEffect } from "react";

const EducationalDepartment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="root-container">
      <div className="root-wrapper">
        <h1>Educational Department</h1>
      </div>
    </div>
  );
};

export default EducationalDepartment;
