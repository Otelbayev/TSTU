import React, { useState } from "react";
import { Select } from "antd";

const LanguageSelect = ({ label, className, value, setValue }) => {
  const options = [
    { id: 1, value: "uz", label: "Uzbek" },
    { id: 2, value: "eng", label: "English" },
    { id: 3, value: "ru", label: "Russian" },
  ];
  return (
    <div className={className}>
      <label className="col-form-label">{label}</label>
      <div className="col-sm-12">
        <Select
          options={options}
          value={value}
          style={{ width: "100%", height: "40px" }}
          onChange={(value) => setValue(value)}
        />
      </div>
    </div>
  );
};

export default LanguageSelect;
