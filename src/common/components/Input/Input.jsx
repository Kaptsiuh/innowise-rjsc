import React from "react";
import * as s from "./Input.module.css";

export const Input = ({
  id,
  label,
  register,
  name,
  error,
  type = "text",
  placeholder,
}) => {
  const registerProps = register(name, {
    required: `${label} is required`,
  });

  return (
    <div className={s.inputGroup}>
      <label htmlFor={id} className={s.label}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={s.input}
        {...registerProps}
      />
      {error && <span className={s.errorMessage}>{error.message}</span>}
    </div>
  );
};
