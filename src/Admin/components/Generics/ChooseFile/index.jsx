import React from "react";

const ChooseFile = ({ label, className }) => {
  return (
    <div className={className}>
      <label htmlFor="img" className="col-form-label">
        {label}
      </label>
      <div className="col-sm-12">
        <input
          type="file"
          className="form-control"
          id="img"
          name="img"
          style={{ padding: 2 }}
        />
      </div>
    </div>
  );
};

export default ChooseFile;
