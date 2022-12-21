import React from 'react';

const InputSlider = ({
  label,
  type,
  name,
  value,
  min = 1000,
  max = 10000,
  onChange,
  ...rest
}) => {
  return (
    <div className="form-group flex-layout input-display">
      <label className="form-label">
        {label}: £{value}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        min={min}
        max={max}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
};

export default InputSlider;
