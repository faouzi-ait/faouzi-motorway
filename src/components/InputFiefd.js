import React from 'react';

const InputField = ({
  label,
  type,
  name,
  value,
  placeholder,
  onChange,
  errors,
  style,
  errormessage,
  ...rest
}) => {
  return (
    <div className="form-group input-display">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        className="form-control"
        style={style}
        errormessage={errormessage}
        placeholder={placeholder}
        onChange={onChange}
        autoComplete="off"
        {...rest}
      />
      {errormessage && (
        <div className="form-field-error" role="alert">
          {errormessage}
        </div>
      )}
    </div>
  );
};

export default InputField;
