import React, { useEffect } from "react";
import UniShowcase from "./../../components/UniShowcase/index";

const StudentLife = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <UniShowcase title="Talaba hayoti" />
      <div className="root-container">
        <div className="root-wrapper">
          <h1>Student Life</h1>
        </div>
      </div>
    </div>
  );
};

export default StudentLife;
