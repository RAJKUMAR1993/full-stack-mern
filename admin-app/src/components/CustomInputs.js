import React from "react";
import { Input } from "antd";

const CustomInputs = (props) => {
  const { type, label, id, name, className, placeholder, val, oncha, onBlur } =
    props;

  return (
    <>
      <div className="mb-3">
        <label htmlFor={label} className="form-label">
          {label}
        </label>
        <input
          type={type}
          className={className}
          name={name}
          id={id}
          placeholder={placeholder}
          value={val}
          onChange={oncha}
          onBlur={oncha}
        />
      </div>
    </>
  );
};

export default CustomInputs;
