import React from "react";
import trainloading from "../../assets/icons/trainloading.gif";

const Loading = () => {
  return (
    <div>
      <div className="content-wrapper wrapper-min-height d-flex justify-content-center align-items-center">
        <section className="content">
          <div className="container-fluid">
            <img
              src={trainloading}
              loading="lazy"
              style={{ width: "100%", height: "100%" }}
              alt=""
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Loading;
