const TextArea = ({
  label,
  id,
  name,
  placeholder,
  defaultValue,
  className,
  value,
  onChange,
}) => {
  return (
    <div className={className}>
      <label className="col-sm-4 col-form-label">{label}</label>
      <div className="col-sm-12">
        <textarea
          className="form-control"
          id={id}
          name={name}
          placeholder={placeholder}
          defaultValue={defaultValue}
          value={value}
          onChange={onChange}
          style={{ height: "100px" }}
        />
      </div>
    </div>
  );
};

export default TextArea;
