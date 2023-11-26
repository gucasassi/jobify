/* eslint-disable react/prop-types */
const TextField = ({
  type,
  name,
  label,
  placeholder,
  defaultValue,
  onChange,
}) => {
  return (
    <div className="form-row">
      <label htmlFor="name" className="form-label">
        {label || name}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder || label}
        defaultValue={defaultValue || ""}
        onChange={onChange}
        className="form-input"
      />
    </div>
  );
};

export default TextField;
