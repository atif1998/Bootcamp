import React from "react";

export const Input = ({ label, name, onChanged, ...rest }) => {
  return (
    <div>
      <label htmlFor="username" className="form-label">
        {label}
      </label>
      <input
        {...rest}
        id={name}
        className="form-control"
        placeholder={name}
        name={name}
        onChange={onChanged}
      />
    </div>
  );
};
