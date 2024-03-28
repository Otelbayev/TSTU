import React from "react";

const Select = ({ options, label, defaultValue, className }) => {
  return (
    <div className={className}>
      <label className="col-form-label">{label}</label>
      <div className="col-sm-12">
        <select
          className="form-control"
          defaultValue={defaultValue}
          style={{ width: "100%" }}
        >
          {options &&
            options.map(({ value, label }) => {
              return (
                <option key={value} value={value}>
                  {label}
                </option>
              );
            })}
        </select>
      </div>
    </div>
  );
};

export default Select;
