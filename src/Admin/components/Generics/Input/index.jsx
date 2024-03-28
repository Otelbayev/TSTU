import React from "react";

const Input = ({
  label,
  className,
  placeholder,
  type,
  defaultValue,
  minLength,
  maxLength,
  id,
  name,
  onChange,
  disabled,
}) => {
  return (
    <div className={className}>
      <label htmlFor={id} className="col-sm-12 col-form-label">
        {label}
      </label>
      <div className="col-sm-12">
        <input
          className="form-control px-2"
          id={id}
          name={name}
          placeholder={placeholder}
          style={{ padding: 2 }}
          type={type ? type : "text"}
          defaultValue={defaultValue}
          minLength={minLength}
          maxLength={maxLength}
          onChange={onChange}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export default Input;
